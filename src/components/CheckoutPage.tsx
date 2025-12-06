'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaTrash } from 'react-icons/fa';

export default function CheckoutPage() {
  const router = useRouter();

  const product = {
    title: 'HP Smart Tank All-in-one WiFi Colour Printer',
    price: 225,
    quantity: 1,
    color: 'Red',
    image: '/printer.png', // Replace with actual path or dynamic import
  };

  const shipping = 7;
  const subtotal = product.price * product.quantity;
  const total = subtotal + shipping;

  return (
    <div className="bg-[#f1f7ff] min-h-screen py-10 px-4 sm:px-8">
      <h2 className="text-2xl font-semibold mb-6">Shopping Cart</h2>

      <div className="bg-white rounded-md p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Product Section */}
        <div className="lg:col-span-2 border rounded-md p-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <img
                src={product.image}
                alt={product.title}
                className="w-24 h-24 object-contain border rounded"
              />
              <div>
                <h3 className="font-semibold text-gray-800">{product.title}</h3>
                <p className="text-blue-600 font-bold text-lg">${product.price.toFixed(2)}</p>
                <p className="text-sm text-gray-600">Color: {product.color}</p>
              </div>
            </div>

            {/* Quantity + Price */}
            <div className="flex items-center gap-4">
              <input
                type="number"
                value={product.quantity}
                min={1}
                readOnly
                className="w-16 border px-2 py-1 text-center rounded"
              />
              <p className="text-blue-600 font-bold">${(product.price * product.quantity).toFixed(2)}</p>
              <button>
                <FaTrash className="text-gray-600 hover:text-red-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="border rounded-md p-4 space-y-4">
          <div className="flex justify-between text-sm">
            <span>{product.quantity} item</span>
            <span className="text-blue-600 font-semibold">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span className="text-blue-600 font-semibold">${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold border-t pt-2">
            <span>Total</span>
            <span className="text-blue-600">${total.toFixed(2)}</span>
          </div>

          <div className="text-sm">
            <a href="#" className="text-blue-600 underline">
              Have a promo code?
            </a>
          </div>

          <div className="text-sm text-gray-700">
            Take advantage of our exclusive offers:
            <div className="mt-1">
              <span className="text-blue-600 font-bold">GET25OFF</span>{' '}
              <span className="text-orange-500">- Promo Code</span>
            </div>
          </div>

          <button
            onClick={() => alert('Checkout step 1')}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 mt-2"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>

      {/* Back link */}
      <button
        onClick={() => router.back()}
        className="mt-6 flex items-center text-sm text-gray-600 hover:underline"
      >
        &larr; Continue shopping
      </button>
    </div>
  );
}
