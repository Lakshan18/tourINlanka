import { motion, useInView, AnimatePresence } from 'framer-motion';
import { style } from "../style.js";
import { useRef, useState, useEffect } from 'react';
import { getActivityImages } from '../util/imageFinder.js';
import activitiesData from '../data/activities.json';

// Animation variants for different rows
const rowAnimations = {
  firstRow: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        when: "beforeChildren"
      }
    }
  },
  secondRow: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.6,
        when: "beforeChildren"
      }
    }
  }
};

const cardAnimations = {
  // First row animations
  tween: {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.6
      }
    }
  },
  bounce: {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        duration: 0.8
      }
    }
  },

  // Second row animations
  slide: {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12,
        duration: 0.7
      }
    }
  },
  wave: {
    hidden: { opacity: 0, y: 40, rotate: -5 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 8,
        duration: 0.9
      }
    }
  }
};

const imageVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 }
};

const Main3rdSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const [activities, setActivities] = useState([]);
  const [currentImageIndices, setCurrentImageIndices] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);

  // Split activities into two rows
  const firstRow = activities.slice(0, Math.ceil(activities.length / 2));
  const secondRow = activities.slice(Math.ceil(activities.length / 2));

  useEffect(() => {
    const loadActivityImages = async () => {
      const loadedActivities = await Promise.all(
        activitiesData.map(async (activity) => {
          const images = await getActivityImages(activity.key);
          return { ...activity, images };
        })
      );
      setActivities(loadedActivities);
      
      const indices = {};
      activitiesData.forEach((_, index) => {
        indices[index] = 0;
      });
      setCurrentImageIndices(indices);
      setHasLoaded(true);
    };

    loadActivityImages();
  }, []);

  useEffect(() => {
    if (!hasLoaded) return;

    const intervals = activities.map((_, index) => {
      return setInterval(() => {
        setCurrentImageIndices(prev => ({
          ...prev,
          [index]: (prev[index] + 1) % 3
        }));
      }, 3000 + (index * 1000));
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, [hasLoaded, activities]);

  return (
    <section ref={sectionRef} className="pt-5 pb-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className={`${style.mainTitleText} mb-6`}>
            Best Activities to do in Sri Lanka
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover unforgettable experiences that showcase Sri Lanka's diverse culture and natural beauty
          </p>
        </motion.div>

        {/* First Row - Tween and Bounce effects */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"
          variants={rowAnimations.firstRow}
          initial="hidden"
          animate={isInView && hasLoaded ? "visible" : "hidden"}
        >
          {firstRow.map((activity, index) => (
            <motion.div
              key={activity.id}
              variants={index % 2 === 0 ? cardAnimations.tween : cardAnimations.bounce}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative h-80 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="absolute inset-0">
                <AnimatePresence mode="wait">
                  {[1, 2, 3].map((i) => (
                    currentImageIndices[index] === i - 1 && (
                      <motion.div
                        key={`${activity.id}-${i}`}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${activity.images?.[`image${i}`] || '/images/placeholder-bg.jpg'})`
                        }}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        variants={imageVariants}
                        transition={{ duration: 1.2 }}
                      />
                    )
                  ))}
                </AnimatePresence>
              </div>
              
              <div className={`absolute inset-0 bg-gradient-to-b ${activity.color}`} />

              <motion.div
                className="relative h-full flex flex-col justify-end p-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-2">{activity.title}</h3>
                <p className="mb-4">{activity.description}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="self-start px-4 py-2 bg-white text-gray-800 rounded-full text-sm font-medium shadow-sm"
                >
                  Learn More →
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Second Row - Slide and Wave effects */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={rowAnimations.secondRow}
          initial="hidden"
          animate={isInView && hasLoaded ? "visible" : "hidden"}
        >
          {secondRow.map((activity, index) => (
            <motion.div
              key={activity.id}
              variants={index % 2 === 0 ? cardAnimations.slide : cardAnimations.wave}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative h-80 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="absolute inset-0">
                <AnimatePresence mode="wait">
                  {[1, 2, 3].map((i) => (
                    currentImageIndices[index + firstRow.length] === i - 1 && (
                      <motion.div
                        key={`${activity.id}-${i}`}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${activity.images?.[`image${i}`] || '/images/placeholder-bg.jpg'})`
                        }}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        variants={imageVariants}
                        transition={{ duration: 1.2 }}
                      />
                    )
                  ))}
                </AnimatePresence>
              </div>
              
              <div className={`absolute inset-0 bg-gradient-to-b ${activity.color}`} />

              <motion.div
                className="relative h-full flex flex-col justify-end p-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-2">{activity.title}</h3>
                <p className="mb-4">{activity.description}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="self-start px-4 py-2 bg-white text-gray-800 rounded-full text-sm font-medium shadow-sm"
                >
                  Learn More →
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Main3rdSection;