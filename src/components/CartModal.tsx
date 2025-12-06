'use client';
import { useRouter } from 'next/navigation';
import { FaTimes } from 'react-icons/fa';

interface CartModalProps {
  product: {
    title: string;
    price: number;
    quantity: number;
    image: string;
  };
  onClose: () => void;
}

export default function CartModal({ product, onClose }: CartModalProps) {
    const router = useRouter();
  const shipping = 7;
  const subtotal = product.price * product.quantity;
  const total = subtotal + shipping;
  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-3xl rounded-md shadow-lg relative p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
        >
          <FaTimes size={18} />
        </button>

        {/* Success Message */}
        <div className="text--600 font-semibold mb-4">
          ✔ Product successfully added to your shopping cart
        </div>

        {/* Modal Body */}
<div className="flex flex-col lg:flex-row gap-6">
  {/* Product Info - Left Half */}
  <div className="w-full lg:w-1/2 flex gap-4">
    <img
      src={product.image}
      alt={product.title}
      className="w-28 h-28 object-contain border rounded"
    />
    <div className="flex flex-col justify-center">
      <h3 className="text-sm font-medium">{product.title}</h3>
      <p className="text-blue-600 font-semibold">${product.price.toFixed(2)}</p>
      <p className="text-sm text-gray-600">Quantity: {product.quantity}</p>
    </div>
  </div>

  {/* Cart Summary - Right Half */}
  <div className="w-full lg:w-1/2">
    <p className="text-sm mb-2">
      There are <span className="font-bold">{product.quantity}</span> items in your cart.
    </p>
    <div className="text-sm space-y-1">
      <div className="flex justify-between">
        <span>Subtotal:</span>
        <span className="text-blue-600 font-semibold">${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span>Shipping:</span>
        <span className="text-blue-600 font-semibold">${shipping.toFixed(2)}</span>
      </div>
      <div className="flex justify-between font-bold border-t pt-2">
        <span>Total:</span>
        <span className="text-blue-600">${total.toFixed(2)}</span>
      </div>
    </div>
<div className="mt-4 flex flex-col gap-3 items-center">
  <button
    onClick={onClose}
    className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300 w-full max-w-xs"
  >
    Continue Shopping
  </button>
  <button
    onClick={() => router.push('/checkout')}
    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 w-full max-w-xs"
  >
    Proceed to Checkout
  </button>
</div>




  </div>
</div>

      </div>
    </div>
  );
}
