/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'oqfhflf8onfecbes.public.blob.vercel-storage.com',
            port: '',
            pathname: '**',
          },
        ],
    },
};

export default nextConfig;
