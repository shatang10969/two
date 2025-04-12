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
  basePath: '/TT10969',
}

module.exports = nextConfig 