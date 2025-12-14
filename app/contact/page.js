import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-zinc-50">

      {/* NAVBAR */}
      <header className="fixed top-0 w-full border-b bg-white/80 backdrop-blur dark:bg-black/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-semibold">Quantum Harmonics</h1>

          <nav className="hidden gap-8 md:flex">
            <Link href="/">Home</Link>
            <Link href="/explore">Explore</Link>
            <Link href="/about">Our History</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      {/* CONTACT SECTION */}
      <section className="flex min-h-screen items-center justify-center px-6 pt-32">
        <div className="w-full max-w-xl">
          <h2 className="mb-6 text-center text-4xl font-semibold">
            Contact Us
          </h2>

          <p className="mb-10 text-center text-zinc-600 dark:text-zinc-400">
            Reach out for product inquiries, partnerships, or technical discussions.
          </p>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="rounded-lg border px-4 py-3 dark:border-zinc-700 dark:bg-zinc-900"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="rounded-lg border px-4 py-3 dark:border-zinc-700 dark:bg-zinc-900"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="rounded-lg border px-4 py-3 dark:border-zinc-700 dark:bg-zinc-900"
            />
            <button
              type="submit"
              className="rounded-full bg-black py-3 text-white hover:bg-zinc-800 dark:bg-white dark:text-black"
            >
              Send Enquiry
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-zinc-500">
            Or email us directly at{" "}
            <strong>quantumharmonics@gmail.com</strong>
          </p>
        </div>
      </section>

    </div>
  );
}
