import { useEffect, useState } from 'react';
import { supabase, type Announcement } from '../lib/supabase';
import { Megaphone, Filter } from 'lucide-react';

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'general', 'academic', 'sports', 'events'];

  useEffect(() => {
    loadAnnouncements();
  }, [selectedCategory]);

  async function loadAnnouncements() {
    setLoading(true);
    try {
      let query = supabase
        .from('announcements')
        .select('*')
        .order('published_date', { ascending: false });

      if (selectedCategory !== 'all') {
        query = query.eq('category', selectedCategory);
      }

      const { data, error } = await query;

      if (error) throw error;
      if (data) setAnnouncements(data);
    } catch (error) {
      console.error('Error loading announcements:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-yellow-100 p-3 rounded-lg">
            <Megaphone className="h-8 w-8 text-blue-900" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Announcements</h1>
        </div>
        <p className="text-lg text-gray-600">
          Stay updated with the latest news and information from Citadel of Talents School.
        </p>
      </div>

      <div className="mb-8">
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
                  ? 'bg-blue-900 text-yellow-400'
                  : 'bg-white text-gray-700 hover:bg-yellow-50 border border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
        </div>
      ) : announcements.length === 0 ? (
        <div className="bg-gray-50 rounded-lg p-12 text-center">
          <Megaphone className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No announcements yet</h3>
          <p className="text-gray-600">Check back soon for updates.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {announcements.map((announcement) => (
            <article
              key={announcement.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 border border-gray-200"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="text-xs font-semibold text-blue-900 uppercase px-3 py-1 bg-yellow-100 rounded-full">
                  {announcement.category}
                </span>
                <time className="text-sm text-gray-500">
                  {new Date(announcement.published_date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{announcement.title}</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {announcement.content}
              </p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
