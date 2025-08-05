import { motion } from 'framer-motion';
import { style } from "../style.js";

const benefits = [
  {
    icon: "🌍",
    title: "Beyond the Guidebook",
    description: "Our local experts craft experiences you won't find in any tourist manual",
    color: "to-cyan-400/80 from-cyan-900/80",
    bgImage: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" // Local guide with map
  },
  {
    icon: "🧘",
    title: "Mindful Travel Design",
    description: "Itineraries balanced between adventure and rejuvenation",
    color: "to-amber-400/80 from-amber-900/80",
    bgImage: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" // Woman meditating at sunrise
  },
  {
    icon: "🕰️",
    title: "Time Well Spent",
    description: "No rushed schedules - only meaningful moments at your pace",
    color: "to-rose-400/80 from-rose-900/80",
    bgImage: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" // Relaxing in hammock with watch
  },
  {
    icon: "🌱",
    title: "Sustainable Footprint",
    description: "Partnerships with eco-conscious providers and communities",
    color: "to-emerald-400/80 from-emerald-900/80",
    bgImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" // Green nature landscape
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const Main5thSection = () => {
  return (
    <section className="pt-10 pb-15 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
      {/* Background blobs */}
      <motion.div
        className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-teal-200/20 blur-3xl"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      />
      <motion.div
        className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-amber-200/20 blur-3xl"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true }}
      />

      <div className="mx-auto px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 0.77, 0.47, 0.97]
          }}
          viewport={{ once: true }}
        >
          <h2 className={`${style.mainTitleText} mb-6`}>
            The Art of Thoughtful Travel
          </h2>
          <p className={`${style.sectionSubText} max-w-3xl mx-auto`}>
            We design journeys that engage all senses while respecting local cultures and ecosystems
          </p>
        </motion.div>

        {/* Benefits cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-8 lg:gap-6"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 10
                }
              }}
              className={`${benefit.color} relative overflow-hidden rounded-2xl bg-gradient-to-t p-8 shadow-sm hover:shadow-lg transition-all border border-white/50 group`}
            >
              {/* Background image with opacity */}
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                style={{ backgroundImage: `url(${benefit.bgImage})` }}
              />

              {/* Square hover animation */}
              <motion.div
                className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100"
                initial={{ clipPath: 'circle(0% at 50% 50%)' }}
                whileHover={{
                  clipPath: 'circle(100% at 50% 50%)',
                  transition: { duration: 0.6, ease: "easeOut" }
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  className="text-5xl mb-6"
                  initial={{ scale: 0.9, rotate: -5 }}
                  whileInView={{
                    scale: 1,
                    rotate: 0,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      delay: index * 0.1
                    }
                  }}
                  viewport={{ once: true }}
                >
                  {benefit.icon}
                </motion.div>
                <motion.h3
                  className={`text-[19px] font-[Quicksand] font-semibold mb-3 text-white`}
                  initial={{ x: -10 }}
                  whileInView={{
                    x: 0,
                    transition: { delay: index * 0.1 + 0.2 }
                  }}
                  viewport={{ once: true }}
                >
                  {benefit.title}
                </motion.h3>
                <motion.p
                  className="text-gray-100"
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: { delay: index * 0.1 + 0.3 }
                  }}
                  viewport={{ once: true }}
                >
                  {benefit.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          className="mt-20 mb-16 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{
            scaleX: 1,
            transition: {
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1]
            }
          }}
          viewport={{ once: true }}
        />

        {/* Promises section */}
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.4,
              ease: [0.16, 0.77, 0.47, 0.97]
            }
          }}
          viewport={{ once: true }}
        >
          <h3 className={`text-[22px] md:text-[20px] sm:text-[18px] xs:text-[17px] font-[Rubik] font-semibold text-slate-700 mb-6`}>
            Every journey we create carries three promises:
          </h3>
          <div className="flex flex-row sm:flex-col xs:flex-col justify-center gap-6 md:gap-12 mb-10 2xl:mb-12">
            {[
              { icon: "👁️", text: "Authenticity in every experience", bg: "bg-blue-50" },
              { icon: "🤲", text: "Respect for local communities", bg: "bg-amber-50" },
              { icon: "♻️", text: "Sustainable tourism practices", bg: "bg-emerald-50" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.15 + 0.6,
                    type: "spring",
                    stiffness: 100,
                    damping: 10
                  }
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="flex-1 max-w-xs mx-auto"
              >
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full ${item.bg} flex items-center justify-center text-2xl`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  {item.icon}
                </motion.div>
                <motion.p
                  className="text-slate-700"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.8 }}
                  viewport={{ once: true }}
                >
                  {item.text}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Main5thSection;