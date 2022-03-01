/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com", "media-exp1.licdn.com"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
