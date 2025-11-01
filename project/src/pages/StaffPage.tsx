import { useEffect, useState } from 'react';
import { supabase, type Staff } from '../lib/supabase';
import { Users, Mail, Phone, Filter } from 'lucide-react';

export default function StaffPage() {
  const [staff, setStaff] = useState<Staff[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');

  const departments = ['all', 'Administration', 'Teaching', 'Support'];

  useEffect(() => {
    loadStaff();
  }, [selectedDepartment]);

  async function loadStaff() {
    setLoading(true);
    try {
      let query = supabase.from('staff').select('*').order('display_order', { ascending: true });

      if (selectedDepartment !== 'all') {
        query = query.eq('department', selectedDepartment);
      }

      const { data, error } = await query;

      if (error) throw error;
      if (data) setStaff(data);
    } catch (error) {
      console.error('Error loading staff:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-green-100 p-3 rounded-lg">
            <Users className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Our Staff</h1>
        </div>
        <p className="text-lg text-gray-600">
          Meet our dedicated team of educators and administrators committed to student success.
        </p>
      </div>

      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-3">
          <Filter className="h-5 w-5 text-gray-600" />
          <span className="font-semibold text-gray-900">Filter by department:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {departments.map((department) => (
            <button
              key={department}
              onClick={() => setSelectedDepartment(department)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors capitalize ${
                selectedDepartment === department
                  ? 'bg-green-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-300'
              }`}
            >
              {department}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
        </div>
      ) : staff.length === 0 ? (
        <div className="bg-gray-50 rounded-lg p-12 text-center">
          <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No staff members found</h3>
          <p className="text-gray-600">No staff members match your selected filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {staff.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 border border-gray-200"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4">
                <span className="text-3xl font-bold text-white">
                  {member.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .toUpperCase()
                    .slice(0, 2)}
                </span>
              </div>

              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-green-600 font-semibold mb-1">{member.position}</p>
                <span className="inline-block text-xs font-medium text-gray-600 uppercase px-3 py-1 bg-gray-100 rounded-full">
                  {member.department}
                </span>
              </div>

              {member.bio && (
                <p className="text-gray-600 text-sm text-center mb-4 leading-relaxed">
                  {member.bio}
                </p>
              )}

              <div className="space-y-2 pt-4 border-t border-gray-200">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm truncate">{member.email}</span>
                </a>
                {member.phone && (
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors"
                  >
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">{member.phone}</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
