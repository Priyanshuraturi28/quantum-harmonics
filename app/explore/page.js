import Link from "next/link";

export default function Explore() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-zinc-50 px-6 py-32">

      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-4xl font-semibold">
          Explore Our Systems
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border p-6">
            <h3 className="mb-3 text-xl font-medium">Quantum Arc One</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Flagship soundbar delivering cinematic clarity and spatial depth.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="mb-3 text-xl font-medium">Quantum Reference Tower</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Floor-standing speakers for uncompromised stereo realism.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="mb-3 text-xl font-medium">Quantum Studio Monitor</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Precision monitors for professional and critical listening.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/" className="text-sm underline">
            ← Back to Home
          </Link>
        </div>
      </div>

    </div>
  );
}
