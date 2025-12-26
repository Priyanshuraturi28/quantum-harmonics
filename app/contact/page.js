"use client";

import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [emailError, setEmailError] = useState("");

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setEmailError("");

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setStatus("sending");

    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("_replyto", email); // REQUIRED
    data.append("message", message);
    data.append("_subject", "New Contact Enquiry – Quantum Harmonics");
    data.append("source", "Contact Page");

    try {
      const res = await fetch("https://formspree.io/f/xwvkplpw", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
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
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-zinc-50">

      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur dark:bg-black/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-semibold tracking-wide">
            Quantum Harmonics
          </h1>
          <nav className="hidden gap-8 text-sm md:flex">
            <Link href="/">Home</Link>
            <Link href="/explore">Explore</Link>
            <Link href="/about">Our History</Link>
            <Link href="/contact" className="text-zinc-900 dark:text-white">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* CONTACT SECTION */}
      <section className="relative pt-40 pb-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-zinc-100/60 to-white dark:from-zinc-900/40 dark:to-black" />

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 md:grid-cols-2">

            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
                Let’s connect <br /> and talk sound.
              </h2>

              <p className="mt-6 max-w-md text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Whether it’s product inquiries, collaborations, or advanced
                audio discussions, our team is ready to engage.
              </p>

              <div className="mt-10 space-y-4 text-sm">
                <p>
                  <span className="block font-medium text-zinc-900 dark:text-white">
                    Email
                  </span>
                  quantumharmonics@gmail.com
                </p>
                <p>
                  <span className="block font-medium text-zinc-900 dark:text-white">
                    Location
                  </span>
                  Noida, Uttar Pradesh, India
                </p>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">

              {status !== "success" ? (
                <form onSubmit={handleSubmit} className="space-y-5">

                  <div>
                    <label className="mb-1 block text-xs uppercase tracking-wide text-zinc-500">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      className="w-full rounded-lg border px-4 py-3 text-sm
                                 focus:outline-none focus:ring-1 focus:ring-zinc-400
                                 dark:border-zinc-700 dark:bg-zinc-900"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs uppercase tracking-wide text-zinc-500">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className={`w-full rounded-lg border px-4 py-3 text-sm
                        focus:outline-none focus:ring-1
                        ${
                          emailError
                            ? "border-red-400 focus:ring-red-400"
                            : "focus:ring-zinc-400 dark:border-zinc-700"
                        } dark:bg-zinc-900`}
                    />
                    {emailError && (
                      <p className="mt-1 text-xs text-red-500">{emailError}</p>
                    )}
                  </div>

                  <div>
                    <label className="mb-1 block text-xs uppercase tracking-wide text-zinc-500">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us what you’d like to discuss…"
                      className="w-full rounded-lg border px-4 py-3 text-sm
                                 focus:outline-none focus:ring-1 focus:ring-zinc-400
                                 dark:border-zinc-700 dark:bg-zinc-900"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full rounded-full bg-black py-3 text-sm font-medium text-white
                               hover:bg-zinc-800 disabled:opacity-50
                               dark:bg-white dark:text-black"
                  >
                    {status === "sending" ? "Sending…" : "Send Enquiry"}
                  </button>

                  {status === "error" && (
                    <p className="text-center text-sm text-red-500">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              ) : (
                /* SUCCESS STATE */
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium">
                    Enquiry received
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    Thank you for contacting Quantum Harmonics.
                    Our team will respond shortly.
                  </p>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
