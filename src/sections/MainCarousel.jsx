import { useState, useEffect, useRef, useCallback } from 'react';
import '../styles/caraousel.css';
import destinationsData from '../data/destinations.json';
import { getDestinationImages } from '../util/imageFinder.js';

const MainCarousel = () => {
  const [destinations, setDestinations] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const loadDestinations = async () => {
      const processed = await Promise.all(
        destinationsData.map(async dest => ({
          ...dest,
          ...await getDestinationImages(dest.key)
        }))
      );
      setDestinations(processed);
    };
    loadDestinations();
  }, []);

  const startAutoSlide = useCallback(() => {
    if (destinations.length === 0) return;

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setTransition(true);
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % destinations.length);
        setTransition(false);
      }, isMobile ? 300 : 500);
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, [destinations.length, isMobile]);

  useEffect(() => {
    const autoSlide = startAutoSlide();
    return () => {
      if (autoSlide && typeof autoSlide === 'function') {
        autoSlide(); // Cleanup
      }
    };
  }, [currentIndex, destinations.length, isMobile, startAutoSlide]);

  const handleDotClick = (index) => {
    clearInterval(intervalRef.current);
    setTransition(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setTransition(false);
      startAutoSlide();
    }, 300);
  };

  if (destinations.length === 0) {
    return <div className="horizontal-carousel loading">Loading destinations...</div>;
  }

  const currentDestination = destinations[currentIndex];

  return (
    <div className="horizontal-carousel">
      <div
        className={`background-image xs:h-[70vh] h-screen object-cover ${transition ? 'fade-out' : 'fade-in'}`}
        style={{ backgroundImage: `url(${currentDestination?.bgImage || ''})` }}
      >
        <div className={`overlay ${isMobile ? 'mobile-overlay' : ''}`} />
      </div>

      <div className="content-container">
        <div className="text-content">
          <span className='text-white font-black font-[Rubik] text-[40px] lg:text-[34px] sm:text-[30px] md:text-[30px] xs:text-[28px]'>
            {currentDestination?.title}
          </span>
          <p className='text-gray-100 font-semibold font-[Quicksand] md:text-[15px] text-[24px] lg:text-[24px] sm:text-[24px] xs:text-[18px]'>
            {currentDestination?.type}
          </p>
          <div className="explore-section mt-8 sm:mt-6">
            <span className='xl:text-[20px] 2xl:text-[20px] text-[18px] text-white font-bold tracking-wider underline underline-offset-4 decoration-2 font-[Poppins]'>
              EXPLORE
            </span>
            <div className="dots mt-4 flex gap-3">
              {destinations.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${currentIndex === index ? 'active' : ''} 
                    w-3 h-3 xs:w-2 xs:h-2 rounded-full bg-white/50 transition-all duration-300
                    hover:scale-125 active:scale-110 cursor-pointer
                    ${currentIndex === index ? '!bg-white scale-150' : ''}`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {!isMobile && (
          <div className="cards-slider right-[5%] lg:right-[2%] md:right-[-20%]" ref={sliderRef}>
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % destinations.length;
              const destination = destinations[index];
              return (
                <div
                  key={`${destination.id}-${offset}`}
                  className={`card w-[220px] h-[320px] md:w-[190px] md:h-[280px] card-${offset}`}
                  onClick={() => handleDotClick(index)}
                >
                  <img
                    src={destination.cardImage}
                    alt={destination.title}
                    onError={(e) => {
                      e.target.src = '/images/placeholder.jpg';
                    }}
                  />
                  <div className="card-text">
                    <strong>{destination.title}</strong>
                    <span>{destination.type}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainCarousel;