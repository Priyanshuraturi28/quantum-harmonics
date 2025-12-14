import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50">

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

      {/* HERO */}
      <section className="flex min-h-screen items-center justify-center px-6 pt-32">
        <div className="max-w-4xl text-center">
          <h2 className="mb-6 text-5xl font-bold">
            Hear the Art. <span className="text-zinc-500">Feel the Tech.</span>
          </h2>
          <p className="mb-10 text-lg text-zinc-600 dark:text-zinc-400">
            High-end, non-portable audio systems engineered for immersive
            listening experiences.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/explore"
              className="rounded-full bg-black px-8 py-3 text-white"
            >
              Explore Products
            </Link>
            <Link
              href="/about"
              className="rounded-full border px-8 py-3"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
