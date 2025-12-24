import { useState, useCallback, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { login } from '@/routes';
import { NAV_LINKS } from '@/sites/config';
import { useScrollPosition, useBodyScrollLock } from '@/sites/hooks';
import { cn } from '@/lib/utils';
import {
    navbarSlideDown,
    mobileMenuCircle,
    slideUpFade,
    scaleX,
    slideUpSmall,
} from '@/sites/utils/animation';

export default function Navbar() {
    const isScrolled = useScrollPosition();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useBodyScrollLock(isMobileOpen);

    const closeMobileMenu = useCallback(() => {
        setIsMobileOpen(false);
    }, []);

    const toggleMobileMenu = useCallback(() => {
        setIsMobileOpen((prev) => !prev);
    }, []);

    // Close mobile menu on Escape key
    useEffect(() => {
        if (!isMobileOpen) return;

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeMobileMenu();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isMobileOpen, closeMobileMenu]);

  return (
    <>
            <motion.nav
                variants={navbarSlideDown}
                initial="hidden"
                animate="visible"
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 will-change-transform',
                    isScrolled
                        ? 'py-3 bg-brand-cream/90 backdrop-blur-md shadow-sm border-b border-brand-main/10'
                        : 'py-6 bg-transparent'
                )}
            >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="z-50 relative" aria-label="EcoLaundry Accueil">
            <span
                className={cn(
                    'font-display font-bold text-2xl tracking-tight transition-colors duration-300',
                    isMobileOpen ? 'text-white' : 'text-brand-dark'
                )}
            >
                EcoLaundry
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-brand-dark/80 hover:text-brand-main transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-brand-main hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}

            {/* Login/Register Icon Button - Premium Look */}
            <Link
              href={login()}
              aria-label="Mon Espace Client"
              className="group relative w-11 h-11 flex items-center justify-center rounded-full border border-brand-dark/10 bg-white/60 hover:bg-brand-dark text-brand-dark hover:text-white transition-all duration-300 backdrop-blur-sm shadow-sm hover:shadow-md hover:scale-105 active:scale-95"
            >
              <User size={20} strokeWidth={2} className="transition-transform duration-300 group-hover:scale-110" />
            </Link>
          </div>

            {/* Mobile Toggle */}
            <button
                type="button"
                className={cn(
                    'md:hidden z-50 p-2 -mr-2 transition-colors duration-300',
                    isMobileOpen ? 'text-white' : 'text-brand-dark'
                )}
                onClick={toggleMobileMenu}
                aria-label={isMobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                aria-expanded={isMobileOpen}
                aria-controls="mobile-menu"
            >
                {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
                <motion.div
                    id="mobile-menu"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Menu de navigation mobile"
                    variants={mobileMenuCircle}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="fixed inset-0 z-40 bg-brand-dark flex flex-col items-center justify-center touch-none overflow-hidden"
                >
            {/* Background elements for vibe */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-main rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="flex flex-col items-center gap-8 w-full px-6">
                    {NAV_LINKS.map((link, index) => (
                        <motion.a
                            key={link.href}
                            href={link.href}
                            onClick={closeMobileMenu}
                            variants={slideUpFade}
                            custom={0.1 + index * 0.1}
                            initial="hidden"
                            animate="visible"
                            className="font-display text-4xl text-white/90 hover:text-brand-main transition-colors text-center focus:outline-none focus:ring-2 focus:ring-brand-main focus:ring-offset-2 focus:ring-offset-brand-dark rounded-lg px-4 py-2"
                        >
                            {link.label}
                        </motion.a>
                    ))}

                    <motion.div
                        variants={scaleX}
                        initial="hidden"
                        animate="visible"
                        className="w-16 h-[1px] bg-white/10 my-4"
                    />

                    {/* Mobile Account Link */}
                    <Link href={login()} onClick={closeMobileMenu}>
                        <motion.div
                            variants={slideUpSmall}
                            custom={0.5}
                            initial="hidden"
                            animate="visible"
                            className="flex items-center gap-3 text-white/80 hover:text-white transition-colors py-2 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-main focus:ring-offset-2 focus:ring-offset-brand-dark rounded-lg px-4"
                        >
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-main group-hover:text-white transition-colors duration-300">
                                <User size={20} />
                            </div>
                            <span className="text-lg font-medium">Mon Compte</span>
                        </motion.div>
                    </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}