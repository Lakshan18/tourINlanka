import { motion } from 'framer-motion';

const LoadingBuff = () => {
  const bubbles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: Math.random() * 40 + 10,
    left: Math.random() * 100,
    top: Math.random() * 100, 
    color: `hsla(${Math.random() * 60 + 190}, 80%, 70%, ${Math.random() * 0.4 + 0.2})`,
    delay: Math.random() * 0.5,
    duration: Math.random() * 0.5 + 0.5 
  }));

  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 flex flex-col justify-center items-center z-50 overflow-hidden">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.2, 1.5],
            opacity: [0, 0.7, 0]
          }}
          transition={{
            delay: bubble.delay,
            duration: bubble.duration,
            repeat: Infinity,
            repeatDelay: Math.random() * 3 + 1,
            ease: "easeOut"
          }}
          style={{
            left: `${bubble.left}%`,
            top: `${bubble.top}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            background: bubble.color,
            position: 'absolute',
            borderRadius: '50%'
          }}
        />
      ))}

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-2 border-blue-100 border-t-blue-500 rounded-full"
        />

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-24 h-24 p-2"
        >
          <img
            src="/travel_logo.png"
            alt="Travel Logo"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </motion.div>

      <motion.div className="flex mt-6 space-x-2 z-10">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-3 h-3 bg-blue-500 rounded-full"
            animate={{
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-gray-600 xs:text-[13px] xs:text-center font-medium font-[Marienda] z-10"
      >
        Where Sri Lanka’s<br className='hidden xs:flex' /> Soul Awaits.
      </motion.p>
    </div>
  );
};

export default LoadingBuff;