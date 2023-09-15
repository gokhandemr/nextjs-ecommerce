/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.dr.com.tr',
            }
        ],
    },
}
module.exports = nextConfig
