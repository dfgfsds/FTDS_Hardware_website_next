"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { formatDate, slugConvert } from "../../../../lib/utils";
import ReactMarkdown from "react-markdown";
import axios from "axios";

interface Blog {
    id: number;
    title: string;
    content: string;
    banner_url: string;
    created_at: string;
    author: string;
}

export default function BlogDetail() {
    const params = useParams();
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const vendorId = 87; // change later if needed
                const response = await axios.get(
                    `https://test-ecomapi.justvy.in/blog/?vendor_id=${vendorId}`
                );

                const blogs: Blog[] = response.data?.blogs || [];
                const found = blogs.find(
                    (b) => slugConvert(b.title) === params.id
                );
                setBlog(found || null);
            } catch (error) {
                console.error("Error fetching blog:", error);
            } finally {
                setLoading(false);
            }
        };

        if (params?.id) {
            fetchBlog();
        }
    }, [params?.id]);

    if (loading) {
        return <div className="text-center py-20">Loading blog...</div>;
    }

    if (!blog) {
        return <div className="text-center py-20">Blog not found</div>;
    }

    return (
        <div className="max-w-4xl mx-auto py-16 px-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>
            <div className="text-sm text-gray-400 mb-6">
                {formatDate(blog.created_at)} · by {blog.author}
            </div>

            <div className="relative w-full mb-8">
                <Image
                    src={blog.banner_url}
                    alt={blog.title}
                    // fill
                    height={500}
                    width={800}
                    className="object-cover rounded-lg"
                />
            </div>

               {/* Blog Content */}
            <div dangerouslySetInnerHTML={{ __html: blog?.content }} className="quill-content  mt-4" />
        </div>
    );
}