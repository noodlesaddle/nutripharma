import NutripharmLanding from "@/components/nutripharm-landing-new";

const SITE_URL = "https://www.nomt-nutripharma.com";

// Page-level structured data for products and services
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/#service`,
  name: "Pharmaceutical Distribution Services",
  provider: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Nomt-Nutripharma LLC",
  },
  serviceType: "Pharmaceutical Distribution",
  description:
    "End-to-end pharmaceutical import, MFDA registration, cold chain logistics, and nationwide distribution to 500+ pharmacies, hospitals, and clinics across Mongolia.",
  areaServed: {
    "@type": "Country",
    name: "Mongolia",
    sameAs: "https://www.wikidata.org/wiki/Q711",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Distribution Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "MFDA Registration Management",
          description:
            "Complete handling of Mongolian Food and Drug Administration registration for imported pharmaceutical products.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cold Chain Logistics",
          description:
            "Temperature-controlled warehousing (2°C–8°C) with real-time IoT monitoring and dedicated cold chain delivery fleet.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Nationwide Distribution",
          description:
            "Direct distribution to 500+ pharmacies, hospitals, and clinics across Mongolia with 24-hour delivery SLA.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Brand Stewardship",
          description:
            "Local marketing, KOL engagement, and brand management for international pharmaceutical and nutraceutical brands.",
        },
      },
    ],
  },
};

const nutricostProductSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Nutricost Nutritional Supplements",
  description:
    "Premium nutritional supplements including vitamins, minerals, and specialty supplements. Third-party tested for purity and quality.",
  brand: {
    "@type": "Brand",
    name: "Nutricost",
  },
  offers: {
    "@type": "Offer",
    seller: {
      "@type": "Organization",
      name: "Nomt-Nutripharma LLC",
    },
    areaServed: "Mongolia",
    availability: "https://schema.org/InStock",
  },
};

const radiantViewerProductSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Radiant Viewer DICOM Software",
  applicationCategory: "MedicalApplication",
  description:
    "Leading DICOM viewer for medical professionals. Supports a wide range of imaging modalities for enhanced diagnostics.",
  operatingSystem: "Windows",
  offers: {
    "@type": "Offer",
    seller: {
      "@type": "Organization",
      name: "Nomt-Nutripharma LLC",
    },
    areaServed: "Mongolia",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can an international brand partner with Nomt-Nutripharma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Submit a partnership application via our website contact form or email info@nomt-nutripharma.com. Our team responds within 24 hours to discuss distribution rights, regulatory requirements, and market entry strategy.",
      },
    },
    {
      "@type": "Question",
      name: "What regulatory approvals does Nomt-Nutripharma hold in Mongolia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nomt-Nutripharma is registered with the Mongolian Food and Drug Administration (MFDA) and holds import licenses for pharmaceutical products and nutritional supplements.",
      },
    },
    {
      "@type": "Question",
      name: "What is Nomt-Nutripharma's distribution coverage in Mongolia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We distribute nationwide across Mongolia with direct relationships with 500+ pharmacies, hospitals, and clinics, primarily in Ulaanbaatar with coverage across all major provinces.",
      },
    },
    {
      "@type": "Question",
      name: "Does Nomt-Nutripharma handle cold chain pharmaceutical products?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We operate state-of-the-art temperature-controlled warehousing (2°C–25°C) with real-time IoT monitoring and a dedicated cold chain delivery fleet.",
      },
    },
    {
      "@type": "Question",
      name: "Who is the official Nutricost distributor in Mongolia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nomt-Nutripharma LLC is the official authorized distributor of Nutricost nutritional supplements in Mongolia.",
      },
    },
    {
      "@type": "Question",
      name: "Who is the official Radiant Viewer distributor in Mongolia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nomt-Nutripharma LLC is the official authorized distributor of Radiant Viewer DICOM software in Mongolia.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* Page-level structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(nutricostProductSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(radiantViewerProductSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <NutripharmLanding />
    </>
  );
}
