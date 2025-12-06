"use client";

import React from "react";
import { usePolicy } from "@/context/PolicyContext";

function Page() {
    const { policy } = usePolicy();

    return (
        <div className="max-w-7xl mx-auto container bg-gray-200 m-4 p-4 rounded-md">
            <div dangerouslySetInnerHTML={{ __html: policy?.data?.shipping_policy || "" }} />
        </div>
    );
}

export default Page;
