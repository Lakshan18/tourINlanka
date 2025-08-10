// import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
// import '../styles/caraousel.css';

// const MainCarousel = () => {
//   const [destinations, setDestinations] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [transition, setTransition] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [imagesLoaded, setImagesLoaded] = useState(false);
//   const sliderRef = useRef(null);
//   const intervalRef = useRef(null);

//   const destinationsData = useMemo(() => [
//     {
//       id: 1,
//       title: "Anuradhapura",
//       key: "Anuradhapura",
//       type: "Historical Marvel and Culture",
//       bgImage: "/images/places/Anuradhapura_1.jpg",
//       cardImage: "/images/places/Anuradhapura_2.jpg",
//     },
//     {
//       id: 2,
//       title: "Nuwara Eliya", 
//       key: "NuwaraEliya",
//       type: "Hill Country Retreat",
//       bgImage: "/images/places/NuwaraEliya_1.webp",
//       cardImage: "/images/places/NuwaraEliya_2.jpg",
//     },
//     {
//       id: 3,
//       title: "Bentota", 
//       key: "Bentota",
//       type: "Scenic Beach Getaway",
//       bgImage: "/images/places/Bentota_1.jpg",
//       cardImage: "/images/places/Bentota_2.png",
//     },
//     {
//       id: 4,
//       title: "Galle",
//       key: "Galle",  
//       type: "Coastal Heritage and Culture",
//       bgImage: "/images/places/Galle_1.webp",
//       cardImage: "/images/places/Galle_2.jpg",
//     },
//     {
//       id: 5, 
//       title: "Kataragama",
//       key: "Kataragama",
//       type: "Natural Wonders and Spirituality",
//       bgImage: "/images/places/Kataragama_1.jpg",
//       cardImage: "/images/places/Kataragama_2.webp",
//     },
//     {
//       id: 6,
//       title: "Colombo",
//       key: "Colombo",
//       type: "Urban Exploration and Culture",
//       bgImage: "/images/places/Colombo_1.jpg",
//       cardImage: "/images/places/Colombo_2.jpg",
//     },
//     {
//       id: 7,
//       title: "Jaffna",
//       key: "Jaffna",
//       type: "Historical Marvel and delightful Cuisine",
//       bgImage: "/images/places/Jaffna_1.jpg",
//       cardImage: "/images/places/Jaffna_2.jpg",
//     },
//     {
//       id: 8,
//       title: "Kandy", 
//       key: "Kandy",
//       type: "Hill Country Retreat and Cultural Heritage",
//       bgImage: "/images/places/Kandy_1.jpg",
//       cardImage: "/images/places/Kandy_2.jpg",
//     },
//     {
//       id: 9, 
//       title: "Dambulla",
//       key: "Dambulla",
//       type: "Ancient Wonders and Scenic Beauty",
//       bgImage: "/images/places/Dambulla_1.jpg",
//       cardImage: "/images/places/Dambulla_2.jpg",
//     }
//   ], []);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   useEffect(() => {
//     const preloadImages = async () => {
//       const imageUrls = [];
//       destinationsData.forEach(dest => {
//         imageUrls.push(dest.bgImage);
//         imageUrls.push(dest.cardImage);
//       });

//       await Promise.all(
//         imageUrls.map(url => {
//           return new Promise((resolve) => {
//             const img = new Image();
//             img.src = url;
//             img.onload = () => {
//               console.log(`Image loaded: ${url}`);
//               resolve();
//             };
//             img.onerror = (e) => {
//               console.error(`Error loading image: ${url}`, e);
//               resolve();
//             };
//           });
//         })
//       );

//       setDestinations(destinationsData);
//       setImagesLoaded(true);
//     };

//     preloadImages();
//   }, [destinationsData]);

//   const startAutoSlide = useCallback(() => {
//     if (destinations.length === 0) return;

//     clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       setTransition(true);
//       setTimeout(() => {
//         setCurrentIndex(prev => (prev + 1) % destinations.length);
//         setTransition(false);
//       }, isMobile ? 300 : 500);
//     }, 4000);

//     return () => clearInterval(intervalRef.current);
//   }, [destinations.length, isMobile]);

