"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Menu, X, ChevronRight } from "lucide-react";
import logo from "../../app/assets/logo.png";

interface NavBarProps {
    language: "en" | "mn";
    setLanguage: (lang: "en" | "mn") => void;
}

const navLinks = {
    en: [
        { label: "Home", href: "#home" },
        { label: "Advantage", href: "#advantage" },
        { label: "Partners", href: "#partners" },
        { label: "Supply Chain", href: "#supply-chain" },
        { label: "Trust", href: "#trust" },
        { label: "Contact", href: "#contact" },
    ],
    mn: [
        { label: "Нүүр", href: "#home" },
        { label: "Давуу тал", href: "#advantage" },
        { label: "Түншүүд", href: "#partners" },
        { label: "Нийлүүлэлт", href: "#supply-chain" },
        { label: "Итгэл", href: "#trust" },
        { label: "Холбоо", href: "#contact" },
    ],
};

export const NavBar: React.FC<NavBarProps> = ({ language, setLanguage }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("#home");

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        setActive(href);
        setMenuOpen(false);
    };

    const links = navLinks[language];

    return (
        <motion.header
            className="fixed top-0 inset-x-0 z-50"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div
                style={{
                    background: scrolled
                        ? "rgba(255,255,255,0.95)"
                        : "rgba(255,255,255,0.85)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    borderBottom: "1px solid #E2E8F0",
                    boxShadow: scrolled
                        ? "0 2px 16px rgba(0,0,0,0.07)"
                        : "0 1px 4px rgba(0,0,0,0.04)",
                    transition: "all 0.3s ease",
                }}
            >
                <div
                    className="max-w-7xl mx-auto px-6 flex items-center justify-between"
                    style={{ height: 68 }}
                >
                    {/* ── Logo ── */}
                    <Link
                        href="#home"
                        onClick={(e) => handleNav(e, "#home")}
                        className="flex-shrink-0"
                    >
                        <Image
                            src={logo}
                            width={160}
                            height={64}
                            alt="Nomt-Nutripharma"
                            priority
                            className="object-contain h-20 w-auto"
                        />
                    </Link>

                    {/* ── Desktop nav ── */}
                    <nav className="hidden lg:flex items-center gap-0.5">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNav(e, link.href)}
                                className="px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-150"
                                style={
                                    active === link.href
                                        ? {
                                            color: "#0D9488",
                                            background: "rgba(13,148,136,0.08)",
                                        }
                                        : { color: "#475569" }
                                }
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* ── Right actions ── */}
                    <div className="flex items-center gap-2">
                        {/* Language toggle */}
                        <button
                            onClick={() => setLanguage(language === "en" ? "mn" : "en")}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                            style={{
                                color: "#475569",
                                border: "1px solid #E2E8F0",
                                background: "white",
                            }}
                            aria-label="Toggle language"
                        >
                            <Globe className="w-3.5 h-3.5" />
                            {language.toUpperCase()}
                        </button>

                        {/* CTA */}
                        <a
                            href="#contact"
                            onClick={(e) => handleNav(e, "#contact")}
                            className="hidden lg:flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold btn-primary"
                        >
                            {language === "en" ? "Apply for Partnership" : "Түншлэл хүсэх"}
                            <ChevronRight className="w-3.5 h-3.5" />
                        </a>

                        {/* Mobile hamburger */}
                        <button
                            className="lg:hidden p-2 rounded-lg"
                            style={{ color: "#475569" }}
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Mobile menu ── */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        style={{
                            background: "rgba(255,255,255,0.98)",
                            backdropFilter: "blur(20px)",
                            borderBottom: "1px solid #E2E8F0",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                        }}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="px-6 py-4 flex flex-col gap-1">
                            {links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleNav(e, link.href)}
                                    className="px-4 py-3 text-sm font-medium rounded-xl transition-all"
                                    style={{
                                        color: active === link.href ? "#0D9488" : "#475569",
                                        background:
                                            active === link.href
                                                ? "rgba(13,148,136,0.06)"
                                                : "transparent",
                                    }}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={(e) => handleNav(e, "#contact")}
                                className="mt-2 px-5 py-3 rounded-xl text-sm font-semibold btn-primary text-center"
                            >
                                {language === "en" ? "Apply for Partnership" : "Түншлэл хүсэх"}
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};
