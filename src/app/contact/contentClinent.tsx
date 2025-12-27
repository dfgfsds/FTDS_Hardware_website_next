"use client";

import { motion, Variants } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
// import FeatureHighlights from "../components/FeatureHighlights";

// Motion Variants
const fadeUp = (i = 1): Variants => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // Replace string with easing array
    },
  },
});


export default function ContactSection() {
  return (
    <div>
      <section className="bg-[#fffcfc] py-20 px-6 md:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div
            variants={fadeUp(1)}
            custom={1}
            className="order-1 md:order-2 bg-white p-8 rounded-2xl shadow-lg"
          >
            <form className="space-y-6">
              <motion.div variants={fadeUp(2)} custom={2}>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Your Name"
                />
              </motion.div>

              <motion.div variants={fadeUp(3)} custom={3}>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="you@example.com"
                />
              </motion.div>

              <motion.div variants={fadeUp(4)} custom={4}>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                  placeholder="Type your message..."
                />
              </motion.div>

              <motion.button
                variants={fadeUp(5)}
                custom={5}
                type="submit"
                className="group relative mt-4 w-full overflow-hidden rounded-md bg-orange-500 px-4 py-3 text-base font-semibold text-white transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <FiSend size={18} />
                  Send Message
                </span>
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-[#f12828] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                </span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info + Map */}
          <motion.div
            variants={fadeUp(6)}
            custom={1}
            className="order-2 md:order-1 space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
            <p className="text-gray-600">
              Have questions or want to work together? Fill out the form or
              reach us directly using the info below.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaPhone className="text-orange-500" />
                <span className="text-gray-700">+91-7277929292</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-orange-500" />
                <span className="text-gray-700">ftdigitalsolution777@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-orange-500" />
                <span className="text-gray-700">
                  Chennai, Tamil Nadu, India
                </span>
              </div>
            </div>

            <div className="mt-8 w-full h-64 rounded-xl overflow-hidden shadow-md">
              <iframe
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62189.32386072363!2d80.22680439855388!3d13.046316228125049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ba1580ee317297%3A0x5aa0f0c4f277d9f0!2sFT%20Digital%20Solutions%20hardware!5e0!3m2!1sen!2sin!4v1752645922724!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      </section>
{/* 
      <FeatureHighlights /> */}
    </div>
  );
}
