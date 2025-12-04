import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ShieldCheck, Leaf } from "lucide-react";
import { ProductSectionProps } from './types';

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

export const ProductDistributorSection: React.FC<ProductSectionProps & { id: string; reverse?: boolean }> = ({
    id,
    tag,
    title,
    highlight,
    description,
    features,
    ctaPrimary,
    ctaPrimaryLink,
    cardTitle,
    cardDescription,
    imageSrc,
    imageAlt,
    colorScheme = 'emerald',
    reverse = false,
}) => {
    const colors = {
        emerald: {
            tag: 'bg-emerald-600 text-white',
            title: 'text-emerald-800',
            highlight: 'text-emerald-600',
            description: 'text-emerald-600',
            icon: 'text-emerald-600',
            button: 'bg-emerald-600 hover:bg-emerald-700',
            cardTitle: 'text-emerald-800',
            cardDescription: 'text-emerald-700',
            border: 'border-emerald-200',
        },
        sky: {
            tag: 'bg-sky-700 text-white',
            title: 'text-sky-800',
            highlight: 'text-sky-600',
            description: 'text-sky-700',
            icon: 'text-sky-600',
            button: 'bg-sky-600 hover:bg-sky-700',
            cardTitle: 'text-sky-800',
            cardDescription: 'text-sky-700',
            border: 'border-sky-200',
        },
    };

    const theme = colors[colorScheme];
    const Icon = colorScheme === 'emerald' ? ShieldCheck : Leaf;

    return (
        <motion.section
            id={id}
            className="w-full py-12 md:py-24 lg:py-32"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
        >
            <div className="max-w-7xl mx-auto px-8 md:px-6">
                <motion.div
                    className={`grid gap-12 lg:grid-cols-2 items-center ${reverse ? 'lg:grid-flow-dense' : ''}`}
                    variants={fadeInUp}
                >
                    {/* Image Column */}
                    <motion.div
                        className={`flex justify-center ${reverse ? 'lg:col-start-1' : 'lg:justify-end'}`}
                        variants={fadeInUp}
                    >
                        <Card className={`w-full max-w-lg shadow-xl ${theme.border}`}>
                            <CardContent className="p-0">
                                <img
                                    alt={imageAlt}
                                    className="p-10 rounded-xl object-cover w-full h-auto aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/9]"
                                    src={imageSrc}
                                />
                            </CardContent>
                            <CardHeader className="pt-4">
                                <CardTitle className={`text-xl font-bold ${theme.cardTitle}`}>
                                    {cardTitle}
                                </CardTitle>
                                <CardDescription className={theme.cardDescription}>
                                    {cardDescription}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </motion.div>

                    {/* Text Column */}
                    <motion.div className={`space-y-6 ${reverse ? 'lg:col-start-2' : ''}`} variants={fadeInUp}>
                        <motion.p
                            className={`inline-block rounded-lg px-3 py-2 text-sm font-semibold ${theme.tag}`}
                            variants={fadeInUp}
                        >
                            {tag}
                        </motion.p>
                        <motion.h2
                            className={`text-4xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl ${theme.title}`}
                            variants={fadeInUp}
                        >
                            {title}{" "}
                            <span className={theme.highlight}>
                                {highlight}
                            </span>
                        </motion.h2>
                        <motion.p
                            className={`text-md ${theme.description}`}
                            variants={fadeInUp}
                        >
                            {description}
                        </motion.p>

                        <ul className="grid gap-4 mt-6">
                            {features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-start text-md gap-3"
                                    variants={fadeInUp}
                                >
                                    <Icon className={`h-6 w-6 flex-shrink-0 ${theme.icon} mt-0.5`} />
                                    <span>{feature}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 mt-8"
                            variants={fadeInUp}
                        >
                            <Button
                                asChild
                                className={`${theme.button} text-white`}
                                size="lg"
                            >
                                <a
                                    href={ctaPrimaryLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {ctaPrimary}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};
