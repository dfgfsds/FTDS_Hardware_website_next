"use client";

import React from "react";
import Link from "next/link";

const ReasonsSection = () => {
  const reasons = [
    {
      title: "Quality Assurance",
      desc: "Every laptop and desktop is thoroughly tested and certified for top performance, backed by a 12-month service warranty.",
    },
    {
      title: "Affordable Pricing",
      desc: "Save up to 60% compared to new systems — premium quality at the best value.",
    },
    {
      title: "Transparency",
      desc: "Clear details on specifications, configuration, and accessories help you make confident purchase decisions.",
    },
    {
      title: "Wide Range",
      desc: "Choose from trusted brands like Dell, HP, Lenovo, Acer, and ASUS, with models for every need.",
    },
    {
      title: "Eco-Friendly",
      desc: "Each refurbished system helps reduce e-waste and promotes a sustainable tech lifestyle.",
    },
    {
      title: "Reliable Support",
      desc: "Get quick, dependable after-sales service and warranty assistance from our expert team whenever you need help.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 text-center mb-12">
          6 Reasons to Buy from{" "}
          <span className="text-orange-500">FTDS Hardware</span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 text-center"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile Only Button */}
          <div className="flex justify-center py-6 md:hidden">
          <Link
            href="/shop"
            className="bg-orange-500 text-white px-6 py-2 rounded-full animate-bounce font-medium text-sm hover:bg-orange-600 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
