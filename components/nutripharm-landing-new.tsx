"use client";

import { useState } from "react";
import { FloatingNav } from "./landing/FloatingNav";
import { EnhancedHeroSection } from "./landing/EnhancedHeroSection";
import { EnhancedServicesSection } from "./landing/"
import { ProductsSection } from "./landing/ProductsSection";

import { AboutSection } from "./landing/AboutSection";
import { ProductDistributorSection } from "./landing/ProductDistributorSection";
import { ContactSection } from "./landing/ContactSection";
import { Footer } from "./landing/Footer";
import { content } from "./landing/constants";
import { Language } from "./landing/types";

export default function NutripharmLanding() {
    const [language, setLanguage] = useState<Language>("en");
    const t = content[language];

    return (
        <div className="flex flex-col min-h-screen bg-white text-emerald-900">
            <FloatingNav language={language} setLanguage={setLanguage} />

            <main className="flex-1 pt-24">
                <EnhancedHeroSection
                    title={t.hero.title}
                    subtitle={t.hero.subtitle}
                />

                <ProductsSection
                    title={t.carousel.title}
                    items={t.carousel.items}
                />

                <EnhancedServicesSection
                    title={t.services.title}
                    distribution={t.services.distribution}
                    quality={t.services.quality}
                    range={t.services.range}
                />

                <AboutSection
                    title={t.about.title}
                    description={t.about.description}
                    features={t.about.features}
                />

                <ProductDistributorSection
                    id="nutricost"
                    {...t.nutricost}
                    reverse={false}
                />

                <ProductDistributorSection
                    id="radiant-viewer"
                    {...t.radiantViewer}
                    reverse={true}
                />

                <ContactSection
                    title={t.contact.title}
                    description={t.contact.description}
                    form={t.contact.form}
                    placeHolder={t.contact.placeHolder}
                />
            </main>

            <Footer
                rights={t.footer.rights}
                terms={t.footer.terms}
                privacy={t.footer.privacy}
            />
        </div>
    );
}
