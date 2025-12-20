// app/components/FeatureHighlights.tsx
import {
  FaShippingFast,
  FaUndo,
  FaLock,
  FaHeadset,
} from "react-icons/fa";

export default function FeatureHighlights() {
  const features = [
    {
      icon: <FaShippingFast className="w-10 h-10 text-orange-400" />,
      title: "Shipping Across South India",
      desc: "Fast delivery available on every order.",
    },
    {
      icon: <FaUndo className="w-10 h-10 text-orange-400" />,
      title: "Refurbished Laptops",
      desc: "Quality-checked laptops at affordable prices.",
    },
    {
      icon: <FaLock className="w-10 h-10 text-orange-400" />,
      title: "Trusted by FTDS Hardware",
      desc: "Secure shopping with genuine products.",
    },
    {
      icon: <FaHeadset className="w-10 h-10 text-orange-400" />,
      title: "Customer Support",
      desc: (
        <>
          Call our FTDS Hardware team{" "}
          <span className="text-orange-500 font-semibold">
            +91-7277929292
          </span>
        </>
      ),
    },
  ];

  return (
    <section className="bg-[#fff]">
      <div className="mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-y border-gray-300">
          {features.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center py-6 px-4 ${
                i !== features.length - 1 ? "border-b sm:border-b-0 lg:border-r" : ""
              } border-gray-300`}
            >
              {item.icon}
              <h4 className="text-base font-bold text-black mt-4">{item.title}</h4>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <h3 className="text-lg font-semibold text-black">
            FTDS Hardware – Best Deals on Refurbished Laptops
          </h3>
        </div>
      </div>
    </section>
  );
}
