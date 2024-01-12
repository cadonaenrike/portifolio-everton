/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.licdn.com"], // Adicione o domínio de onde você está carregando as imagens
  },
};

module.exports = nextConfig;
