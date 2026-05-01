"use client";

import { useState } from "react";
import { NavBar } from "./premium/NavBar";
import { HeroSection } from "./premium/HeroSection";
import { AdvantageSection } from "./premium/AdvantageSection";
import { PartnersSection } from "./premium/PartnersSection";
import { SupplyChainSection } from "./premium/SupplyChainSection";
import { TrustSection } from "./premium/TrustSection";
import { ContactSection } from "./premium/ContactSection";
import { Footer } from "./premium/Footer";

export default function NutripharmLanding() {
    const [language, setLanguage] = useState<"en" | "mn">("en");

    return (
        <div className="flex flex-col min-h-screen">
            <NavBar language={language} setLanguage={setLanguage} />
            <main>
                <HeroSection language={language} />
                <AdvantageSection language={language} />
                <PartnersSection language={language} />
                <SupplyChainSection language={language} />
                <TrustSection language={language} />
                <ContactSection language={language} />
            </main>
            <Footer language={language} />
        </div>
    );
}
