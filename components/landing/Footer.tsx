import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";

interface FooterProps {
    rights: string;
    terms: string;
    privacy: string;
}

export const Footer: React.FC<FooterProps> = ({ rights, terms, privacy }) => {
    return (
        <motion.footer
            className="w-full shrink-0 border-t border-emerald-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
        >
            <div className="max-w-7xl mx-auto flex flex-col gap-2 sm:flex-row py-6 items-center px-4 md:px-6">
                <p className="text-xs text-emerald-600">{rights}</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6" aria-label="Footer navigation">
                    <Link
                        className="text-xs hover:underline underline-offset-4 text-emerald-600"
                        href="#"
                    >
                        {terms}
                    </Link>
                    <Link
                        className="text-xs hover:underline underline-offset-4 text-emerald-600"
                        href="#"
                    >
                        {privacy}
                    </Link>
                </nav>
            </div>
        </motion.footer>
    );
};
