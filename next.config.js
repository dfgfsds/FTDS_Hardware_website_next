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

      // 🔹 Existing SEO Redirects
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

      // 🔹 Product 404 Redirects -> /shop
      {
        source: '/product/ecco-air3',
        destination: '/shop',
        permanent: true,
      },
      {
        source: '/product/19052',
        destination: '/shop',
        permanent: true,
      },
      {
        source: '/product/19043',
        destination: '/shop',
        permanent: true,
      },
      {
        source: '/product/refurbished-dell-optiplex-3020-sff-desktop-with-free-wifi',
        destination: '/shop',
        permanent: true,
      },
      {
        source: '/product/genuine-dell-monitor-cable-vga-to-vga-black',
        destination: '/shop',
        permanent: true,
      },
      {
        source: '/product/nextron-g210-graphic-card-1gb-ddr3',
        destination: '/shop',
        permanent: true,
      },
      {
        source: '/product/hp-v20-19-5-inch-1h849a6-hd-wall-monitor',
        destination: '/shop',
        permanent: true,
      },
      {
        source: '/product/hp-527sf-27inch-94f45a6-fhd-monitor-2',
        destination: '/shop',
        permanent: true,
      },
      {
        source: '/product/z6-wifi-tablet-with-android-10',
        destination: '/shop',
        permanent: true,
      },
      {
        source: '/product/hp-e24u-g4-23-8-189t0aa-fhd-usb-c-monitor',
        destination: '/shop',
        permanent: true,
      },

      // 🔹 Blog Redirect
      {
        source: '/blog/why-a-refurbished-lenovo-e73-is-perfect-for-budget-conscious-users',
        destination: '/blog',
        permanent: true,
      },

      // 🔹 Static Asset / CSS Hash Redirect
      {
        source: '/_next/static/css/d0c8482b0e11f3d5.css',
        destination: '/',
        permanent: true,
      },

      // 🔹 WooCommerce / Legacy Query Parameters -> /shop
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'mas_static_content',
          },
        ],
        destination: '/shop',
        permanent: true,
      },
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'add-to-cart',
          },
        ],
        destination: '/shop',
        permanent: true,
      },
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'product_cat',
          },
        ],
        destination: '/shop',
        permanent: true,
      },

      // 🔹 Legacy Shopdetail & Spam PHP URLs -> /shop
      {
        source: '/shopdetail/:path*',
        destination: '/shop',
        permanent: true,
      },
      {
        source: '/godsend.php',
        destination: '/shop',
        permanent: true,
      },
      {
        source: '/hiroshi.php',
        destination: '/shop',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig