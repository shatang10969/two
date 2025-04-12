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
}

module.exports = nextConfig 