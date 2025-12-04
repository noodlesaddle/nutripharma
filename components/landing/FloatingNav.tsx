"use client";

import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";
import logo from "../../app/assets/logo.png";
import { FloatingNavProps, NavItem } from './types';
import { content } from './constants';

export const FloatingNav: React.FC<FloatingNavProps> = ({ language, setLanguage }) => {
    const { scrollYProgress } = useScroll();
    const t = content[language].nav;
    const [activeItem, setActiveItem] = useState(t.home);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navBackdropFilter = useTransform(
        scrollYProgress,
        [0, 0.05],
        ["blur(0px)", "blur(20px)"]
    );

    const navItems: NavItem[] = [
        { name: t.home, href: "#home" },
        { name: t.products, href: "#products" },
        { name: t.services, href: "#services" },
        { name: t.about, href: "#about" },
        { name: t.contact, href: "#contact" },
    ];

    const navVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut",
            },
        },
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const navHeight = 80; // Account for fixed nav height
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({ top: targetPosition, behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    return (
        <motion.header
            className="fixed top-4 inset-x-0 z-50 px-4"
            style={{
                backdropFilter: navBackdropFilter,
            }}
            initial="hidden"
            animate="visible"
            variants={navVariants}
        >
            <motion.div
                className="max-w-7xl mx-auto flex items-center h-16 px-4 justify-between rounded-full border border-emerald-200 bg-white/80"
                layout
            >
                <Link href="#home" className="text-lg font-bold text-emerald-600" aria-label="Nutripharma Home">
                    <Image
                        src={logo}
                        width={80}
                        height={40}
                        className="px-1"
                        alt="Nutripharma Logo"
                        priority
                    />
                </Link>
                <nav className="hidden md:block" aria-label="Main navigation">
                    <ul className="flex space-x-2">
                        <AnimatePresence>
                            {navItems.map((item) => (
                                <motion.li key={item.name} variants={itemVariants}>
                                    <Link
                                        href={item.href}
                                        className={`px-3 py-2 text-sm font-medium rounded-full transition-colors ${activeItem === item.name
                                                ? "bg-emerald-600 text-white"
                                                : "text-emerald-700 hover:bg-emerald-100 hover:text-emerald-900"
                                            }`}
                                        onClick={(e) => {
                                            setActiveItem(item.name);
                                            handleNavClick(e, item.href);
                                        }}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </AnimatePresence>
                    </ul>
                </nav>
                <div className="flex items-center space-x-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setLanguage(language === "en" ? "mn" : "en")}
                        aria-label={`Switch to ${language === "en" ? "Mongolian" : "English"}`}
                        className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-100"
                    >
                        <Globe className="h-5 w-5" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden text-emerald-600 hover:text-emerald-700 hover:bg-emerald-100"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </Button>
                </div>
            </motion.div>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav
                        className="md:hidden bg-white rounded-2xl mt-2 shadow-lg border border-emerald-200"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        aria-label="Mobile navigation"
                    >
                        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className={`block px-3 py-2 rounded-md text-base font-medium ${activeItem === item.name
                                                ? "bg-emerald-600 text-white"
                                                : "text-emerald-700 hover:bg-emerald-100 hover:text-emerald-900"
                                            }`}
                                        onClick={(e) => {
                                            setActiveItem(item.name);
                                            handleNavClick(e, item.href);
                                        }}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    );
};
