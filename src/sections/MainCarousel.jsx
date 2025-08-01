// import { useState, useEffect, useRef } from 'react';
// import '../styles/caraousel.css';
// import destinationsData from '../data/destinations.json';
// import { getDestinationImages } from '../util/imageFinder.js';

// const MainCarousel = () => {
//   const [destinations, setDestinations] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [transition, setTransition] = useState(false);
//   const [animationState, setAnimationState] = useState('idle');
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     const loadDestinations = async () => {
//       const processed = await Promise.all(
//         destinationsData.map(async dest => ({
//           ...dest,
//           ...await getDestinationImages(dest.key)
//         }))
//       );
//       setDestinations(processed);
//     };
//     loadDestinations();
//   }, []);

//   const getVisibleCards = () => {
//     if (destinations.length === 0) return [];

//     const cards = [];
//     for (let i = 0; i < Math.min(3, destinations.length); i++) {
//       const index = (currentIndex + i) % destinations.length;
//       cards.push({
//         ...destinations[index],
//         position: i,
//         state: animationState === 'exiting' && i === 0 ? 'exiting' :
//           animationState === 'entering' && i === 2 ? 'entering' : 'idle'
//       });
//     }
//     return cards;
//   };

//   useEffect(() => {
//     if (destinations.length === 0) return;

//     const interval = setInterval(() => {
//       setAnimationState('exiting');
//       setTransition(true);

//       setTimeout(() => {
//         setCurrentIndex(prev => (prev + 1) % destinations.length);
//         setAnimationState('entering');

//         setTimeout(() => {
//           setTransition(false);
//           setAnimationState('idle');
//         }, 400);
//       }, 400);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [currentIndex, destinations.length]);

//   if (destinations.length === 0) {
//     return <div className="horizontal-carousel loading">Loading destinations...</div>;
//   }

//   return (
//     <div className="horizontal-carousel mb-10">
//       <div
//         className={`background-image ${transition ? 'fade-out' : 'fade-in'}`}
//         style={{ backgroundImage: `url(${destinations[currentIndex]?.bgImage || ''})` }}
//       >
//         <div className="overlay" />
//       </div>

//       <div className="content-container">
//         <div className="text-content">
//           <h2>{destinations[currentIndex]?.title}</h2>
//           <p>{destinations[currentIndex]?.type}</p>
//           <div className="explore-section">
//             <h3>EXPLORE</h3>
//             <div className="dots">
//               {destinations.map((_, index) => (
//                 <span
//                   key={index}
//                   className={`dot ${currentIndex === index ? 'active' : ''}`}
//                   onClick={() => setCurrentIndex(index)}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="cards-slider" ref={sliderRef}>
//           {getVisibleCards().map((card, i) => (
//             <div
//               key={`${card.id}-${i}`}
//               className={`card card-${i} ${card.state}`}
//               onClick={() => setCurrentIndex((currentIndex + i) % destinations.length)}
//             >
//               <img
//                 src={card.cardImage}
//                 alt={card.title}
//                 onError={(e) => {
//                   e.target.src = '/images/placeholder.jpg';
//                 }}
//               />
//               <div className="card-text">
//                 <strong>{card.title}</strong>
//                 <span>{card.type}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainCarousel;



import { useState, useEffect, useRef } from 'react';
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

  const startAutoSlide = () => {
    if (destinations.length === 0) return;

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setTransition(true);
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % destinations.length);
        setTransition(false);
      }, isMobile ? 300 : 500);
    }, 4000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [currentIndex, destinations.length, isMobile]);

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
        className={`background-image ${transition ? 'fade-out' : 'fade-in'}`}
        style={{ backgroundImage: `url(${currentDestination?.bgImage || ''})` }}
      >
        <div className="overlay" />
      </div>

      <div className="content-container">
        <div className="text-content">
          <h2>{currentDestination?.title}</h2>
          <p>{currentDestination?.type}</p>
          <div className="explore-section">
            <h3>EXPLORE</h3>
            <div className="dots">
              {destinations.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${currentIndex === index ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {!isMobile && (
          <div className="cards-slider" ref={sliderRef}>
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % destinations.length;
              const destination = destinations[index];
              return (
                <div
                  key={`${destination.id}-${offset}`}
                  className={`card card-${offset}`}
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