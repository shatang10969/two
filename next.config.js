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
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/TT10969' : '',
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/TT10969/' : '',
  reactStrictMode: false,
}

module.exports = nextConfig 