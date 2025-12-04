"use client";

import React, { useState, FormEvent } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

interface ContactForm {
    name: string;
    email: string;
    phone: string;
    request: string;
}

interface ContactSectionProps {
    title: string;
    description: string;
    form: {
        name: string;
        email: string;
        phone: string;
        request: string;
        submit: string;
    };
    placeHolder: {
        name: string;
        email: string;
        phone: string;
        request?: string;
        submit: string;
    };
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

export const ContactSection: React.FC<ContactSectionProps> = ({
    title,
    description,
    form: formLabels,
    placeHolder,
}) => {
    const [formData, setFormData] = useState<ContactForm>({
        name: '',
        email: '',
        phone: '',
        request: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            setSubmitStatus('success');
            setFormData({ name: '', email: '', phone: '', request: '' });

            // Reset success message after 5 seconds
            setTimeout(() => setSubmitStatus('idle'), 5000);
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');

            // Reset error message after 5 seconds
            setTimeout(() => setSubmitStatus('idle'), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };

    return (
        <motion.section
            id="contact"
            className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <motion.div
                    className="container mx-auto px-4 md:px-6"
                    variants={fadeInUp}
                >
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <motion.div className="space-y-2" variants={fadeInUp}>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-emerald-800">
                                {title}
                            </h2>
                            <p className="max-w-[600px] text-emerald-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                {description}
                            </p>
                        </motion.div>
                        <motion.div className="w-full max-w-md" variants={fadeInUp}>
                            <form onSubmit={handleSubmit} className="p-8 bg-white rounded-2xl shadow-xl">
                                <div className="space-y-4 text-left">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-emerald-700 mb-1"
                                        >
                                            {formLabels.name}
                                        </label>
                                        <Input
                                            id="name"
                                            className="w-full px-3 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                            placeholder={placeHolder.name}
                                            type="text"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-emerald-700 mb-1"
                                        >
                                            {formLabels.email}
                                        </label>
                                        <Input
                                            id="email"
                                            className="w-full px-3 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                            placeholder={placeHolder.email}
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm font-medium text-emerald-700 mb-1"
                                        >
                                            {formLabels.phone}
                                        </label>
                                        <Input
                                            id="phone"
                                            className="w-full px-3 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                            placeholder={placeHolder.phone}
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="request"
                                            className="block text-sm font-medium text-emerald-700 mb-1"
                                        >
                                            {formLabels.request}
                                        </label>
                                        <textarea
                                            id="request"
                                            className="w-full px-3 py-2 border border-emerald-300 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                                            placeholder={placeHolder.request || ''}
                                            value={formData.request}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Submitting...' : formLabels.submit}
                                    </Button>
                                    {submitStatus === 'success' && (
                                        <p className="text-emerald-600 text-sm text-center">Message sent successfully!</p>
                                    )}
                                    {submitStatus === 'error' && (
                                        <p className="text-red-600 text-sm text-center">Failed to send message. Please try again.</p>
                                    )}
                                </div>
                            </form>
                        </motion.div>

                        <motion.div
                            className="flex items-center justify-center pt-6 space-x-2"
                            variants={fadeInUp}
                        >
                            <Mail className="h-5 w-5 text-emerald-600" />
                            <a
                                href="mailto:contact@nomt-nutripharma.com"
                                className="text-emerald-700 font-medium hover:underline"
                            >
                                contact@nomt-nutripharma.com
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};
