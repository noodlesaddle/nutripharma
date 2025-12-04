import React from 'react';
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

interface AboutSectionProps {
    title: string;
    description: string;
    features: string[];
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

export const AboutSection: React.FC<AboutSectionProps> = ({
    title,
    description,
    features,
}) => {
    return (
        <motion.section
            id="about"
            className="w-full py-12 md:py-24 lg:py-32"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <motion.div
                    className="container mx-auto px-4 md:px-6"
                    variants={fadeInUp}
                >
                    <div className="grid gap-10 lg:grid-cols-2 items-center">
                        <motion.div className="space-y-4" variants={fadeInUp}>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-emerald-800">
                                {title}
                            </h2>
                            <p className="text-emerald-600">{description}</p>
                            <ul className="grid gap-2">
                                {features.map((feature, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-start gap-3 text-emerald-800 px-2"
                                        variants={fadeInUp}
                                    >
                                        <ShieldCheck className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-emerald-700">{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div
                            className="flex justify-center"
                            variants={fadeInUp}
                        >
                            <img
                                alt="Pharmaceutical warehouse"
                                className="aspect-video overflow-hidden rounded-xl object-cover object-center w-full max-w-[600px] h-auto"
                                src="https://www.arrowedge.co.uk/wp-content/uploads/2018/09/arro_pharma.jpg"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};
