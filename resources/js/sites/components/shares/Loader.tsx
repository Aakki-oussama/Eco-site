import { motion } from 'framer-motion';
import { LOADER_CONFIG } from '@/sites/config';
import {
    loaderContainer,
    loaderWelcomeText,
    loaderLetter,
    loaderSubtitle,
    loaderProgressBar,
} from '@/sites/utils/animation';

/**
 * Loader Component
 * 
 * Displays a full-screen loading animation with:
 * - Welcome message ("Bienvenu Chez")
 * - Animated title letters (EcoLaundry)
 * - Subtitle (Meknès)
 * - Progress bar indicator
 * 
 * Uses centralized animation variants and constants for:
 * - Better maintainability
 * - Consistent animation timing
 * - Easy customization
 */
export default function Loader() {
    // Split title text into individual letters for staggered animation
    // This creates the letter-by-letter reveal effect
    const letters = LOADER_CONFIG.TEXT.split('');

    return (
        <motion.div
            key="loader"
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary overflow-hidden"
            variants={loaderContainer}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {/* 
                Main content container with relative positioning
                z-10 ensures content appears above background layers
            */}
            <div className="relative z-10 flex flex-col items-center">
                {/* 
                    Welcome Text Section
                    Displays "Bienvenu Chez" above the main title
                    Animates with slide-down and fade-in effect
                */}
                <motion.div
                    variants={loaderWelcomeText}
                    initial="hidden"
                    animate="visible"
                    className="mb-4"
                >
                    <span className="text-white font-sans text-lg md:text-xl font-medium tracking-wider uppercase">
                        {LOADER_CONFIG.WELCOME_TEXT}
                    </span>
                </motion.div>

                {/* 
                    Title Letters Section
                    Each letter animates individually with staggered delays
                    Creates a sequential reveal effect from left to right
                    Uses gradient text effect for visual appeal
                */}
                <div className="flex items-baseline space-x-[1px] overflow-visible p-4">
                    {letters.map((char: string, index: number) => (
                        <motion.span
                            key={`${char}-${index}`}
                            variants={loaderLetter}
                            custom={LOADER_CONFIG.TITLE_START_DELAY + index * LOADER_CONFIG.LETTER_DELAY}
                            initial="hidden"
                            animate="visible"
                            className="font-display text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-brand-main/50 drop-shadow-lg"
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>

                {/* 
                    Subtitle Section
                    Displays location "Meknès" below the main title
                    Simple fade-in animation after title appears
                */}
                <motion.div
                    variants={loaderSubtitle}
                    initial="hidden"
                    animate="visible"
                    className="relative mt-2"
                >
                    <span className="text-white font-sans text-sm tracking-[0.5em] uppercase font-medium opacity-80">
                        {LOADER_CONFIG.SUBTITLE}
                    </span>
                </motion.div>

                {/* 
                    Loading Progress Bar
                    Visual indicator showing loading progress
                    Fills from 0% to 100% width with linear animation
                    Provides user feedback during loading
                */}
                <div className="mt-12 w-32 h-1 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                        variants={loaderProgressBar}
                        initial="hidden"
                        animate="visible"
                        className="h-full bg-white"
                    />
                </div>
            </div>
        </motion.div>
    );
}