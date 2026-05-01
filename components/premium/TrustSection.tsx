"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Users, Award, TrendingUp } from "lucide-react";

const copy = {
    en: {
        tag: "Evidence of Trust",
        headline: "Numbers That Speak",
        sub: "A decade of excellence, measured in outcomes that matter to our partners.",
        stats: [
            { icon: Award, value: 10, suffix: "+", label: "Years of Experience", desc: "Trusted regional distributor since 2014" },
            { icon: Clock, value: 24, suffix: "h", label: "Delivery Guarantee", desc: "Same or next-day delivery to all partners" },
            { icon: TrendingUp, value: 100, suffix: "%", label: "Regulatory Compliance", desc: "Zero compliance failures in our history" },
            { icon: Users, value: 500, suffix: "+", label: "Healthcare Partners", desc: "Pharmacies, hospitals, and clinics served" },
        ],
        proposal: {
            tag: "For Potential Partners",
            headline: "We Don't Just Move Products.",
            highlight: "We Build Brands.",
            body: "From local marketing campaigns to Key Opinion Leader (KOL) engagement, we ensure your global vision succeeds locally. Our team becomes an extension of your brand — protecting your reputation, growing your market share, and delivering measurable results.",
            points: [
                "Dedicated brand manager for each partner",
                "Local marketing & promotional campaigns",
                "KOL engagement and medical education",
                "Quarterly performance reporting",
                "Market intelligence and competitor analysis",
            ],
            cta: "Submit a Business Proposal",
        },
    },
    mn: {
        tag: "Итгэлийн нотолгоо",
        headline: "Тоо баримт ярьдаг",
        sub: "Арван жилийн өндөр чанар, түншүүддээ чухал үр дүнгээр хэмжигдсэн.",
        stats: [
            { icon: Award, value: 10, suffix: "+", label: "Жилийн туршлага", desc: "2014 оноос найдвартай бүс нутгийн дистрибьютор" },
            { icon: Clock, value: 24, suffix: "ц", label: "Хүргэлтийн баталгаа", desc: "Бүх түншүүдэд өдрийн дотор хүргэлт" },
            { icon: TrendingUp, value: 100, suffix: "%", label: "Зохицуулалтын нийцэл", desc: "Манай түүхэнд нийцлийн алдаа гараагүй" },
            { icon: Users, value: 500, suffix: "+", label: "Эрүүл мэндийн түнш", desc: "Эмийн сан, эмнэлэг, клиник" },
        ],
        proposal: {
            tag: "Боломжит түншүүдэд",
            headline: "Бид зөвхөн бүтээгдэхүүн зөөдөггүй.",
            highlight: "Бид брэнд бүтээдэг.",
            body: "Орон нутгийн маркетингийн кампанит ажлаас KOL оролцоо хүртэл таны дэлхийн алсын харааг орон нутагт амжилттай хэрэгжүүлнэ. Манай баг таны брэндийн нэг хэсэг болж, нэр хүндийг хамгаалж, зах зээлийн хувийг нэмэгдүүлнэ.",
            points: [
                "Түнш бүрт зориулсан брэнд менежер",
                "Орон нутгийн маркетинг, сурталчилгааны кампани",
                "KOL оролцоо, эмнэлгийн боловсрол",
                "Улирлын гүйцэтгэлийн тайлан",
                "Зах зээлийн мэдээлэл, өрсөлдөгчийн шинжилгээ",
            ],
            cta: "Бизнесийн санал илгээх",
        },
    },
};

const Counter: React.FC<{ value: number; suffix: string }> = ({ value, suffix }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const duration = 1800;
        const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [inView, value]);

    return <span ref={ref}>{count}{suffix}</span>;
};

export const TrustSection: React.FC<{ language: "en" | "mn" }> = ({ language }) => {
    const t = copy[language];

    return (
        <>
            {/* Stats section */}
            <section id="trust" className="py-24 relative overflow-hidden"
                style={{ background: "linear-gradient(160deg, #0F172A 0%, #1E293B 100%)" }}>
                <div className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(13,148,136,1) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,1) 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 border"
                            style={{ borderColor: "rgba(13,148,136,0.3)", color: "#0D9488", background: "rgba(13,148,136,0.08)" }}>
                            {t.tag}
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">{t.headline}</h2>
                        <p className="text-white/50 max-w-xl mx-auto">{t.sub}</p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {t.stats.map((stat, i) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={i}
                                    className="glass rounded-2xl p-8 border border-white/10 text-center group hover:border-teal-DEFAULT/30 transition-all duration-300"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    whileHover={{ y: -4 }}
                                >
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                                        style={{ background: "rgba(13,148,136,0.1)" }}>
                                        <Icon className="w-6 h-6" style={{ color: "#0D9488" }} />
                                    </div>
                                    <div className="text-4xl font-bold text-white mb-1">
                                        <Counter value={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <div className="text-sm font-semibold mb-2" style={{ color: "#0D9488" }}>{stat.label}</div>
                                    <div className="text-xs text-white/40 leading-relaxed">{stat.desc}</div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Business Proposal section */}
            <section className="py-28 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
                                style={{ background: "rgba(15,23,42,0.06)", color: "#0F172A" }}>
                                {t.proposal.tag}
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-bold mb-2" style={{ color: "#0F172A" }}>
                                {t.proposal.headline}
                            </h2>
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text-teal">
                                {t.proposal.highlight}
                            </h2>
                            <p className="text-slate-500 leading-relaxed mb-8">{t.proposal.body}</p>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold btn-primary"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                {t.proposal.cta}
                            </a>
                        </motion.div>

                        <motion.div
                            className="space-y-3"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            {t.proposal.points.map((pt, i) => (
                                <motion.div
                                    key={i}
                                    className="flex items-center gap-4 p-5 rounded-xl border border-slate-100 hover:border-navy-DEFAULT/20 hover:shadow-lg transition-all duration-200"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.4, delay: i * 0.08 }}
                                >
                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                        style={{ background: "rgba(13,148,136,0.1)" }}>
                                        <span className="text-xs font-bold" style={{ color: "#0F766E" }}>0{i + 1}</span>
                                    </div>
                                    <span className="text-sm font-medium text-slate-700">{pt}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};
