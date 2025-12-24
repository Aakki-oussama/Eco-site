import { Variants, Transition } from 'framer-motion';

// Centralized Framer Motion Variants for better performance and consistency

/**
 * Premium easing curve for smooth, elegant animations
 */
const premiumEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Standard easing for smooth transitions
 */
const smoothEase = 'easeInOut';

/**
 * Fade in with upward movement - reusable for various elements
 */
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (customDelay: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: premiumEase,
            delay: customDelay,
        },
    }),
};

/**
 * Container that staggers children animations
 */
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

/**
 * Fade in with scale effect
 */
export const fadeInScale: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

/**
 * Navbar slide down animation - for navbar entrance
 */
export const navbarSlideDown: Variants = {
    hidden: { y: -100 },
    visible: {
        y: 0,
        transition: {
            duration: 0.6,
            ease: premiumEase,
        },
    },
};

/**
 * Mobile menu circle reveal animation
 */
export const mobileMenuCircle: Variants = {
    hidden: {
        opacity: 0,
        clipPath: 'circle(0% at 100% 0)',
    },
    visible: {
        opacity: 1,
        clipPath: 'circle(150% at 100% 0)',
        transition: {
            duration: 0.5,
            ease: smoothEase,
        },
    },
    exit: {
        opacity: 0,
        clipPath: 'circle(0% at 100% 0)',
        transition: {
            duration: 0.5,
            ease: smoothEase,
        },
    },
};

/**
 * Slide up with fade - for menu items with custom delay
 */
export const slideUpFade: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: (customDelay: number = 0) => ({
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
            delay: customDelay,
            ease: smoothEase,
        },
    }),
};

/**
 * Horizontal scale animation - for separator lines
 */
export const scaleX: Variants = {
    hidden: { scaleX: 0 },
    visible: {
        scaleX: 1,
        transition: {
            duration: 0.5,
            delay: 0.4,
            ease: smoothEase,
        },
    },
};

/**
 * Small slide up with fade - for buttons and account links
 */
export const slideUpSmall: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: (customDelay: number = 0) => ({
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
            delay: customDelay,
            ease: smoothEase,
        },
    }),
};

/**
 * Staggered children configuration for menu items
 */
export const staggerMenuItems: Transition = {
    staggerChildren: 0.1,
    delayChildren: 0.1,
};

// Optimization for scroll triggering
export const viewportConfig = {
    once: true,
    margin: '-100px', // Triggers animation slightly before element is fully in view
};
