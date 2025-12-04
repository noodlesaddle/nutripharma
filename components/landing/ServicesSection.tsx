import React from 'react';
import { motion } from "framer-motion";
import { Truck, ShieldCheck, Pill } from "lucide-react";

interface Service {
    title: string;
    description: string;
}

interface ServicesSectionProps {
    title: string;
    distribution: Service;
    quality: Service;
    range: Service;
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

export const ServicesSection: React.FC<ServicesSectionProps> = ({
    title,
    distribution,
    quality,
    range,
}) => {
    const services = [
        { icon: Truck, ...distribution },
        { icon: ShieldCheck, ...quality },
        { icon: Pill, ...range },
    ];

    return (
        <motion.section
            id="services"
            className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <motion.div
                    className="container mx-auto px-4 md:px-6"
                    variants={fadeInUp}
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-emerald-800">
                        {title}
                    </h2>
                    <motion.div
                        className="grid gap-10 sm:grid-cols-2 md:grid-cols-3"
                        variants={staggerChildren}
                    >
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="flex flex-col items-center space-y-2 border border-emerald-200 p-4 rounded-lg bg-white"
                                    variants={fadeInUp}
                                >
                                    <div className="p-2 bg-emerald-100 rounded-full">
                                        <Icon className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-emerald-800">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-emerald-600 text-center">
                                        {service.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};
