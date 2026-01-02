import ProductDetail from '../../../components/ProductDetail';
import { slugConvert } from '../../../../lib/utils';
import { notFound } from 'next/navigation';


export async function generateStaticParams() {
  const res = await fetch(
    'https://test-ecomapi.justvy.in/api/products/?vendor_id=87'
  );

  const data = await res.json();
  const products = data?.data || data || [];

  return products.map((p: any) => ({
    id: slugConvert(p.name),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(
    'https://test-ecomapi.justvy.in/api/products/?vendor_id=87',
    { cache: 'force-cache' }
  );

  const data = await res.json();
  const products = data?.data || data || [];

  const product = products.find(
    (p: any) => slugConvert(p.name) === params.id
  );

  if (!product) return {};

  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: product.image_urls || [],
    description: product.description_2 || product.name,
    brand: {
      "@type": "Brand",
      name: "FTDS Hardwares",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: product.discount > 0 ? product.discount : product.price,
      availability:
        product.stock_quantity === 0
          ? "https://schema.org/OutOfStock"
          : "https://schema.org/InStock",
    },
  };

  return {
    title: product.name,
    description: product.description_2,
    other: {
      'application/ld+json': JSON.stringify(schemaData),
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(
    'https://test-ecomapi.justvy.in/api/products/?vendor_id=87',
    { cache: 'force-cache' }
  );

  const data = await res.json();
  const products = data?.data || data || [];

  const productDetails = products.find(
    (p: any) => slugConvert(p.name) === params.id
  );

  if (!productDetails) return notFound();

  const relatedProducts = products
    .filter(
      (p: any) =>
        p.category === productDetails.category &&
        p.id !== productDetails.id
    )
    .slice(0, 4);

  return (
    <ProductDetail
      productDetails={productDetails}
      relatedProducts={relatedProducts}
    />
  );
}
