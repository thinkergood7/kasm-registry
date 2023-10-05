/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Thinker\ s  registyr',
    description: ' list of my kasm workspace .',
    icon: '/img/logo.svg',
    listUrl: 'https://thinkergood7.github.io/kasm-registry',
    contactUrl: 'https://github.com/thinkergood7/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
