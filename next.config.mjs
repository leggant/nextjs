/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  trailingSlash: false,
  experimental: {
    typedRoutes: true,
    optimizePackageImports: ['sharp'],
    serverActions: {
      bodySizeLimit: '5mb',
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn2.thedogapi.com',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
