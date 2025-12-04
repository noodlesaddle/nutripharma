/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.arrowedge.co.uk',
                pathname: '/wp-content/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'www.radiantviewer.com',
                pathname: '/img/**',
            },
            {
                protocol: 'https',
                hostname: 'www.nasc.cc',
                pathname: '/wp-content/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'nutricost.com',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
