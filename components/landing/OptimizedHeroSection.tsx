"use client";

import React from 'react';
import { motion } from "framer-motion";
import { OptimizedGridBackground } from './OptimizedGridBackground';
import { MagneticButton } from './MagneticButton';

interface OptimizedHeroSectionProps {
    title: string;
    subtitle: string;
}

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 }, // Faster animation
};

export const OptimizedHeroSection: React.FC<OptimizedHeroSectionProps> = ({ title, subtitle }) => {
    return (
        <section
            id="home"
            className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden"
        >
            <OptimizedGridBackground simplified />

            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="flex flex-col items-center space-y-8 text-center">
                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Title with gradient */}
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 bg-clip-text text-transparent">
                                {title}
                            </h1>

                            {/* Subtitle */}
                            <motion.p
                                className="mx-auto max-w-[700px] text-emerald-700 md:text-xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.4 }}
                            >
                                {subtitle}
                            </motion.p>
                        </motion.div>

                        {/* Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.4 }}
                        >
                            <MagneticButton
                                className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/50 hover:shadow-emerald-500/70 transition-shadow"
                                size="lg"
                            >
                                Our Catalog
                            </MagneticButton>
                            <MagneticButton
                                variant="outline"
                                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                                size="lg"
                            >
                                Contact Sales
                            </MagneticButton>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </section>
    );
};