//   useEffect(() => {
//     const autoSlide = startAutoSlide();
//     return () => {
//       if (autoSlide && typeof autoSlide === 'function') {
//         autoSlide();
//       }
//     };
//   }, [currentIndex, destinations.length, isMobile, startAutoSlide]);

//   const handleDotClick = (index) => {
//     clearInterval(intervalRef.current);
//     setTransition(true);
//     setTimeout(() => {
//       setCurrentIndex(index);
//       setTransition(false);
//       startAutoSlide();
//     }, 300);
//   };

//   if (!imagesLoaded) {
//     return (
//       <div className="horizontal-carousel loading">
//         <div className="spinner"></div>
//       </div>
//     );
//   }

//   const currentDestination = destinations[currentIndex];

//   return (
//     <div className="horizontal-carousel">
//       <div
//         className={`background-image xs:h-[70vh] h-screen object-cover ${transition ? 'fade-out' : 'fade-in'}`}
//         style={{ backgroundImage: `url(${currentDestination?.bgImage || ''})` }}
//       >
//         <div className={`overlay ${isMobile ? 'mobile-overlay' : ''}`} />
//       </div>

//       <div className="content-container">
//         <div className="text-content">
//           <span className='text-white font-black font-[Rubik] text-[40px] lg:text-[34px] sm:text-[30px] md:text-[30px] xs:text-[28px]'>
//             {currentDestination?.title}
//           </span>
//           <p className='text-gray-100 font-semibold font-[Quicksand] md:text-[15px] text-[24px] lg:text-[24px] sm:text-[24px] xs:text-[18px]'>
//             {currentDestination?.type}
//           </p>
//           <div className="explore-section mt-8 sm:mt-6">
//             <span className='xl:text-[20px] 2xl:text-[20px] text-[18px] text-white font-bold tracking-wider underline underline-offset-4 decoration-2 font-[Poppins]'>
//               EXPLORE
//             </span>
//             <div className="dots mt-4 flex gap-3">
//               {destinations.map((_, index) => (
//                 <span
//                   key={index}
//                   className={`dot ${currentIndex === index ? 'active' : ''} 
//                     w-3 h-3 xs:w-2 xs:h-2 rounded-full bg-white/50 transition-all duration-300
//                     hover:scale-125 active:scale-110 cursor-pointer
//                     ${currentIndex === index ? '!bg-white scale-150' : ''}`}
//                   onClick={() => handleDotClick(index)}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//         {!isMobile && (
//           <div className="cards-slider right-[5%] lg:right-[2%] md:right-[-20%]" ref={sliderRef}>
//             {[0, 1, 2].map((offset) => {
//               const index = (currentIndex + offset) % destinations.length;
//               const destination = destinations[index];
//               return (
//                 <div
//                   key={`${destination.id}-${offset}`}
//                   className={`card w-[220px] h-[320px] md:w-[190px] md:h-[280px] card-${offset}`}
//                   onClick={() => handleDotClick(index)}
//                 >
//                   <img
//                     src={destination.cardImage}
//                     alt={destination.title}
//                     loading={offset === 0 ? 'eager' : 'lazy'}
//                     onError={(e) => {
//                       e.target.src = '/images/placeholder.webp';
//                     }}
//                   />
//                   <div className="card-text">
//                     <strong>{destination.title}</strong>
//                     <span>{destination.type}</span>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MainCarousel;



import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import '../styles/caraousel.css';

const MainCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  const loadedImages = useRef(new Set());

  // Memoized destinations data
  const destinations = useMemo(() => [
    {
      id: 1,
      title: "Anuradhapura",
      key: "Anuradhapura",
      type: "Historical Marvel and Culture",
      bgImage: "/images/places/Anuradhapura_1.jpg",
      cardImage: "/images/places/Anuradhapura_2.jpg",
    },
    {
      id: 2,
      title: "Nuwara Eliya", 
      key: "NuwaraEliya",
      type: "Hill Country Retreat",
      bgImage: "/images/places/NuwaraEliya_1.webp",
      cardImage: "/images/places/NuwaraEliya_2.jpg",
    },
    {
      id: 3,
      title: "Bentota", 
      key: "Bentota",
      type: "Scenic Beach Getaway",
      bgImage: "/images/places/Bentota_1.jpg",
      cardImage: "/images/places/Bentota_2.png",
    },
    {
      id: 4,
      title: "Galle",
      key: "Galle",  
      type: "Coastal Heritage and Culture",
      bgImage: "/images/places/Galle_1.webp",
      cardImage: "/images/places/Galle_2.jpg",
    },
    {
      id: 5, 
      title: "Kataragama",
      key: "Kataragama",
      type: "Natural Wonders and Spirituality",
      bgImage: "/images/places/Kataragama_1.jpg",
      cardImage: "/images/places/Kataragama_2.webp",
    },
    {
      id: 6,
      title: "Colombo",
      key: "Colombo",
      type: "Urban Exploration and Culture",
      bgImage: "/images/places/Colombo_1.jpg",
      cardImage: "/images/places/Colombo_2.jpg",
    },
    {
      id: 7,
      title: "Jaffna",
      key: "Jaffna",
      type: "Historical Marvel and delightful Cuisine",
      bgImage: "/images/places/Jaffna_1.jpg",
      cardImage: "/images/places/Jaffna_2.jpg",
    },
    {
      id: 8,
      title: "Kandy", 
      key: "Kandy",
      type: "Hill Country Retreat and Cultural Heritage",
      bgImage: "/images/places/Kandy_1.jpg",
      cardImage: "/images/places/Kandy_2.jpg",
    },
    {
      id: 9, 
      title: "Dambulla",
      key: "Dambulla",
      type: "Ancient Wonders and Scenic Beauty",
      bgImage: "/images/places/Dambulla_1.jpg",
      cardImage: "/images/places/Dambulla_2.jpg",
    }
  ], []);

  // Preload only visible and nearby images
  const preloadImages = useCallback((index) => {
    const imagesToLoad = new Set();
    
    // Current background image (highest priority)
    imagesToLoad.add(destinations[index].bgImage);
    
    // Current and next 2 card images (for desktop)
    if (!isMobile) {
      for (let i = 0; i < 3; i++) {
        const idx = (index + i) % destinations.length;
        imagesToLoad.add(destinations[idx].cardImage);
      }
    }
    
    // Don't reload already loaded images
    const imagesToPreload = [...imagesToLoad].filter(
      url => !loadedImages.current.has(url)
    );

    // Load images with priority for background image
    imagesToPreload.forEach(url => {
      const img = new Image();
      img.src = url;
      img.loading = url === destinations[index].bgImage ? 'eager' : 'lazy';
      img.onload = () => {
        loadedImages.current.add(url);
        console.log(`Loaded: ${url}`);
      };
      img.onerror = () => {
        console.error(`Failed to load: ${url}`);
        // Fallback to placeholder if needed
        loadedImages.current.add(url); // Prevent retries
      };
    });
  }, [destinations, isMobile]);

  // Check mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initial preload and setup
  useEffect(() => {
    preloadImages(currentIndex);
  }, [currentIndex, preloadImages]);

  // Auto-slide functionality
  const startAutoSlide = useCallback(() => {
    if (destinations.length === 0) return;

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setTransition(true);
      setTimeout(() => {
        const newIndex = (currentIndex + 1) % destinations.length;
        setCurrentIndex(newIndex);
        preloadImages(newIndex); // Preload next set of images
        setTransition(false);
      }, isMobile ? 300 : 500);
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, [currentIndex, destinations.length, isMobile, preloadImages]);

  // Start/stop auto-slide
  useEffect(() => {
    const autoSlide = startAutoSlide();
    return () => {
      if (autoSlide && typeof autoSlide === 'function') {
        autoSlide();
      }
    };
  }, [startAutoSlide]);

  // Handle manual slide change
  const handleDotClick = (index) => {
    clearInterval(intervalRef.current);
    setTransition(true);
    setTimeout(() => {
      setCurrentIndex(index);
      preloadImages(index);
      setTransition(false);
      startAutoSlide();
    }, 300);
  };

  const currentDestination = destinations[currentIndex];

  return (
    <div className="horizontal-carousel">
      {/* Background Image */}
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
                    loading={offset === 0 ? 'eager' : 'lazy'}
                    onError={(e) => {
                      e.target.src = '/images/placeholder.webp';
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