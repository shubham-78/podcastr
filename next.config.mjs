/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lovely-flamingo-139.convex.cloud'
            },
            {
                protocol: 'https',
                hostname: 'savory-gnu-971.convex.cloud'
            },
            {
                protocol: 'https',  //this 3rd one needs to be changed accroding to my error
                hostname: 'img.clerk.com'
            }
        ]
    }
};

export default nextConfig;
