'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { useLoading } from '@/context/LoadingContext';

export function PageLoader() {
    const { isLoading, setIsLoading } = useLoading();
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        // Counter animation
        const interval = setInterval(() => {
            setCounter((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                // Non-linear increment for more realistic feel
                const increment = Math.random() * 10;
                return Math.min(prev + increment, 100);
            });
        }, 100);

        // Total loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [setIsLoading]);

    // Shutter columns configuration
    const columns = 5;

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    key="loader"
                    className="fixed inset-0 z-[9999] flex items-center justify-center"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { delay: 1.5, duration: 0.1 } }}
                >
                    {/* Shutter Columns */}
                    <div className="absolute inset-0 flex w-full h-full pointer-events-none">
                        {[...Array(columns)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: "100%" }}
                                exit={{ height: "0%" }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.76, 0, 0.24, 1],
                                    delay: i * 0.1,
                                }}
                                className="relative w-full bg-brand-navy border-r border-white/5 last:border-r-0"
                            >
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Content Layer */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -50, transition: { duration: 0.5 } }}
                        className="relative z-10 flex flex-col items-center justify-center"
                    >
                        {/* Counter */}
                        <div className="relative mb-4 overflow-hidden">
                            <motion.h1
                                className="text-8xl md:text-9xl font-display font-bold text-brand-gold"
                                initial={{ y: 100 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                {Math.round(counter)}%
                            </motion.h1>
                        </div>

                        {/* Brand Name */}
                        <div className="overflow-hidden">
                            <motion.div
                                initial={{ y: "100%" }}
                                animate={{ y: "0%" }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                className="flex flex-col items-center gap-2"
                            >
                                <span className="text-white font-body tracking-[0.5em] text-sm md:text-base uppercase">
                                    Shahin Group
                                </span>
                                <span className="text-white/40 font-display italic text-xs md:text-sm">
                                    Visionary Architecture
                                </span>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
