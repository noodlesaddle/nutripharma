"use client";

import React, { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ChevronRight } from "lucide-react";

const copy = {
    en: {
        tag: "Partnership Application",
        headline: "Apply for Distribution Partnership",
        sub: "Complete the form below and our partnership team will respond within 24 hours.",
        fields: {
            company: "Company Name",
            name: "Contact Person",
            email: "Business Email",
            phone: "Phone Number",
            country: "Country / Region",
            message: "Tell us about your brand and distribution goals",
            submit: "Submit Partnership Application",
            submitting: "Submitting...",
        },
        placeholders: {
            company: "e.g. Global Pharma Inc.",
            name: "Full name and title",
            email: "your@company.com",
            phone: "+1 (555) 000-0000",
            country: "e.g. United States",
            message: "Describe your product portfolio, target market, and what you're looking for in a distribution partner...",
        },
        success: "Application submitted! We'll be in touch within 24 hours.",
        error: "Failed to send. Please try again or email us directly.",
        info: [
            { icon: Mail, label: "Email", value: "info@nomt-nutripharma.com" },
            { icon: Phone, label: "Phone", value: "+976 99-84-1308, +976 99-19-4118" },
            { icon: MapPin, label: "Location", value: "Ulaanbaatar, Mongolia" },
        ],
    },
    mn: {
        tag: "Түншлэлийн өргөдөл",
        headline: "Түгээлтийн түншлэлд өргөдөл гаргах",
        sub: "Доорх маягтыг бөглөнө үү, манай түншлэлийн баг 24 цагийн дотор хариу өгнө.",
        fields: {
            company: "Компанийн нэр",
            name: "Холбоо барих хүн",
            email: "Бизнесийн и-мэйл",
            phone: "Утасны дугаар",
            country: "Улс / Бүс нутаг",
            message: "Брэнд болон түгээлтийн зорилгоо бидэнд хэлнэ үү",
            submit: "Түншлэлийн өргөдөл илгээх",
            submitting: "Илгээж байна...",
        },
        placeholders: {
            company: "Жишээ: Дэлхийн Фарма ХХК",
            name: "Бүтэн нэр, албан тушаал",
            email: "your@company.com",
            phone: "+976 XX-XXXX-XXXX",
            country: "Жишээ: Монгол Улс",
            message: "Бүтээгдэхүүний портфолио, зорилтот зах зээл, түгээлтийн түншээс юу хүлээж байгаагаа тайлбарлана уу...",
        },
        success: "Өргөдөл илгээгдлээ! 24 цагийн дотор холбоо барина.",
        error: "Илгээхэд алдаа гарлаа. Дахин оролдох эсвэл шууд и-мэйл илгээнэ үү.",
        info: [
            { icon: Mail, label: "И-мэйл", value: "info@nomt-nutripharma.com" },
            { icon: Phone, label: "Утас", value: "+976 99-84-1308, +976 99-19-4118" },
            { icon: MapPin, label: "Байршил", value: "Улаанбаатар, Монгол" },
        ],
    },
};

