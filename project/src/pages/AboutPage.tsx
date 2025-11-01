import { BookOpen, Target, Heart, Award, Users, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Our School</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Citadel of Talents School has been a cornerstone of educational excellence in Kitengela,
          dedicated to nurturing young minds and preparing students for success in an
          ever-changing world. The Future Begins Here.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-xl p-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-blue-900 p-3 rounded-lg">
              <Target className="h-6 w-6 text-yellow-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            To be an educational centre that is highly regarded for its academic excellence, its contribution in actively serving and improving the community in which it operates.
          </p>
        </div>

        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-cyan-500 p-3 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We are dedicated to providing a nurturing, supportive environment for children to grow academically, socially and emotionally.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Curriculum</h3>
            <p className="text-gray-600 leading-relaxed">
              Our curriculum is designed to meet national standards while fostering creativity,
              critical thinking, and real-world problem-solving skills.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Teachers</h3>
            <p className="text-gray-600 leading-relaxed">
              Our highly qualified and passionate educators bring years of experience and
              dedication to inspire and guide each student's learning journey.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Results</h3>
            <p className="text-gray-600 leading-relaxed">
              Our students consistently achieve outstanding academic results and gain admission to
              top universities and competitive programs.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8 md:p-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-yellow-400 p-3 rounded-lg">
            <Award className="h-6 w-6 text-blue-900" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Our Achievements</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Academic Excellence</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-900 font-bold mr-2">✓</span>
                <span>95% graduation rate over the past 5 years</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-900 font-bold mr-2">✓</span>
                <span>State recognition for academic performance</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-900 font-bold mr-2">✓</span>
                <span>National Merit Scholarship recipients annually</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Beyond Academics</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-900 font-bold mr-2">✓</span>
                <span>Regional champions in sports and arts</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-900 font-bold mr-2">✓</span>
                <span>Award-winning community service programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-900 font-bold mr-2">✓</span>
                <span>Strong alumni network and mentorship program</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Community</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          We invite you to become part of the Citadel of Talents School family. Schedule a visit to
          experience our vibrant learning environment and meet our exceptional staff.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-blue-900 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-lg">
            Schedule a Tour
          </button>
          <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors shadow-lg">
            Download Brochure
          </button>
        </div>
      </div>
    </div>
  );
}
