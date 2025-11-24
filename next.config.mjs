/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "standalone",
  distDir: ".next",
  trailingSlash: false,
  experimental: {
    appDir: false,
    serverActions: false,
  }
};

export default nextConfig;
