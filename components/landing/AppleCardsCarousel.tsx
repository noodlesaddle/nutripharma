"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AppleCardProps, AppleCardsCarouselProps } from './types';

const AppleCard: React.FC<AppleCardProps> = ({ title, description }) => {
    return (
        <motion.div
            className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-200 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="absolute inset-0 h-full w-full bg-white opacity-80 rounded-xl" />
            <div className="relative z-10 p-6 flex flex-col h-full justify-between">
                <div>
                    <h3 className="font-semibold text-xl text-emerald-800">{title}</h3>
                    <p className="mt-2 text-emerald-600">{description}</p>
                </div>
                <Button className="self-start bg-emerald-600 hover:bg-emerald-700 text-white">
                    Learn More
                </Button>
            </div>
        </motion.div>
    );
};

export const AppleCardsCarousel: React.FC<AppleCardsCarouselProps> = ({ items }) => {
    return (
        <div className="relative w-full overflow-hidden">
            <motion.div
                className="flex gap-4 p-4 cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: -((items.length - 1) * 288), right: 0 }}
                dragElastic={0.1}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            >
                {items.map((item, index) => (
                    <motion.div key={index} className="shrink-0">
                        <AppleCard title={item.title} description={item.description} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};
