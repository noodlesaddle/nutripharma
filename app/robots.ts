import { MetadataRoute } from "next";

const SITE_URL = "https://www.nomt-nutripharma.com";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/_next/"],
            },
            // Allow AI crawlers explicitly for GEO
            {
                userAgent: "GPTBot",
                allow: "/",
            },
            {
                userAgent: "ChatGPT-User",
                allow: "/",
            },
            {
                userAgent: "Claude-Web",
                allow: "/",
            },
            {
                userAgent: "PerplexityBot",
                allow: "/",
            },
            {
                userAgent: "Googlebot",
                allow: "/",
            },
            {
                userAgent: "Bingbot",
                allow: "/",
            },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    };
}
