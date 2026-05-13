import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// ─── Site-wide constants ─────────────────────────────────────────────────────
const SITE_URL = "https://www.nomt-nutripharma.com";
const SITE_NAME = "Nomt-Nutripharma";
const SITE_TITLE = "Nomt-Nutripharma | Pharmaceutical Distributor in Mongolia";
const SITE_DESCRIPTION =
  "Nomt-Nutripharma is Mongolia's authorized regional distributor of premium pharmaceutical products and nutritional supplements. MFDA registered. Official distributor of Nutricost and Radiant Viewer.";
const SITE_KEYWORDS = [
  "pharmaceutical distributor Mongolia",
  "medicine distribution Ulaanbaatar",
  "Nutricost Mongolia distributor",
  "Radiant Viewer Mongolia",
  "MFDA registered importer",
  "pharmaceutical import Mongolia",
  "nutritional supplements Mongolia",
  "DICOM viewer Mongolia",
  "healthcare distribution Mongolia",
  "Nomt Nutripharma",
  "эм ханган нийлүүлэгч Монгол",
  "эмийн сан түгээлт",
];

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  // Core
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  // Canonical
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "mn-MN": "/",
    },
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "mn_MN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Nomt-Nutripharma — Pharmaceutical Distributor in Mongolia",
        type: "image/png",
      },
    ],
  },

  // Twitter / X
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-image.png`],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // App / PWA
  applicationName: SITE_NAME,
  category: "healthcare",

  // Verification (add your actual codes when available)
  // verification: {
  //   google: "your-google-verification-code",
  // },
};

// ─── Viewport ────────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0D9488",
};

// ─── Structured Data (JSON-LD) ───────────────────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Nomt-Nutripharma LLC",
  alternateName: ["Номт-Нутрифарма ХХК", "Nomt Nutripharma"],
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.png`,
    width: 200,
    height: 80,
  },
  description: SITE_DESCRIPTION,
  foundingDate: "2014",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ulaanbaatar",
    addressCountry: "MN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+976-99-84-1308",
      contactType: "customer service",
      availableLanguage: ["English", "Mongolian"],
    },
    {
      "@type": "ContactPoint",
      email: "info@nomt-nutripharma.com",
      contactType: "sales",
    },
  ],
  sameAs: [],
  areaServed: {
    "@type": "Country",
    name: "Mongolia",
  },
  knowsAbout: [
    "Pharmaceutical Distribution",
    "Medicine Import",
    "Nutritional Supplements",
    "Medical Imaging Software",
    "Cold Chain Logistics",
    "MFDA Registration",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: "Nomt-Nutripharma LLC",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: "+976-99-84-1308",
  email: "info@nomt-nutripharma.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ulaanbaatar",
    addressCountry: "MN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.8864,
    longitude: 106.9057,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  currenciesAccepted: "MNT",
  paymentAccepted: "Cash, Bank Transfer",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  inLanguage: ["en-US", "mn-MN"],
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// ─── Root Layout ─────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.radiantviewer.com" />
        <link rel="dns-prefetch" href="https://nutricost.com" />

        {/* PWA manifest */}
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
