/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  // basePath: '/document-number-seven',
  // assetPrefix: '/document-number-seven/',

  env: {
    v : "1.0002" ,
    privateKey: process.env.privateKey,
  }
 
}

module.exports = nextConfig