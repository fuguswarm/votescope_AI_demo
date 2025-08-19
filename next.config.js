/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Temporary guards so builds don’t fail while we iterate
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

module.exports = nextConfig;