export const ContactSection: React.FC<{ language: "en" | "mn" }> = ({ language }) => {
    const t = copy[language];
    const [form, setForm] = useState({ company: "", name: "", email: "", phone: "", country: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: form.name, email: form.email, phone: form.phone, request: `Company: ${form.company}\nCountry: ${form.country}\n\n${form.message}` }),
            });
            if (!res.ok) throw new Error();
            setStatus("success");
            setForm({ company: "", name: "", email: "", phone: "", country: "", message: "" });
            setTimeout(() => setStatus("idle"), 6000);
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    const inputClass = "w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/30 border border-white/10 bg-white/5 focus:outline-none focus:border-teal-DEFAULT/60 focus:bg-white/8 transition-all duration-200";

    return (
        <section id="contact" className="py-28 relative overflow-hidden"
            style={{ background: "linear-gradient(160deg, #0F172A 0%, #1E293B 100%)" }}>
            <div className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `linear-gradient(rgba(13,148,136,1) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,1) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Left info */}
                    <motion.div
                        className="lg:col-span-2 space-y-8"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div>
                            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 border"
                                style={{ borderColor: "rgba(13,148,136,0.3)", color: "#0D9488", background: "rgba(13,148,136,0.08)" }}>
                                {t.tag}
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{t.headline}</h2>
                            <p className="text-white/50 leading-relaxed">{t.sub}</p>
                        </div>

                        <div className="space-y-4">
                            {t.info.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                                            style={{ background: "rgba(13,148,136,0.1)" }}>
                                            <Icon className="w-4 h-4" style={{ color: "#0D9488" }} />
                                        </div>
                                        <div>
                                            <div className="text-xs text-white/40 mb-0.5">{item.label}</div>
                                            <div className="text-sm font-medium text-white">{item.value}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Secondary CTA */}
                        <div className="glass rounded-2xl p-6 border border-white/10">
                            <p className="text-sm font-semibold text-white mb-1">
                                {language === "en" ? "View Product Catalog" : "Бүтээгдэхүүний каталог"}
                            </p>
                            <p className="text-xs text-white/40 mb-4">
                                {language === "en" ? "Browse our full portfolio of distributed brands." : "Манай бүтээгдэхүүний бүрэн жагсаалтыг үзнэ үү."}
                            </p>
                            <button className="flex items-center gap-2 text-sm font-semibold" style={{ color: "#0D9488" }}>
                                {language === "en" ? "Download Catalog" : "Каталог татах"}
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        className="lg:col-span-3"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 border border-white/10 space-y-5">
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="company" className="block text-xs font-semibold text-white/60 mb-2 uppercase tracking-wider">{t.fields.company}</label>
                                    <input id="company" type="text" value={form.company} onChange={handleChange} placeholder={t.placeholders.company} className={inputClass} required disabled={status === "loading"} />
                                </div>
                                <div>
                                    <label htmlFor="name" className="block text-xs font-semibold text-white/60 mb-2 uppercase tracking-wider">{t.fields.name}</label>
                                    <input id="name" type="text" value={form.name} onChange={handleChange} placeholder={t.placeholders.name} className={inputClass} required disabled={status === "loading"} />
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="email" className="block text-xs font-semibold text-white/60 mb-2 uppercase tracking-wider">{t.fields.email}</label>
                                    <input id="email" type="email" value={form.email} onChange={handleChange} placeholder={t.placeholders.email} className={inputClass} required disabled={status === "loading"} />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-xs font-semibold text-white/60 mb-2 uppercase tracking-wider">{t.fields.phone}</label>
                                    <input id="phone" type="tel" value={form.phone} onChange={handleChange} placeholder={t.placeholders.phone} className={inputClass} required disabled={status === "loading"} />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="country" className="block text-xs font-semibold text-white/60 mb-2 uppercase tracking-wider">{t.fields.country}</label>
                                <input id="country" type="text" value={form.country} onChange={handleChange} placeholder={t.placeholders.country} className={inputClass} required disabled={status === "loading"} />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-xs font-semibold text-white/60 mb-2 uppercase tracking-wider">{t.fields.message}</label>
                                <textarea id="message" rows={5} value={form.message} onChange={handleChange} placeholder={t.placeholders.message} className={`${inputClass} resize-none`} required disabled={status === "loading"} />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-semibold btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === "loading" ? t.fields.submitting : t.fields.submit}
                                {status !== "loading" && <Send className="w-4 h-4" />}
                            </button>

                            {status === "success" && (
                                <motion.p className="text-center text-sm font-medium" style={{ color: "#0D9488" }}
                                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                                    ✓ {t.success}
                                </motion.p>
                            )}
                            {status === "error" && (
                                <motion.p className="text-center text-sm text-red-400"
                                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                                    {t.error}
                                </motion.p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
