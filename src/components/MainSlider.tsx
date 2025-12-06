'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { FaArrowRightLong } from 'react-icons/fa6';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { useProducts } from '@/context/ProductsContext';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { baseUrl } from '@/api-endpoints/ApiUrls';
import { useVendor } from '@/context/VendorContext';
import { slugConvert } from '../../lib/utils';


export default function HeroSection() {
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState(0);
  const [randomProduct, setRandomProduct] = useState<any>(null);
  const [banners, setBanners] = useState<any[]>([]);
  const { products } = useProducts();
  const { vendorId } = useVendor();

  // Fetch banners
  const bannerGetApi = async () => {
    try {
      const res = await axios.get(`${baseUrl}/banners/?vendorId=${vendorId}`);
      if (res.data?.banners) {
        setBanners(res.data.banners);
      } else {
        console.warn('Unexpected API response:', res.data);
      }
    } catch (error) {
      console.log('Error fetching banners:', error);
    }
  };

  useEffect(() => {
    bannerGetApi();
  }, [vendorId]);

  // Pick random product whenever products change
  useEffect(() => {
    if (products?.data?.length > 0) {
      const randomIndex = Math.floor(Math.random() * products.data.length);
      setRandomProduct(products.data[randomIndex]);
    }
  }, [products]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(timer);
  }, []);


  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-6 px-4 py-6 lg:px-12">

      <div
        className=" w-full h-[400px]  md:h-[450px]  rounded-2xl overflow-hidden flex items-center justify-start text-start px-4 sm:px-6 lg:px-12 transition-all duration-700 relative bg-cover bg-no-repeat bg-[position:right] sm:bg-[position:center] "
        style={{
          backgroundImage: `url(./assets/banner.jpg)`,
           
          }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-2xl"></div>

        {/* Text Content */}
        <div className="max-w-md text-white z-10 relative">
          <h1 className="text-2xl md:text-4xl font-bold leading-snug drop-shadow-md">
           Premium Refurbished Laptops & Desktops – Tested, Certified & Affordable
          </h1>
          <p className="mt-3 text-sm opacity-90 drop-shadow-sm">
          Buy quality refurbished laptops and desktops from top brands — tested, guaranteed, and warranty-backed.
          </p>
          <Link href={banners[currentSlide]?.link || '/shop'}>
            <button className="mt-5 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-orange-500 hover:bg-gray-100 transition">
              Shop Now <FaArrowRightLong />
            </button>
          </Link>
        </div>

        {/* Slider Pagination */}
        {/* <div className="absolute bottom-[-8px] left-1/2 z-20 -translate-x-1/2">
          <div className="flex items-center gap-2 rounded-full bg-white px-3 py-1 shadow-sm">
            <HiOutlineChevronLeft
              onClick={prevSlide}
              className="text-gray-600 cursor-pointer hover:text-black text-lg"
            />
            <div className="flex items-center gap-1">
              {banners.map((_, index) => (
                <span
                  key={index}
                  className={`h-2 w-2 rounded-full ${index === currentSlide ? 'bg-gray-800' : 'bg-gray-300'
                    }`}
                ></span>
              ))}
            </div>
            <HiOutlineChevronRight
              onClick={nextSlide}
              className="text-gray-600 cursor-pointer hover:text-black text-lg"
            />
          </div>
        </div> */}
      </div>



      {/* Product Card */}
      {/* {randomProduct && (
        <div className="order-2 lg:order-1 w-full max-w-xs rounded-xl bg-white p-4 shadow-md border border-slate-200 relative flex flex-col justify-between">
       
          <div className="flex justify-between items-center text-xs mb-2">
           
            <span className="bg-purple-100 text-orange-500 px-2 py-[2px] rounded font-medium text-[11px]">
              01:44:22:43
            </span>
          </div>

 
          <div className="relative w-full h-[100px] mb-3">
            <Image
              src={randomProduct.image_urls?.[0] || '/placeholder.png'}
              alt={randomProduct.name}
              fill
              className="object-contain rounded"
            />
          </div>

        
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-semibold text-gray-800 leading-tight mb-1">
                {randomProduct.name}
              </h3>
              <p className="text-[11px] text-blue-500 font-medium mb-1">
                {randomProduct.category_name}
              </p>
              <p className="text-[11px] text-red-500 mb-2">
                {randomProduct.stock_quantity} Products Left
              </p>
            </div>

            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-lg font-bold text-gray-900">
                ₹{randomProduct.discount || randomProduct.price}
              </span>
              {randomProduct.discount && (
                <span className="text-xs text-gray-400 line-through">
                  ₹{randomProduct.price}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button onClick={() => router.push(`/product/${slugConvert(randomProduct?.name)}`)} className="flex-1 bg-orange-500 text-white text-xs px-3 py-2 rounded-md hover:bg-orange-600 transition">
                See Product
              </button>
              <button className="p-2 bg-gray-100 rounded-md text-gray-700 hover:text-orange-600">
                <AiOutlineHeart size={16} />
              </button>
              <button className="p-2 bg-gray-100 rounded-md text-gray-700 hover:text-orange-600">
                <AiOutlineShoppingCart size={16} />
              </button>
            </div>
          </div>
        </div>
      )} */}
    </section>
  );
}



// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
// import { FaArrowRightLong } from 'react-icons/fa6';
// import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
// import { useProducts } from '@/context/ProductsContext';
// import { useRouter } from 'next/navigation';
// import axios from 'axios';
// import { baseUrl } from '@/api-endpoints/ApiUrls';
// import { useVendor } from '@/context/VendorContext';
// import { slugConvert } from '../../lib/utils';


