"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import axios from "axios";
import { formatDate, slugConvert } from "../../lib/utils";

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  banner_url: string;
  created_at: string;
  author: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function RecentBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const vendorId = 87; // adjust if dynamic later
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/blog/?vendor_id=${vendorId}`
        );

        // Sort by created_at and take top 3
        const sortedBlogs = (response.data?.blogs || [])
          .sort(
            (a: Blog, b: Blog) =>
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
          )
          .slice(0, 3);

        setBlogs(sortedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 text-center mb-8">
           Latest Blog Posts from{" "}
          <span className="text-orange-500">FTDS Hardware</span>
        </h2>
          
          <p className="text-gray-500 max-w-2xl mx-auto">
            Stay updated with the latest tech insights, maintenance tips, and
            hardware news from FTDS Hardware — your trusted source for
            refurbished laptops, desktops, and IT solutions in Chennai.
          </p>
        </motion.div>

        {loading ? (
          <p className="text-center text-gray-500">Loading blogs...</p>
        ) : blogs.length === 0 ? (
          <p className="text-center text-gray-500">No blogs found.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog: Blog, i: number) => (
              <motion.div
                key={blog.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full h-56">
                  <Image
                    src={blog.banner_url}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between flex-grow p-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>

                  <div className="mt-6">
                    <div className="text-xs text-gray-400">
                      {formatDate(blog.created_at)} · by {blog.author}
                    </div>
                    <a
                      href={`/blog/${slugConvert(blog.title)}`}
                      className="inline-block mt-2 text-orange-500 hover:underline font-medium text-sm"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}


