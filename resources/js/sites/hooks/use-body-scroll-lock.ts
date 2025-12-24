import { useEffect, useRef } from 'react';

/**
 * Hook to lock/unlock body scroll.
 * Preserves the original overflow value for proper cleanup.
 */
export function useBodyScrollLock(locked: boolean): void {
    const originalOverflowRef = useRef<string | null>(null);

    useEffect(() => {
        if (locked) {
            // Store original value
            originalOverflowRef.current = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
        } else {
            // Restore original value
            if (originalOverflowRef.current !== null) {
                document.body.style.overflow = originalOverflowRef.current;
            } else {
                document.body.style.overflow = '';
            }
        }

        return () => {
            // Cleanup: restore original value
            if (originalOverflowRef.current !== null) {
                document.body.style.overflow = originalOverflowRef.current;
            } else {
                document.body.style.overflow = '';
            }
        };
    }, [locked]);
}

