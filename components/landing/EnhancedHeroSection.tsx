"use client";

import React from 'react';
import { motion } from "framer-motion";
import { GridBackground } from './GridBackground';
import { BeamEffect } from './BeamEffect';
import { TextReveal } from './TextReveal';
import { MagneticButton } from './MagneticButton';

interface EnhancedHeroSectionProps {
    title: string;
    subtitle: string;
}

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
};

const staggerChildren = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const EnhancedHeroSection: React.FC<EnhancedHeroSectionProps> = ({ title, subtitle }) => {
    return (
        <motion.section
            id="home"
            className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 lg:h-screen overflow-hidden"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
        >
            <GridBackground />
            <BeamEffect />

            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <motion.div
                    className="container mx-auto px-4 md:px-6 relative z-10"
                    variants={fadeInUp}
                >
                    <div className="flex flex-col 2xl:pt-24 items-center space-y-8 text-center">
                        <motion.div className="space-y-4" variants={fadeInUp}>
                            {/* Animated title with gradient */}
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                <TextReveal
                                    text={title}
                                    className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 bg-clip-text text-transparent"
                                />
                            </h1>

                            {/* Subtitle with fade in */}
                            <motion.p
                                className="mx-auto max-w-[700px] text-emerald-700 md:text-xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                {subtitle}
                            </motion.p>
                        </motion.div>

                        {/* Magnetic buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            variants={fadeInUp}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
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

                        {/* Floating indicators */}
                        <motion.div
                            className="flex gap-2 mt-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                        >
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-2 h-2 rounded-full bg-emerald-500"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                    }}
                                />
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </motion.section>
    );
};
