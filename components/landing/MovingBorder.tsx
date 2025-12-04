"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface MovingBorderProps {
    children: React.ReactNode;
    duration?: number;
    className?: string;
    borderClassName?: string;
}

export const MovingBorder: React.FC<MovingBorderProps> = ({
    children,
    duration = 2000,
    className = '',
    borderClassName = 'bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600',
}) => {
    return (
        <div className={`relative p-[1px] overflow-hidden rounded-xl ${className}`}>
            <motion.div
                className={`absolute inset-0 ${borderClassName}`}
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: duration / 1000,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{
                    background: `conic-gradient(from 0deg, transparent 0deg 340deg, currentColor 360deg)`,
                }}
            />
            <div className="relative bg-white rounded-xl">
                {children}
            </div>
        </div>
    );
};
