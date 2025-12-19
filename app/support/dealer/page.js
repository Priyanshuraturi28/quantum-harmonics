export default function DealerPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-40">
      <h1 className="text-4xl font-semibold mb-6">Dealer Network</h1>

      <p className="mb-10 text-zinc-600 dark:text-zinc-400">
        Find authorized Quantm Harmonics dealers here.
      </p>

      {/* Map Section */}
      <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
        <iframe
          title="Quantm Harmonics Location"
          src="https://www.google.com/maps?q=204%20Shibas%20Glen,%20Kapadia%20Lane,%20Somajiguda,%20Hyderabad%20500082&output=embed"
          width="100%"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        ></iframe>
      </div>

      {/* Address Info */}
      <div className="mt-6 text-sm text-zinc-600 dark:text-zinc-400">
        <p className="font-medium text-zinc-800 dark:text-zinc-200">
          Quantm Harmonics Private Limited
        </p>
        <p>
          204 Shibas Glen, Kapadia Lane,<br />
          Somajiguda, Hyderabad – 500082
        </p>
        <p className="mt-2">📞 +91 95051 92555</p>
      </div>
    </div>
  );
}
