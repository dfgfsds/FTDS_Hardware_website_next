/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.ftds.in'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'capricathemes.com',
        pathname: '/opencart/**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'lexiconsystems.in',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.vecteezy.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'st2.depositphotos.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'webapi3.adata.com',
        pathname: '/storage/category/**',
      },
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        pathname: '/img/**',
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'beefurb.com',
        pathname: '/cdn/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.cnet.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.hp.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ecomapi.ftdigitalsolutions.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.primeabgb.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'shop-cdn.bharathisystems.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.laptopex.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
