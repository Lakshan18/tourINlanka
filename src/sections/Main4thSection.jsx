// import { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { style } from "../style.js";
// import tourPackagesData from '../data/tour_packages.json';
// import { getTourPackageImages } from '../util/imageFinder.js';

// const cardVariants = {
//   active: {
//     y: 0,
//     scale: 1,
//     opacity: 1,
//     zIndex: 10,
//     transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] }
//   },
//   next: {
//     y: -80,
//     scale: 0.85,
//     opacity: 0.7,
//     zIndex: 5,
//     transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] }
//   },
//   prev: {
//     y: 80,
//     scale: 0.85,
//     opacity: 0.7,
//     zIndex: 5,
//     transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] }
//   },
//   hidden: {
//     y: 120,
//     scale: 0.8,
//     opacity: 0,
//     transition: { duration: 0.5 }
//   }
// };

// const Main4thSection = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [tourPackages, setTourPackages] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const intervalRef = useRef(null);

//   useEffect(() => {
//     const loadTourData = async () => {
//       setIsLoading(true);
//       try {
//         const loadedTours = await Promise.all(
//           tourPackagesData.map(async (tour) => {
//             const images = await getTourPackageImages(tour.key);
//             return { ...tour, image: images.main };
//           })
//         );
//         setTourPackages(loadedTours);
//       } catch (error) {
//         console.error("Error loading tour data:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     loadTourData();
//   }, []);

//   useEffect(() => {
//     if (tourPackages.length === 0) return;

//     intervalRef.current = setInterval(() => {
//       setActiveIndex(prev => (prev + 1) % tourPackages.length);
//     }, 3000);

//     return () => clearInterval(intervalRef.current);
//   }, [tourPackages]);

//   const handleHoverStart = () => {
//     clearInterval(intervalRef.current);
//   };

//   const handleHoverEnd = () => {
//     intervalRef.current = setInterval(() => {
//       setActiveIndex(prev => (prev + 1) % tourPackages.length);
//     }, 3000);
//   };

//   if (isLoading) {
//     return (
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-6 text-center">
//           <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
//             <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
//               Loading...
//             </span>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   if (tourPackages.length === 0) {
//     return (
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-6 text-center">
//           <p className="text-gray-600">No tour packages available at the moment.</p>
//         </div>
//       </section>
//     );
//   }

//   const activePackage = tourPackages[activeIndex];

//   return (
//     <section className="pt-10 pb-25 bg-gray-50">
//       <div className="mx-auto px-6">
//         <h2 className={`${style.mainTitleText} text-center mb-16 xs:mb-5 sm:mb-12`}>
//           Discover Our Tour Packages
//         </h2>

//         <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row md:flex-row gap-8 pb-8">
//           <div className="lg:w-1/2 xl:w-1/2 2xl:w-1/2 md:w-1/2 flex flex-col md:items-start md:ps-10 xl:ps-12 2xl:ps-14 justify-center items-center">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activePackage.id}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: 20 }}
//                 transition={{ duration: 0.5 }}
//                 className="max-w-lg"
//               >
//                 <div className="mb-6">
//                   <img
//                     src={activePackage.icon}
//                     alt={activePackage.title}
//                     className="w-16 h-16"
//                   />
//                 </div>
//                 <h3 className={`${style.subTopicAreaText} mb-4 text-cyan-800`}>{activePackage.title}</h3>
//                 <p className={`${style.subDefineAreaText} mb-6 text-slate-500`}>{activePackage.description}</p>

//                 <div className="mb-8">
//                   <h4 className="font-semibold mb-3 text-[17px] xs:text-[15px] md:text-[15px] font-[Roboto] text-slate-700">Package Highlights:</h4>
//                   <ul className="grid grid-cols-2 gap-2">
//                     {activePackage.highlights.map((item, i) => (
//                       <li key={i} className="flex items-center">
//                         <span className="mr-2 text-cyan-600 font-semibold">✓</span>
//                         <span className="font-medium text-slate-500 text-[16px] xs:text-[14px] md:text-[14px]">{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="bg-white p-4 rounded-lg shadow-sm inline-block">
//                   <div className="text-gray-500 text-sm text-[12px] font-semibold font-[Quicksand]">Duration</div>
//                   <div className="font-bold text-[18px] lg:text-[16px] sm:text-[14px] xs:text-[14px] mt-1 font-[Poppins] text-slate-700">{activePackage.duration}</div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           <div
//             className="lg:w-1/2 xl:w-1/2 2xl:w-1/2 md:w-1/2 h-[500px] flex items-center justify-center"
//             onMouseEnter={handleHoverStart}
//             onMouseLeave={handleHoverEnd}
//           >
//             <div className="relative h-[320px] w-full max-w-xs">
//               {tourPackages.map((pkg, index) => {
//                 let position;
//                 if (index === activeIndex) position = "active";
//                 else if (index === (activeIndex + 1) % tourPackages.length) position = "next";
//                 else if (index === (activeIndex - 1 + tourPackages.length) % tourPackages.length) position = "prev";
//                 else position = "hidden";

