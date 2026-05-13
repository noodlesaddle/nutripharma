import { MetadataRoute } from "next";

const SITE_URL = "https://www.nomt-nutripharma.com";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1.0,
            alternates: {
                languages: {
                    en: SITE_URL,
                    mn: SITE_URL,
                },
            },
        },
        {
            url: `${SITE_URL}/#advantage`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/#partners`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/#supply-chain`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {
            url: `${SITE_URL}/#trust`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {
            url: `${SITE_URL}/#contact`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.7,
        },
    ];
}
