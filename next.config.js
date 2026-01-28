/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['www.ftds.in'],
    remotePatterns: [
      { protocol: 'https', hostname: 'capricathemes.com', pathname: '/opencart/**' },
      { protocol: 'https', hostname: 'm.media-amazon.com', pathname: '/images/**' },
      { protocol: 'https', hostname: 'lexiconsystems.in', pathname: '/**' },
      { protocol: 'https', hostname: 'static.vecteezy.com', pathname: '/**' },
      { protocol: 'https', hostname: 'st2.depositphotos.com', pathname: '/**' },
      { protocol: 'https', hostname: 'img.freepik.com', pathname: '/**' },
      { protocol: 'https', hostname: 'webapi3.adata.com', pathname: '/storage/category/**' },
      { protocol: 'https', hostname: 'fakestoreapi.com', pathname: '/img/**' },
      { protocol: 'https', hostname: 'media.istockphoto.com', pathname: '/**' },
      { protocol: 'https', hostname: 'beefurb.com', pathname: '/cdn/**' },
      { protocol: 'https', hostname: 'i.ibb.co', pathname: '/**' },
      { protocol: 'https', hostname: 'www.cnet.com', pathname: '/**' },
      { protocol: 'https', hostname: 'encrypted-tbn0.gstatic.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.hp.com', pathname: '/**' },
      { protocol: 'https', hostname: 'ecomapi.ftdigitalsolutions.org', pathname: '/**' },
      { protocol: 'https', hostname: 'www.primeabgb.com', pathname: '/**' },
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'shop-cdn.bharathisystems.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.laptopex.com', pathname: '/**' },
    ],
  },

  // ✅ SEO Redirects
  async redirects() {
    return [

      {
        source: '/refurbished-laptop-in-chennai',
        destination: '/categories/refurbished-laptops',
        permanent: true,
      },
      {
        source: '/blog/refurbished-lenovo-aio-v310z--boost-productivity--ftds',
        destination: '/blog/top-features-of-the-refurbished-lenovo-aio-v310z-that-boost-productivity',
        permanent: true, // ✅ 301 redirect (SEO safe)
      },
       {
        source: '/product/19042',
        destination: '/shop',
        permanent: true, // ✅ 301 redirect (SEO safe)
      },
       {
        source: '/product/dell-optiplex-3010',
        destination: '/shop',
        permanent: true, // ✅ 301 redirect (SEO safe)
      },
       {
        source: '/product/lenovo-thinkcentre-e73',
        destination: '/shop',
        permanent: true, // ✅ 301 redirect (SEO safe)
      },
       {
        source: '/product/hp-s500-wireless-optical-mouse-7ya11pa-usb-black',
        destination: '/shop',
        permanent: true, // ✅ 301 redirect (SEO safe)
      },


      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'product_cat',
            value: 'processors',
          },
        ],
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
