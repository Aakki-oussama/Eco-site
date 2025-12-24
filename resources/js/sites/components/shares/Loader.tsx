import { motion } from 'framer-motion';

// Constants
const TEXT = "EcoLaundry";
const SUBTITLE = "Meknès";
const LETTER_DELAY = 0.05;

export default function Loader() {
  const letters = TEXT.split("");

  return (
    <motion.div
      key="loader"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{
        opacity: 0,
        transition: { duration: 0.5, ease: "easeInOut" }
      }}
    >
      {/* --- Typography Animation --- */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Welcome Text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-white font-sans text-lg md:text-xl font-medium tracking-wider uppercase">
            Bienvenu Chez
          </span>
        </motion.div>

        {/* Letters */}
        <div className="flex items-baseline space-x-[1px] overflow-visible p-4">
          {letters.map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              className="font-display text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-brand-main/50 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * LETTER_DELAY,
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative mt-2"
        >
            <span className="text-white font-sans text-sm tracking-[0.5em] uppercase font-medium opacity-80">
                {SUBTITLE}
            </span>
        </motion.div>

        {/* Simple Loading Bar */}
        <div className="mt-12 w-32 h-1 bg-white/20 rounded-full overflow-hidden">
             <motion.div 
                className="h-full bg-white"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "linear" }}
             />
        </div>

      </div>
    </motion.div>
  );
}