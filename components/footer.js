"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [emailError, setEmailError] = useState("");

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  async function handleSubscribe(e) {
    e.preventDefault();
    setEmailError("");

    const form = e.target;
    const email = form.email.value;

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setStatus("sending");

    const data = new FormData();
    data.append("email", email);
    data.append("type", "Newsletter Subscription");
    data.append("_subject", "New Newsletter Subscription - Quantum Harmonics");

    try {
      const res = await fetch("https://formspree.io/f/xwvkplpw", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <footer className="border-t bg-zinc-100 dark:bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl grid gap-12 px-6 text-sm text-zinc-600 dark:text-zinc-400 md:grid-cols-4">

        {/* BRAND */}
        <div>
          <Image
            src="/img6.png"
            alt="Quantm Harmonics Logo"
            width={140}
            height={36}
          />
          <p className="mt-4 leading-relaxed">
            Quantm Harmonics Pvt. Ltd.<br />
            Sector 62, Noida<br />
            Uttar Pradesh, India
          </p>
        </div>

        {/* SUPPORT */}
        <div>
          <h4 className="mb-4 font-semibold text-zinc-900 dark:text-white">
            Support
          </h4>
          <ul className="space-y-2">
            <li><Link href="/support/customer-care">Customer Care</Link></li>
            <li><Link href="/support/faq">FAQs</Link></li>
            <li><Link href="/support/product-registration">Product Registration</Link></li>
            <li><Link href="/support/warranty">Warranty</Link></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="mb-4 font-semibold text-zinc-900 dark:text-white">
            Company
          </h4>
          <ul className="space-y-2">
            <li><Link href="/support/dealer">Dealer Network</Link></li>
            <li><Link href="/support/privacy">Privacy Policy</Link></li>
            <li><Link href="/support/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h4 className="mb-4 font-semibold text-zinc-900 dark:text-white">
            Newsletter
          </h4>

          {status !== "success" ? (
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                className={`w-full rounded-md border bg-transparent px-4 py-3 text-sm
                  focus:outline-none focus:ring-1
                  ${
                    emailError
                      ? "border-red-400 focus:ring-red-400"
                      : "border-zinc-300 focus:ring-zinc-400 dark:border-zinc-700"
                  }`}
              />

              {emailError && (
                <p className="text-xs text-red-500">{emailError}</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-md bg-black px-4 py-3 text-sm font-medium text-white
                           hover:bg-zinc-800 transition disabled:opacity-50
                           dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              >
                {status === "sending" ? "Subscribing…" : "Subscribe"}
              </button>

              {status === "error" && (
                <p className="text-xs text-red-500">
                  Subscription failed. Please try again.
                </p>
              )}
            </form>
          ) : (
            /* ✅ Mature success */
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              You’re subscribed. Updates will arrive in your inbox.
            </p>
          )}
        </div>

      </div>

      <p className="mt-16 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Quantm Harmonics. All rights reserved.
      </p>
    </footer>
  );
}
