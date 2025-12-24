import { NavLink } from '@/sites/types';

export const SCROLL_THRESHOLD = 50;

export const NAV_LINKS: NavLink[] = [
    { label: 'Philosophie', href: '#story' },
    { label: 'Services', href: '#services' },
    { label: 'Processus', href: '#process' },
    { label: 'Avis', href: '#trust' },
];

export const FOOTER_SERVICES = [
    'Lavage au Kilo',
    'Pressing & Repassage',
    'Nettoyage Tapis',
    'Service Entreprises'
];

/**
 * Loader Component Configuration
 * 
 * Centralized constants for the Loader component including:
 * - Text content (title, subtitle, welcome message)
 * - Animation timing delays (when each element appears)
 * - Animation durations (how long each animation takes)
 * 
 * All timing values are in seconds.
 */
export const LOADER_CONFIG = {
    TEXT: "EcoLaundry",
    SUBTITLE: "Meknès",
    WELCOME_TEXT: "Bienvenu Chez",
    
    // Animation timing constants (in seconds)
    LETTER_DELAY: 0.05, // Delay between each letter animation
    WELCOME_DELAY: 0.2, // When welcome text starts appearing
    TITLE_START_DELAY: 0.3, // When title letters start appearing (after welcome)
    SUBTITLE_DELAY: 0.5, // When subtitle appears (after title)
    
    // Animation durations (in seconds)
    CONTAINER_FADE_IN: 0.3, // Main container fade in duration
    WELCOME_DURATION: 0.6, // Welcome text animation duration
    LETTER_DURATION: 0.5, // Each letter animation duration
    SUBTITLE_DURATION: 0.8, // Subtitle fade in duration
    CONTAINER_FADE_OUT: 0.5, // Main container fade out duration
    LOADING_BAR_DURATION: 1.5, // Loading bar fill animation duration
};
