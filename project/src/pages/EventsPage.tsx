import { useEffect, useState } from 'react';
import { supabase, type Event } from '../lib/supabase';
import { Calendar, MapPin, Filter } from 'lucide-react';

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showPast, setShowPast] = useState(false);

  const categories = ['all', 'academic', 'sports', 'cultural', 'parent-meeting'];

  useEffect(() => {
    loadEvents();
  }, [selectedCategory, showPast]);

  async function loadEvents() {
    setLoading(true);
    try {
      let query = supabase.from('events').select('*').order('event_date', { ascending: true });

      if (selectedCategory !== 'all') {
        query = query.eq('category', selectedCategory);
      }

      if (!showPast) {
        query = query.gte('event_date', new Date().toISOString());
      }

      const { data, error } = await query;

      if (error) throw error;
      if (data) setEvents(data);
    } catch (error) {
      console.error('Error loading events:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-cyan-100 p-3 rounded-lg">
            <Calendar className="h-8 w-8 text-cyan-700" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Events Calendar</h1>
        </div>
        <p className="text-lg text-gray-600">
          Discover upcoming school events, activities, and important dates.
        </p>
      </div>

      <div className="mb-8 space-y-4">
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="font-semibold text-gray-900">Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors capitalize ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-cyan-50 border border-gray-300'
                }`}
              >
                {category.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showPast}
              onChange={(e) => setShowPast(e.target.checked)}
              className="w-5 h-5 text-cyan-600 rounded focus:ring-cyan-500"
            />
            <span className="text-gray-700 font-medium">Show past events</span>
          </label>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
        </div>
      ) : events.length === 0 ? (
        <div className="bg-gray-50 rounded-lg p-12 text-center">
          <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
          <p className="text-gray-600">
            {showPast
              ? 'No events match your selected filters.'
              : 'No upcoming events at this time. Check back soon!'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {events.map((event) => {
            const eventDate = new Date(event.event_date);
            const isPast = eventDate < new Date();

            return (
              <div
                key={event.id}
                className={`bg-white rounded-lg shadow hover:shadow-lg transition-shadow border ${
                  isPast ? 'border-gray-300 opacity-75' : 'border-gray-200'
                }`}
              >
                <div className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div
                      className={`rounded-lg p-4 text-center flex-shrink-0 ${
                        isPast ? 'bg-gray-200 text-gray-700' : 'bg-cyan-500 text-white'
                      }`}
                    >
                      <div className="text-3xl font-bold">{eventDate.getDate()}</div>
                      <div className="text-sm font-medium">
                        {eventDate.toLocaleDateString('en-US', { month: 'short' })}
                      </div>
                      <div className="text-xs">{eventDate.getFullYear()}</div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-cyan-700 uppercase px-3 py-1 bg-cyan-50 rounded-full">
                          {event.category.replace('-', ' ')}
                        </span>
                        {isPast && (
                          <span className="text-xs font-semibold text-gray-500 uppercase px-3 py-1 bg-gray-100 rounded-full">
                            Past Event
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">{event.description}</p>

                  <div className="flex items-start space-x-2 text-gray-600">
                    <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">{event.location}</p>
                      <p className="text-sm">
                        {eventDate.toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}{' '}
                        at{' '}
                        {eventDate.toLocaleTimeString('en-US', {
                          hour: 'numeric',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
