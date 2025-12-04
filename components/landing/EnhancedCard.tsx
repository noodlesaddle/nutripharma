"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface EnhancedCardProps {
    children: React.ReactNode;
    className?: string;
    glowColor?: string;
}

export const EnhancedCard: React.FC<EnhancedCardProps> = ({
    children,
    className = '',
    glowColor = 'emerald'
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const glowColors = {
        emerald: 'rgba(16, 185, 129, 0.3)',
        sky: 'rgba(14, 165, 233, 0.3)',
    };

    return (
        <motion.div
            ref={cardRef}
            className={`relative overflow-hidden rounded-xl border border-emerald-200 bg-white ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
        >
            {/* Spotlight effect */}
            {isHovered && (
                <motion.div
                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                    style={{
                        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColors[glowColor as keyof typeof glowColors]}, transparent 40%)`,
                        opacity: isHovered ? 1 : 0,
                    }}
                />
            )}

            {/* Animated border */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400 opacity-20 blur-sm" />
            </div>

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};
