/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/pb2',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
