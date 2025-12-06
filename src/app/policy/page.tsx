'use client';

import React from 'react';

export default function RefundPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Refund Policy</h1>
      <p className="text-sm text-gray-500 mb-10 text-center">
        Last updated on 19-02-2025 17:29:11
      </p>

      <p className="mb-4">
        <strong>FT DIGITAL SOLUTIONS</strong> believes in assisting its customers as much as possible and has a liberal cancellation policy. Under this policy:
      </p>

      <ul className="list-disc list-inside space-y-4 mb-6">
        <li>
          Cancellations will be considered only if the request is made immediately after placing the order. However, if the order has already been processed by our vendors/merchants and shipping has begun, the cancellation request may not be entertained.
        </li>
        <li>
          We do not accept cancellation requests for perishable items like flowers and eatables. However, refunds or replacements may be considered if the customer provides sufficient evidence that the delivered product was of poor quality.
        </li>
        <li>
          In the case of damaged or defective items, customers must report the issue to our Customer Service team on the <strong>same day</strong> of receipt. The request will be processed only after verification by the merchant.
        </li>
        <li>
          If the received product does not match the description or your expectations, please contact our Customer Service team within the <strong>same day</strong> of receipt. The issue will be reviewed, and an appropriate resolution will be provided.
        </li>
        <li>
          For products that come with manufacturer warranties, we recommend contacting the manufacturer directly for faster assistance and resolution.
        </li>
        <li>
          If a refund is approved by <strong>FT DIGITAL SOLUTIONS</strong>, the processing time is typically <strong>9 to 15 business days</strong> to credit the amount back to the customers original payment method.
        </li>
      </ul>

      <p className="text-gray-600">
        If you have any questions or need assistance, please reach out to our Customer Service team.
      </p>
    </div>
  );
}
