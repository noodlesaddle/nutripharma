import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from './AuroraBackground';

interface HeroSectionProps {
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

export const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
    return (
        <motion.section
            id="home"
            className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
        >
            <AuroraBackground />
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <motion.div
                    className="container mx-auto px-4 md:px-6 relative z-10"
                    variants={fadeInUp}
                >
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <motion.div className="space-y-2" variants={fadeInUp}>
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-emerald-800">
                                {title}
                            </h1>
                            <p className="mx-auto max-w-[700px] text-emerald-700 md:text-xl">
                                {subtitle}
                            </p>
                        </motion.div>
                        <motion.div className="space-x-4" variants={fadeInUp}>
                            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                                Our Catalog
                            </Button>
                            <Button
                                variant="outline"
                                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                            >
                                Contact Sales
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};