//                 return (
//                   <motion.div
//                     key={pkg.id}
//                     className={`absolute inset-x-0 mx-auto w-full rounded-2xl overflow-hidden shadow-xl cursor-pointer`}
//                     variants={cardVariants}
//                     initial="hidden"
//                     animate={position}
//                     onClick={() => setActiveIndex(index)}
//                     style={{
//                       backgroundImage: `url(${pkg.image})`,
//                       backgroundSize: 'cover',
//                       backgroundPosition: 'center',
//                       height: '100%'
//                     }}
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6">
//                       <div className="text-white">
//                         <h3 className={`${style.cardTitleText} mb-2`}>{pkg.title}</h3>
//                         <div className="flex justify-between items-center">
//                           <span className={`${style.cardSmallText}`}>{pkg.duration}</span>
//                           <button className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs hover:bg-white/30 transition">
//                             View Details
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Main4thSection;




// import { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { style } from "../style.js";
// import tourPackagesData from '../data/tour_packages.json';

// const cardVariants = {
//   active: {
//     y: 0,
//     scale: 1,
//     opacity: 1,
//     zIndex: 10,
//     transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] }
//   },
//   next: {
//     y: -80,
//     scale: 0.85,
//     opacity: 0.7,
//     zIndex: 5,
//     transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] }
//   },
//   prev: {
//     y: 80,
//     scale: 0.85,
//     opacity: 0.7,
//     zIndex: 5,
//     transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] }
//   },
//   hidden: {
//     y: 120,
//     scale: 0.8,
//     opacity: 0,
//     transition: { duration: 0.5 }
//   }
// };

// const Main4thSection = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [imagesLoaded, setImagesLoaded] = useState(false);
//   const intervalRef = useRef(null);

//   const tourPackages = tourPackagesData.map(tour => {
//     const extension = tour.key === 'wildlife_tour' ? '.png' : '.jpg';
//     return {
//       ...tour,
//       image: `/images/tours/${tour.key}${extension}`,
//       thumbnail: `/images/tours/${tour.key}_thumb${extension}`
//     };
//   });

//   useEffect(() => {
//     const preloadImages = () => {
//       const imagePromises = tourPackages.map(pkg => {
//         return new Promise((resolve) => {
//           const img = new Image();
//           img.src = pkg.image;
//           img.onload = () => {
//             console.log(`Loaded: ${pkg.image}`); 
//             resolve();
//           };
//           img.onerror = () => {
//             console.error(`Failed to load: ${pkg.image}`);
//             resolve();
//           };
//         });
//       });

//       Promise.all(imagePromises).then(() => {
//         console.log('All images loaded');
//         setImagesLoaded(true);
//       });
//     };

//     preloadImages();
//   }, [tourPackages]);

//   useEffect(() => {
//     if (tourPackages.length === 0) return;

//     intervalRef.current = setInterval(() => {
//       setActiveIndex(prev => (prev + 1) % tourPackages.length);
//     }, 3000);

//     return () => clearInterval(intervalRef.current);
//   }, [tourPackages]);

//   const handleHoverStart = () => {
//     clearInterval(intervalRef.current);
//   };

//   const handleHoverEnd = () => {
//     intervalRef.current = setInterval(() => {
//       setActiveIndex(prev => (prev + 1) % tourPackages.length);
//     }, 3000);
//   };

//   if (!imagesLoaded) {
//     return (
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-6 text-center">
//           <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
//             <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
//               Loading...
//             </span>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   const activePackage = tourPackages[activeIndex];

