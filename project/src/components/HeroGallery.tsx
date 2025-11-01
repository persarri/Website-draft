import { useEffect, useState } from 'react';

const images = [
  '/485682878_1054631636683515_7251943290207710872_n.jpg',
  '/485075998_1053978926748786_7567158092214267722_n.jpg',
  '/484780604_1054629576683721_6740418584848315497_n.jpg',
  '/135813423_104161464960041_1322520622666090772_n.jpg',
  '/486136515_1057421153071230_8253464030841284594_n.jpg',
  '/484974435_1054629383350407_5706801068194199900_n.jpg',
  '/487445709_1063687212444624_5985706036872387789_n.jpg',
  '/487057585_1063268872486458_6484930271626619888_n.jpg',
  '/485728038_1058646382948707_1554581907764945542_n.jpg',
  '/527477377_1161568109323200_6729700775174295496_n copy.jpg',
  '/487107763_1063268885819790_3910760622838955700_n copy.jpg',
  '/486668704_1063687392444606_1609914265936254756_n copy.jpg',
  '/486395077_1058646306282048_8503738478008738020_n copy.jpg',
  '/485406751_1057856809694331_7595454012963972060_n copy.jpg',
  '/487176690_1063268825819796_228269360469976138_n copy.jpg',
];

type HeroGalleryProps = {
  onNavigate: (page: string) => void;
};

export default function HeroGallery({ onNavigate }: HeroGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
            index === currentIndex
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-110'
          }`}
        >
          <img
            src={image}
            alt={`Citadel of Talents School ${index + 1}`}
            className="w-full h-full object-cover"
            style={{
              animation: index === currentIndex ? 'zoomOut 6000ms ease-out forwards' : 'none',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>
        </div>
      ))}

      <style>{`
        @keyframes zoomOut {
          from {
            transform: scale(1.1);
          }
          to {
            transform: scale(1);
          }
        }
      `}</style>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-center px-4 transform translate-y-[16.67vh]">
          <p className="text-xl md:text-2xl text-white/90 mb-2 font-light tracking-wider">
            THE FUTURE BEGINS HERE
          </p>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mb-8 font-light leading-relaxed">
            Empowering young minds in Kitengela through excellence in education and holistic development
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <button
              onClick={() => onNavigate('about')}
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-2xl"
            >
              DISCOVER MORE
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-blue-900 transition-all transform hover:scale-105 shadow-2xl"
            >
              CONTACT US
            </button>
          </div>

          <div className="flex justify-center space-x-8 mb-6">
            {[
              { id: 'about', label: 'ABOUT' },
              { id: 'contact', label: 'CONTACT' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="text-white/90 hover:text-yellow-400 font-semibold text-sm md:text-base tracking-wider transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex justify-center space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-yellow-400 w-12'
                    : 'bg-white/40 w-8 hover:bg-white/60'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
