import { useSyncExternalStore } from 'react';
import { SCROLL_THRESHOLD } from '@/sites/config';

function getScrollSnapshot(): boolean {
    if (typeof window === 'undefined') return false;
    return window.scrollY > SCROLL_THRESHOLD;
}

function subscribeScroll(callback: () => void): () => void {
    if (typeof window === 'undefined') return () => {};
    
    window.addEventListener('scroll', callback, { passive: true });
    return () => window.removeEventListener('scroll', callback);
}

export function useScrollPosition(): boolean {
    return useSyncExternalStore(
        subscribeScroll,
        getScrollSnapshot,
        () => false // Server snapshot
    );
}