//   return (
//     <section className="pt-10 pb-25 bg-gray-50">
//       <div className="mx-auto px-6">
//         <h2 className={`${style.mainTitleText} text-center mb-16 xs:mb-5 sm:mb-12`}>
//           Discover Our Tour Packages
//         </h2>

//         <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row md:flex-row gap-8 pb-8">
//           <div className="lg:w-1/2 xl:w-1/2 2xl:w-1/2 md:w-1/2 flex flex-col md:items-start md:ps-10 xl:ps-12 2xl:ps-14 justify-center items-center">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activePackage.id}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: 20 }}
//                 transition={{ duration: 0.5 }}
//                 className="max-w-lg"
//               >
//                 <div className="mb-6">
//                   <img
//                     src={activePackage.icon}
//                     alt={activePackage.title}
//                     className="w-16 h-16"
//                     loading="lazy"
//                   />
//                 </div>
//                 <h3 className={`${style.subTopicAreaText} mb-4 text-cyan-800`}>{activePackage.title}</h3>
//                 <p className={`${style.subDefineAreaText} mb-6 text-slate-500`}>{activePackage.description}</p>

//                 <div className="mb-8">
//                   <h4 className="font-semibold mb-3 text-[17px] xs:text-[15px] md:text-[15px] font-[Roboto] text-slate-700">Package Highlights:</h4>
//                   <ul className="grid grid-cols-2 gap-2">
//                     {activePackage.highlights.map((item, i) => (
//                       <li key={i} className="flex items-center">
//                         <span className="mr-2 text-cyan-600 font-semibold">✓</span>
//                         <span className="font-medium text-slate-500 text-[16px] xs:text-[14px] md:text-[14px]">{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="bg-white p-4 rounded-lg shadow-sm inline-block">
//                   <div className="text-gray-500 text-sm text-[12px] font-semibold font-[Quicksand]">Duration</div>
//                   <div className="font-bold text-[18px] lg:text-[16px] sm:text-[14px] xs:text-[14px] mt-1 font-[Poppins] text-slate-700">{activePackage.duration}</div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           <div
//             className="lg:w-1/2 xl:w-1/2 2xl:w-1/2 md:w-1/2 h-[500px] flex items-center justify-center"
//             onMouseEnter={handleHoverStart}
//             onMouseLeave={handleHoverEnd}
//           >
//             <div className="relative h-[320px] w-full max-w-xs">
//               {tourPackages.map((pkg, index) => {
//                 let position;
//                 if (index === activeIndex) position = "active";
//                 else if (index === (activeIndex + 1) % tourPackages.length) position = "next";
//                 else if (index === (activeIndex - 1 + tourPackages.length) % tourPackages.length) position = "prev";
//                 else position = "hidden";

//                 return (
//                   <motion.div
//                     key={pkg.id}
//                     className={`absolute inset-x-0 mx-auto w-full rounded-2xl overflow-hidden shadow-xl cursor-pointer`}
//                     variants={cardVariants}
//                     initial="hidden"
//                     animate={position}
//                     onClick={() => setActiveIndex(index)}
//                     style={{
//                       height: '100%'
//                     }}
//                   >
//                     <div className="relative w-full h-full">
//                       <img
//                         src={pkg.image}
//                         alt={pkg.title}
//                         loading={index < 2 ? 'eager' : 'lazy'}
//                         className="absolute inset-0 w-full h-full object-cover"
//                         style={{
//                           opacity: imagesLoaded ? 1 : 0,
//                           transition: 'opacity 0.5s ease'
//                         }}
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6">
//                         <div className="text-white">
//                           <h3 className={`${style.cardTitleText} mb-2`}>{pkg.title}</h3>
//                           <div className="flex justify-between items-center">
//                             <span className={`${style.cardSmallText}`}>{pkg.duration}</span>
//                             <button className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs hover:bg-white/30 transition">
//                               View Details
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Main4thSection;


import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { style } from "../style.js";
import tourPackagesData from '../data/tour_packages.json';

const cardVariants = {
  active: {
    y: 0,
    scale: 1,
    opacity: 1,
    zIndex: 10,
    transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] }
  },
  next: {
    y: -80,
    scale: 0.85,
    opacity: 0.7,
    zIndex: 5,
    transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] }
  },
  prev: {
    y: 80,
    scale: 0.85,
    opacity: 0.7,
    zIndex: 5,
    transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] }
  },
  hidden: {
    y: 120,
    scale: 0.8,
    opacity: 0,
    transition: { duration: 0.5 }
  }
};

