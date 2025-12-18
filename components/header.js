"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-black/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/img6.png"
              alt="Quantm Harmonics Logo"
              width={160}
              height={40}
              priority
            />
          </Link>

          {/* DESKTOP NAV (UNCHANGED) */}
          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <Link href="/">Home</Link>
            <Link href="/explore">Explore</Link>
            <Link href="/about">Our History</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-2xl"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* ================= MOBILE OVERLAY ================= */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ================= MOBILE SIDE NAV ================= */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white dark:bg-black border-l border-zinc-200 dark:border-zinc-800 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
          <span className="font-semibold text-lg">Menu</span>
          <button
            onClick={() => setOpen(false)}
            className="text-2xl"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-6 px-6 py-8 text-lg">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/explore" onClick={() => setOpen(false)}>Explore</Link>
          <Link href="/about" onClick={() => setOpen(false)}>Our History</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

          <hr className="my-4 border-zinc-300 dark:border-zinc-700" />

          {/* OPTIONAL SUPPORT LINKS */}
          <Link href="/support/customer-care" onClick={() => setOpen(false)}>
            Customer Care
          </Link>
          <Link href="/support/faq" onClick={() => setOpen(false)}>
            FAQs
          </Link>
        </nav>
      </aside>
    </>
  );
}
