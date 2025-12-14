import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50 px-6 py-32">

      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-4xl font-semibold">Our History</h2>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Quantum Harmonics was founded by veteran sound engineers with over
          three decades of experience in acoustics, signal processing, and
          high-fidelity system design. Our goal is to remove every barrier
          between the artist and the listener.
        </p>

        <div className="mt-16">
          <Link href="/" className="text-sm underline">
            ← Back to Home
          </Link>
        </div>
      </div>

    </div>
  );
}
