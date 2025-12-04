import React from 'react';
import { motion } from "framer-motion";
import { AppleCardsCarousel } from './AppleCardsCarousel';
import { CarouselItem } from './types';

interface ProductsSectionProps {
    title: string;
    items: CarouselItem[];
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

export const ProductsSection: React.FC<ProductsSectionProps> = ({ title, items }) => {
    return (
        <motion.section
            id="products"
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
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-emerald-800">
                        {title}
                    </h2>
                    <AppleCardsCarousel items={items} />
                </motion.div>
            </div>
        </motion.section>
    );
};
