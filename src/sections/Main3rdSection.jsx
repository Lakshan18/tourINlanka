import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { style } from "../style.js";

const rowAnimations = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren"
      }
    }
  }
};

const activitiesData = [
  {
    "id": 1,
    "key": "wildlife",
    "title": "Wildlife Safaris",
    "description": "Spot leopards & elephants in Yala and Udawalawe national parks",
    "color": "from-amber-900/50 to-amber-700/50",
    "images": {
      "image1": "/images/activities/wildlife_1.webp",
      "image2": "/images/activities/wildlife_2.webp",
      "image3": "/images/activities/wildlife_3.jpg"
    }
  },
  {
    "id": 2,
    "key": "temple",
    "title": "Ancient Temple Exploration",
    "description": "Discover 2000+ year old Buddhist temples and cave paintings",
    "color": "from-stone-900/50 to-stone-700/50",
    "images": {
      "image1": "/images/activities/temple_1.jpg",
      "image2": "/images/activities/temple_2.jpg",
      "image3": "/images/activities/temple_3.webp"
    }
  },
  {
    "id": 3,
    "key": "tea",
    "title": "Tea Plantation Tours",
    "description": "Walk through emerald green tea estates in Nuwara Eliya",
    "color": "from-green-900/50 to-green-700/50",
    "images": {
      "image1": "/images/activities/tea_1.webp",
      "image2": "/images/activities/tea_2.jpg",
      "image3": "/images/activities/tea_3.jpg"
    }
  },
  {
    "id": 4,
    "key": "beach",
    "title": "Beach Relaxation",
    "description": "Unwind on pristine golden beaches along the southern coast",
    "color": "from-blue-900/50 to-blue-700/50",
    "images": {
      "image1": "/images/activities/beach_1.webp",
      "image2": "/images/activities/beach_2.jpg",
      "image3": "/images/activities/beach_3.jpg"
    }
  },
  {
    "id": 5,
    "key": "spice",
    "title": "Spice Garden Visits",
    "description": "Learn about cinnamon, pepper and other native spices",
    "color": "from-red-900/50 to-red-700/50",
    "images": {
      "image1": "/images/activities/spice_1.webp",
      "image2": "/images/activities/spice_2.jpg",
      "image3": "/images/activities/spice_3.webp"
    }
  },
  {
    "id": 6,
    "key": "train",
    "title": "Train Journeys",
    "description": "Experience the famous Kandy to Ella scenic train ride",
    "color": "from-purple-900/50 to-purple-700/50",
    "images": {
      "image1": "/images/activities/train_1.webp",
      "image2": "/images/activities/train_2.jpg",
      "image3": "/images/activities/train_3.webp"
    }
  }
];

const cardAnimations = {
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
  const [currentImageIndices, setCurrentImageIndices] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const timeoutRefs = useRef([]);

  useEffect(() => {
    const initialIndices = {};
    activitiesData.forEach((_, index) => {
      initialIndices[index] = 0;
    });
    setCurrentImageIndices(initialIndices);
    setHasLoaded(true);
  }, []);

  useEffect(() => {
    if (!hasLoaded || !isInView) return;

    timeoutRefs.current.forEach(clearTimeout);
    timeoutRefs.current = [];

    const preloadImages = () => {
      activitiesData.forEach(activity => {
        Object.values(activity.images).forEach(src => {
          const img = new Image();
          img.src = src;
        });
      });
    };
    preloadImages();

    const transitionConfig = [
      {
        round: 1,
        order: [2, 4, 1, 6, 3, 5], 
        imageIndex: 0
      },
      {
        round: 2,
        order: [4, 1, 6, 3, 2, 5], 
        imageIndex: 1
      },
      {
        round: 3,
        order: [6, 3, 5, 2, 4, 1],
        imageIndex: 2
      }
    ];

    const transitionDuration = 3000;
    const roundDelay = 2000;

    const startAnimationRound = (roundIndex) => {
      const config = transitionConfig[roundIndex % transitionConfig.length];

      console.log(`Starting round ${config.round} with order:`, config.order);

      config.order.forEach((cardId, i) => {
        const timeoutId = setTimeout(() => {
          const cardIndex = activitiesData.findIndex(item => item.id === cardId);
          if (cardIndex !== -1) {
            setCurrentImageIndices(prev => ({
              ...prev,
              [cardIndex]: config.imageIndex
            }));
          }
        }, i * transitionDuration);

        timeoutRefs.current.push(timeoutId);
      });

      const nextRoundTimeout = setTimeout(() => {
        startAnimationRound(roundIndex + 1);
      }, (config.order.length * transitionDuration) + roundDelay);

      timeoutRefs.current.push(nextRoundTimeout);
    };

    startAnimationRound(0);

    return () => {
      timeoutRefs.current.forEach(clearTimeout);
    };
  }, [hasLoaded, isInView]);

  const getAnimationType = (index) => {
    const types = ['tween', 'bounce', 'slide', 'wave'];
    return types[index % types.length];
  };

  return (
    <section ref={sectionRef} className="pt-5 pb-20 bg-white">
      <div className="mx-auto px-6 w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className={`${style.mainTitleText} mb-6`}>
            Best Activities to do in Sri Lanka
          </h2>
          <p className={`${style.sectionSubText} 2xl:max-w-4xl xl:max-w-4xl sm:max-w-[500px] xs:max-w-[320px] mx-auto tracking-wider`}>
            Discover unforgettable experiences that showcase Sri Lanka's diverse culture and natural beauty
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6"
          variants={rowAnimations.container}
          initial="hidden"
          animate={isInView && hasLoaded ? "visible" : "hidden"}
        >
          {activitiesData.map((activity, index) => (
            <motion.div
              key={activity.id}
              variants={cardAnimations[getAnimationType(index)]}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative h-80 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="absolute inset-0">
                <AnimatePresence mode="wait">
                  {[1, 2, 3].map((i) => (
                    currentImageIndices[index] === i - 1 && (
                      <motion.div
                        key={`${activity.id}-${i}-${currentImageIndices[index]}`}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${activity.images[`image${i}`]})`
                        }}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        variants={imageVariants}
                        transition={{ duration: 1.5 }}
                      />
                    )
                  ))}
                </AnimatePresence>
              </div>

              <div
                className={`absolute inset-0 bg-gradient-to-b ${activity.color}`}
                style={{
                  mixBlendMode: 'multiply'
                }}
              />

              <motion.div
                className="relative h-full flex flex-col justify-end p-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h3 className={`${style.cardTitleText} mb-2`}>{activity.title}</h3>
                <p className={`${style.cardDefineAreaText} mb-4`}>{activity.description}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="self-start px-4 py-2 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white rounded-full text-sm font-medium shadow-sm"
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