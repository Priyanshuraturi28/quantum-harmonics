"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50">

      {/* ================= HEADER ================= */}
      <header className="fixed top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-black/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center">
            <Image src="/img6.png" alt="Quantm Harmonics Logo" width={160} height={40} priority />
          </Link>

          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <Link href="/">Home</Link>
            <Link href="/explore">Explore</Link>
            <Link href="/about">Our History</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/img3.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 flex min-h-screen items-center px-10">
          <div className="max-w-2xl text-white">
            <h1 className="mb-10 text-[4.5rem] font-black leading-[1.05]">
              Hear the Sound.<br />
              <span className="text-zinc-300">Feel the Tech.</span>
            </h1>

            <p className="mb-12 max-w-2xl text-[1.05rem] leading-[1.8] text-zinc-200">
              We design and manufacture some of the world’s most advanced high-end
              audio systems, driven by an unwavering passion for true musical realism.
            </p>

            <Link
              href="/about"
              className="inline-block rounded-md border border-white px-10 py-3 text-sm uppercase tracking-widest text-white transition hover:bg-white hover:text-black"
            >
              Read Our Story →
            </Link>
          </div>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="py-48 text-center bg-white dark:bg-black">
        <h2 className="text-6xl font-light leading-tight max-w-4xl mx-auto">
          Engineered with Purpose.
          <span className="block mt-8 text-xl text-zinc-500">
            Designed for Those Who Truly Listen.
          </span>
        </h2>
      </section>

      {/* ================= PRODUCT ================= */}
      <section className="mx-auto max-w-7xl grid md:grid-cols-2 gap-20 px-6 py-40 items-center">
        <div>
          <h3 className="mb-6 text-4xl font-semibold">
            Precision-Engineered Audio Systems
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Every Quantm Harmonics system is engineered for acoustic purity,
            emotional depth, and long-term listening satisfaction.
          </p>
        </div>

        <div className="flex justify-center">
          <Image src="/img1.jpeg" alt="High-end speaker" width={420} height={800} className="shadow-2xl" />
        </div>
      </section>

      {/* ================= IMMERSIVE SPACE ================= */}
      <section className="relative py-48 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/img2.jpeg" alt="Immersive space" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        <div className="relative z-10 max-w-3xl px-10 text-white">
          <h3 className="mb-6 text-4xl font-semibold">
            Sound That Shapes Space
          </h3>
          <p className="leading-relaxed text-zinc-200">
            From refined private listening rooms to professional and architectural
            installations, our systems enhance both sound and space.
          </p>
        </div>
      </section>

      {/* ================= LISTENING PHILOSOPHY ================= */}
      <section className="mx-auto max-w-5xl px-6 py-48 text-center">
        <h3 className="mb-8 text-4xl font-semibold">
          A Deeper Listening Philosophy
        </h3>
        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          We believe great sound is not measured by volume or specifications alone,
          but by how deeply it connects you to the music. Our systems are designed
          to disappear — leaving only emotion, space, and presence.
        </p>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="bg-zinc-100 dark:bg-zinc-950 py-48">
        <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-16 px-6 text-center">
          <div>
            <h4 className="mb-4 text-2xl font-semibold">Residential</h4>
            <p className="text-zinc-600 dark:text-zinc-400">
              Elevating private listening rooms and luxury living spaces.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-2xl font-semibold">Professional</h4>
            <p className="text-zinc-600 dark:text-zinc-400">
              Trusted by studios and creators who demand absolute accuracy.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-2xl font-semibold">Architectural</h4>
            <p className="text-zinc-600 dark:text-zinc-400">
              Seamlessly integrated audio for modern architectural environments.
            </p>
          </div>
        </div>
      </section>

      {/* ================= ENGINEERING ================= */}
      <section className="mx-auto max-w-7xl grid md:grid-cols-2 gap-20 px-6 py-40 items-center">
        <div className="flex justify-center">
          <Image src="/img7.jpeg" alt="Engineering detail" width={520} height={380} className="rounded-lg shadow-xl" />
        </div>

        <div>
          <h3 className="mb-6 text-4xl font-semibold">
            Where Engineering Meets Emotion
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Advanced materials, precise tuning, and deep acoustic research
            converge so technology disappears — leaving only music.
          </p>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t bg-zinc-100 dark:bg-zinc-950 py-28">
        <div className="mx-auto max-w-7xl grid md:grid-cols-4 gap-12 px-6 text-sm text-zinc-600 dark:text-zinc-400">

          <div>
            <Image src="/img6.png" alt="Logo" width={140} height={36} />
            <p className="mt-4">
              Quantm Harmonics Pvt. Ltd.<br />
              Sector 62, Noida<br />
              Uttar Pradesh, India
            </p>
            <p className="mt-3">
              Phone: +91 98765 43210<br />
              Email: contact@quantmharmonics.com
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Newsletter</h4>
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-md border border-zinc-300 bg-transparent px-4 py-3 focus:outline-none"
            />
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Follow Us</h4>
            <ul className="space-y-2">
              <li>Instagram</li>
              <li>Twitter / X</li>
              <li>YouTube</li>
              <li>TikTok</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Support</h4>
            <ul className="space-y-2">
              <li>Customer Care</li>
              <li>Warranty</li>
              <li>FAQs</li>
              <li>Dealer Network</li>
            </ul>
          </div>

        </div>

        <p className="mt-20 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Quantm Harmonics. Engineered for true listening.
        </p>
      </footer>

    </div>
  );
}
