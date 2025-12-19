"use client";

import { useState } from "react";

export default function WarrantyPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-40 text-zinc-900 dark:text-zinc-100">
      {/* Header */}
      <h1 className="text-4xl font-semibold mb-4">Product Registration & Warranty</h1>
      <p className="mb-10 text-zinc-600 dark:text-zinc-400">
        Congratulations on your new Quantm Harmonics product.
      </p>

      {/* Extended Warranty Info */}
      <section className="mb-16 space-y-4">
        <h2 className="text-2xl font-semibold">Extended Warranty</h2>
        <p>
          Quantm Harmonics offers an extended warranty on selected home audio,
          professional audio, and custom installation products. By registering
          your product, you benefit from enhanced quality assurance and extended
          service coverage.
        </p>
        <p>
          All Quantm Harmonics systems are designed and assembled under strict
          quality-controlled conditions using high-grade components. The
          warranty is transferable, provided a valid proof of purchase is
          available.
        </p>
        <p className="text-sm text-zinc-500">
          Product registration must be completed within <strong>12 months</strong>{" "}
          from the date of purchase.
        </p>
      </section>

      {/* Registration Form */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">Product Registration</h2>

        {submitted ? (
          <p className="text-green-600 dark:text-green-400">
            Thank you! Your product registration has been submitted successfully.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input required placeholder="Email *" className="input" />
            <input required placeholder="First Name *" className="input" />
            <input required placeholder="Last Name *" className="input" />
            <input required placeholder="Street Address *" className="input" />
            <input required placeholder="City *" className="input" />
            <input required placeholder="State / Region *" className="input" />
            <input required placeholder="Country *" className="input" />
            <input required placeholder="Country of Purchase *" className="input" />
            <input required type="date" placeholder="Date of Purchase *" className="input" />
            <input type="date" placeholder="Date of Birth" className="input" />
            <input required placeholder="Serial Number *" className="input md:col-span-2" />

            <div className="md:col-span-2">
              <label className="block text-sm mb-1">Upload Purchase Receipt *</label>
              <input type="file" required className="w-full text-sm" />
            </div>

            <div className="md:col-span-2 space-y-2 text-sm">
              <label className="flex items-start gap-2">
                <input type="checkbox" />
                <span>I agree to receive communications from Quantm Harmonics.</span>
              </label>

              <label className="flex items-start gap-2">
                <input type="checkbox" required />
                <span>
                  I agree to allow Quantm Harmonics to store and process my personal
                  data in accordance with the Privacy Policy.*
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="md:col-span-2 rounded-lg bg-black px-6 py-3 text-white hover:bg-zinc-800 dark:bg-white dark:text-black"
            >
              Register Product
            </button>
          </form>
        )}
      </section>

      {/* Warranty Information */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Warranty Information</h2>

        <h3 className="font-semibold">Warranty Period</h3>
        <p>
          Quantm Harmonics warrants its products against defects in materials and
          workmanship in accordance with applicable Indian consumer protection
          laws from the date of purchase.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Standard warranty: 24 months</li>
          <li>Extended warranty (registered products): up to 60–96 months*</li>
          <li>Electronic components: 24–36 months</li>
        </ul>

        <p className="text-sm text-zinc-500">
          *Extended warranty duration may vary by product category.
        </p>

        <h3 className="font-semibold">Warranty Limitations</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Normal wear and tear</li>
          <li>Accidental or physical damage</li>
          <li>Unauthorized modifications or repairs</li>
          <li>Misuse, electrical overload, or improper installation</li>
          <li>Products purchased from unauthorized dealers</li>
        </ul>

        <p>
          Accessories such as cables, batteries, mounts, and cosmetic parts are
          not covered under warranty unless explicitly stated.
        </p>
      </section>
    </div>
  );
}
