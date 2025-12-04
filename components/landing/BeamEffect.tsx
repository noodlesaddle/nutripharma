"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const BeamEffect: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            {/* Vertical beams */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-emerald-400 to-transparent"
                    style={{
                        left: `${20 + i * 20}%`,
                    }}
                    animate={{
                        opacity: [0, 1, 0],
                        scaleY: [0, 1, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Horizontal beams */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={`h-${i}`}
                    className="absolute left-0 h-px w-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
                    style={{
                        top: `${30 + i * 20}%`,
                    }}
                    animate={{
                        opacity: [0, 0.5, 0],
                        scaleX: [0, 1, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.7,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
};
