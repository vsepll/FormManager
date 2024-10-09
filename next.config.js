/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        net: false,
        tls: false,
        fs: false,
        dns: false,
        child_process: false,
        timers: false,
        'timers/promises': false,
      }
    }
    return config
  },
}
module.exports = {
  experimental: {
    appDir: true,
  },
}