// export default function HeroSection() {
//   const router = useRouter()
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [randomProduct, setRandomProduct] = useState<any>(null);
//   const [banners, setBanners] = useState<any[]>([]);
//   const { products } = useProducts();
//   const { vendorId } = useVendor();


//   const bannerGetApi = async () => {
//     try {
//       const res = await axios.get(`${baseUrl}/banners/?vendorId=${vendorId}`);
//       if (res.data?.banners) {
//         setBanners(res.data.banners);
//       } else {
//         console.warn('Unexpected API response:', res.data);
//       }
//     } catch (error) {
//       console.log('Error fetching banners:', error);
//     }
//   };

//   useEffect(() => {
//     bannerGetApi();
//   }, [vendorId]);

//   useEffect(() => {
//     if (products?.data?.length > 0) {
//       const randomIndex = Math.floor(Math.random() * products.data.length);
//       setRandomProduct(products.data[randomIndex]);
//     }
//   }, [products]);

//   const nextSlide = () =>
//     setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
//   const prevSlide = () =>
//     setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));

//   useEffect(() => {
//     const timer = setInterval(() => nextSlide(), 5000);
//     return () => clearInterval(timer);
//   }, []);


//   return (
//     <section className="flex flex-col lg:flex-row items-center justify-center gap-6 px-4 py-6 lg:px-12">

//       <div
//         className="order-1 lg:order-2 w-full h-[300px] sm:h-[345px] rounded-2xl bg-cover bg-center px-6 py-10 text-white overflow-hidden flex items-center justify-between relative transition-all duration-700"
//         style={{
//           backgroundImage: `url(${banners[currentSlide]?.image_url})`,
//         }}
//       >

//         <div className="absolute inset-0 bg-black bg-opacity-70 rounded-2xl"></div>


//         <div className="max-w-md z-10 relative">
//           <h1 className="text-2xl md:text-4xl font-bold leading-snug drop-shadow-md">
//             {banners[currentSlide]?.title}
//           </h1>
//           <p className="mt-3 text-sm opacity-90 drop-shadow-sm">
//             {banners[currentSlide]?.subtitle}
//           </p>
//           <Link href={banners[currentSlide]?.link || '/shop'}>
//             <button className="mt-5 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-orange-500 hover:bg-gray-100 transition">
//               Start Shopping <FaArrowRightLong />
//             </button>
//           </Link>
//         </div>


//         <div className="absolute bottom-[-8px] left-1/2 z-20 -translate-x-1/2">
//           <div className="flex items-center gap-2 rounded-full bg-white px-3 py-1 shadow-sm">
//             <HiOutlineChevronLeft
//               onClick={prevSlide}
//               className="text-gray-600 cursor-pointer hover:text-black text-lg"
//             />
//             <div className="flex items-center gap-1">
//               {banners.map((_, index) => (
//                 <span
//                   key={index}
//                   className={`h-2 w-2 rounded-full ${index === currentSlide ? 'bg-gray-800' : 'bg-gray-300'
//                     }`}
//                 ></span>
//               ))}
//             </div>
//             <HiOutlineChevronRight
//               onClick={nextSlide}
//               className="text-gray-600 cursor-pointer hover:text-black text-lg"
//             />
//           </div>
//         </div>
//       </div>




//       {randomProduct && (
//         <div className="order-2 lg:order-1 w-full max-w-xs rounded-xl bg-white p-4 shadow-md border border-slate-200 relative flex flex-col justify-between">

//           <div className="flex justify-between items-center text-xs mb-2">
           
//             <span className="bg-purple-100 text-orange-500 px-2 py-[2px] rounded font-medium text-[11px]">
//               01:44:22:43
//             </span>
//           </div>


//           <div className="relative w-full h-[100px] mb-3">
//             <Image
//               src={randomProduct.image_urls?.[0] || '/placeholder.png'}
//               alt={randomProduct.name}
//               fill
//               className="object-contain rounded"
//             />
//           </div>

 
//           <div className="flex-1 flex flex-col justify-between">
//             <div>
//               <h3 className="text-sm font-semibold text-gray-800 leading-tight mb-1">
//                 {randomProduct.name}
//               </h3>
//               <p className="text-[11px] text-blue-500 font-medium mb-1">
//                 {randomProduct.category_name}
//               </p>
//               <p className="text-[11px] text-red-500 mb-2">
//                 {randomProduct.stock_quantity} Products Left
//               </p>
//             </div>


//             <div className="flex items-baseline gap-2 mb-3">
//               <span className="text-lg font-bold text-gray-900">
//                 ₹{randomProduct.discount || randomProduct.price}
//               </span>
//               {randomProduct.discount && (
//                 <span className="text-xs text-gray-400 line-through">
//                   ₹{randomProduct.price}
//                 </span>
//               )}
//             </div>

    
//             <div className="flex items-center gap-2">
//               <button onClick={() => router.push(`/product/${slugConvert(randomProduct?.name)}`)} className="flex-1 bg-orange-500 text-white text-xs px-3 py-2 rounded-md hover:bg-orange-600 transition">
//                 See Product
//               </button>
//               <button className="p-2 bg-gray-100 rounded-md text-gray-700 hover:text-orange-600">
//                 <AiOutlineHeart size={16} />
//               </button>
//               <button className="p-2 bg-gray-100 rounded-md text-gray-700 hover:text-orange-600">
//                 <AiOutlineShoppingCart size={16} />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }
