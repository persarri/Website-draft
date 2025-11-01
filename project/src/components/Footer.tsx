import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-yellow-400 text-lg font-bold mb-4">Citadel of Talents School</h3>
            <p className="text-sm leading-relaxed">
              The Future Begins Here. Dedicated to providing exceptional education and nurturing the leaders of tomorrow in Kitengela.
              Our mission is to inspire, educate, and empower every student.
            </p>
          </div>

          <div>
            <h3 className="text-yellow-400 text-lg font-bold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-sm">Airview Estate, Kitengela</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-sm">+254 792 494210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-sm">citadeltalents@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-yellow-400 text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.facebook.com/share/1DAqvLi9Rh"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 p-3 rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/citadeloftalentsschool?igsh=NnUzZTBrMHczZmRk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 p-3 rounded-lg hover:bg-pink-500 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@citadeloftalentsschool"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 p-3 rounded-lg hover:bg-red-600 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@citadeloftalentsschool"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 p-3 rounded-lg hover:bg-black hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-400">
                School Hours: Monday - Friday<br />
                8:00 AM - 3:30 PM
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Citadel of Talents School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
