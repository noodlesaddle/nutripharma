"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Truck, ShieldCheck, Pill } from "lucide-react";
import { EnhancedCard } from './EnhancedCard';

interface Service {
    title: string;
    description: string;
}

interface OptimizedServicesSectionProps {
    title: string;
    distribution: Service;
    quality: Service;
    range: Service;
}



export const OptimizedServicesSection: React.FC<OptimizedServicesSectionProps> = ({
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
        <section
            id="services"
            className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white via-emerald-50/50 to-white relative overflow-hidden"
        >
            {/* Simplified background - no animations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
                <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.h2
                        className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4 text-emerald-800"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4 }}
                    >
                        {title}
                    </motion.h2>

                    <motion.div
                        className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto mb-12 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />

                    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    whileHover={{ y: -8 }}
                                >
                                    <EnhancedCard className="h-full group">
                                        <div className="flex flex-col items-center space-y-4 p-6">
                                            {/* Icon with glow effect */}
                                            <motion.div
                                                className="relative p-4 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl"
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <div className="absolute inset-0 bg-emerald-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                                                <Icon className="h-8 w-8 text-emerald-600 relative z-10" />
                                            </motion.div>

                                            {/* Title */}
                                            <h3 className="text-xl font-bold text-emerald-800 text-center">
                                                {service.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-sm text-emerald-600 text-center leading-relaxed">
                                                {service.description}
                                            </p>

                                            {/* Hover indicator */}
                                            <div className="w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 group-hover:w-full transition-all duration-300" />
                                        </div>
                                    </EnhancedCard>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
