/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  image:{
    domains:['localhost']
  },
  env: {
    APP_URL: process.env.REACT_APP_URL,
  }
}

module.exports = nextConfig