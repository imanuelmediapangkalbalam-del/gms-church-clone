/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/gms-church-clone',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
}

module.exports = nextConfig