const Main4thSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const intervalRef = useRef(null);

  // Use images directly from JSON
  const tourPackages = tourPackagesData.map(tour => ({
    ...tour,
    image: tour.mainImage,
    thumbnail: tour.thumbnail
  }));

  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = tourPackages.map(pkg => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = pkg.image;
          img.onload = () => resolve();
          img.onerror = () => resolve();
        });
      });

      Promise.all(imagePromises).then(() => {
        setImagesLoaded(true);
      });
    };

    preloadImages();
  }, [tourPackages]);

  useEffect(() => {
    if (tourPackages.length === 0) return;

    intervalRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % tourPackages.length);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [tourPackages]);

  const handleHoverStart = () => {
    clearInterval(intervalRef.current);
  };

  const handleHoverEnd = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % tourPackages.length);
    }, 3000);
  };

  if (!imagesLoaded) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      </section>
    );
  }

  const activePackage = tourPackages[activeIndex];

  return (
    <section className="pt-10 pb-25 bg-gray-50">
      <div className="mx-auto px-6">
        <h2 className={`${style.mainTitleText} text-center mb-16 xs:mb-5 sm:mb-12`}>
          Discover Our Tour Packages
        </h2>

        <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row md:flex-row gap-8 pb-8">
          <div className="lg:w-1/2 xl:w-1/2 2xl:w-1/2 md:w-1/2 flex flex-col md:items-start md:ps-10 xl:ps-12 2xl:ps-14 justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePackage.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="max-w-lg"
              >
                <div className="mb-6">
                  <img
                    src={activePackage.icon}
                    alt={activePackage.title}
                    className="w-16 h-16"
                    loading="lazy"
                  />
                </div>
                <h3 className={`${style.subTopicAreaText} mb-4 text-cyan-800`}>{activePackage.title}</h3>
                <p className={`${style.subDefineAreaText} mb-6 text-slate-500`}>{activePackage.description}</p>

                <div className="mb-8">
                  <h4 className="font-semibold mb-3 text-[17px] xs:text-[15px] md:text-[15px] font-[Roboto] text-slate-700">Package Highlights:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {activePackage.highlights.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className="mr-2 text-cyan-600 font-semibold">✓</span>
                        <span className="font-medium text-slate-500 text-[16px] xs:text-[14px] md:text-[14px]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm inline-block">
                  <div className="text-gray-500 text-sm text-[12px] font-semibold font-[Quicksand]">Duration</div>
                  <div className="font-bold text-[18px] lg:text-[16px] sm:text-[14px] xs:text-[14px] mt-1 font-[Poppins] text-slate-700">{activePackage.duration}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div
            className="lg:w-1/2 xl:w-1/2 2xl:w-1/2 md:w-1/2 h-[500px] flex items-center justify-center"
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}
          >
            <div className="relative h-[320px] w-full max-w-xs">
              {tourPackages.map((pkg, index) => {
                let position;
                if (index === activeIndex) position = "active";
                else if (index === (activeIndex + 1) % tourPackages.length) position = "next";
                else if (index === (activeIndex - 1 + tourPackages.length) % tourPackages.length) position = "prev";
                else position = "hidden";

                return (
                  <motion.div
                    key={pkg.id}
                    className={`absolute inset-x-0 mx-auto w-full rounded-2xl overflow-hidden shadow-xl cursor-pointer`}
                    variants={cardVariants}
                    initial="hidden"
                    animate={position}
                    onClick={() => setActiveIndex(index)}
                    style={{
                      height: '100%'
                    }}
                  >
                    <div className="relative w-full h-full">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        loading={index < 2 ? 'eager' : 'lazy'}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{
                          opacity: imagesLoaded ? 1 : 0,
                          transition: 'opacity 0.5s ease'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6">
                        <div className="text-white">
                          <h3 className={`${style.cardTitleText} mb-2`}>{pkg.title}</h3>
                          <div className="flex justify-between items-center">
                            <span className={`${style.cardSmallText}`}>{pkg.duration}</span>
                            <button className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs hover:bg-white/30 transition">
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main4thSection;