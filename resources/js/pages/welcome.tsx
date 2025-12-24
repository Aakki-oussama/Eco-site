import { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import { AnimatePresence } from 'framer-motion';
import Navbar from '@/sites/components/shares/Navbar';
import Loader from '@/sites/components/shares/Loader';


export default function Welcome() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Always show loader for minimum 3 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Show for minimum 3 seconds

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <>
            <Head title="EcoLaundry" />

            <AnimatePresence mode="wait">
                {isLoading && <Loader />}
            </AnimatePresence>

            {!isLoading && (
                <>
                    {/* Site Header */}
                    <Navbar />
                </>
            )}
        </>
    );
}