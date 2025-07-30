import { motion } from 'framer-motion';
import { style } from "../style.js";

const benefits = [
  {
    icon: "🌍",
    title: "Beyond the Guidebook",
    description: "Our local experts craft experiences you won't find in any tourist manual",
    color: "bg-blue-100/80"
  },
  {
    icon: "🧘",
    title: "Mindful Travel Design",
    description: "Itineraries balanced between adventure and rejuvenation",
    color: "bg-amber-100/80"
  },
  {
    icon: "🕰️",
    title: "Time Well Spent",
    description: "No rushed schedules - only meaningful moments at your pace",
    color: "bg-rose-100/80"
  },
  {
    icon: "🌱",
    title: "Sustainable Footprint",
    description: "Partnerships with eco-conscious providers and communities",
    color: "bg-emerald-100/80"
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
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const Main5thSection = () => {
  return (
    <section className="pt-10  pb-15 bg-gradient-to-br bg-white relative overflow-hidden">
      {/* Decorative elements */}
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

      <div className="container mx-auto px-6 relative">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={`${style.mainTitleText} mb-6`}>
            The Art of Thoughtful Travel
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We design journeys that engage all senses while respecting local cultures and ecosystems
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`${benefit.color} backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-md transition-all border border-white/50`}
            >
              <div className="text-5xl mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">{benefit.title}</h3>
              <p className="text-slate-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Visual divider */}
        <motion.div
          className="mt-20 mb-16 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        />

        {/* Value statement */}
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-medium text-slate-800 mb-6">
            Every journey we create carries three promises:
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-1 max-w-xs mx-auto"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center text-2xl">👁️</div>
              <p className="text-slate-700">Authenticity in every experience</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-1 max-w-xs mx-auto"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-50 flex items-center justify-center text-2xl">🤲</div>
              <p className="text-slate-700">Respect for local communities</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-1 max-w-xs mx-auto"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-50 flex items-center justify-center text-2xl">♻️</div>
              <p className="text-slate-700">Sustainable tourism practices</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Main5thSection;