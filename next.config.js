/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
    domains: ['localhost'],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/TT10969' : '',
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/TT10969/' : '',
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig 