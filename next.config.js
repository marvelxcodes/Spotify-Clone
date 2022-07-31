/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    domains: [
      "res.cloudinary.com"
    ]
  }
}

module.exports = nextConfig