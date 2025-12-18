import Link from "next/link";
import Image from "next/image";

export default function Footer() {
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
            <li>
              <Link href="/support/customer-care">Customer Care</Link>
            </li>
            <li>
              <Link href="/support/faq">FAQs</Link>
            </li>
            <li>
              <Link href="/support/product-registration">Product Registration</Link>
            </li>
            <li>
              <Link href="/support/warranty">Warranty</Link>
            </li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="mb-4 font-semibold text-zinc-900 dark:text-white">
            Company
          </h4>
          <ul className="space-y-2">
            <li>
              <Link href="/support/dealer">Dealer Network</Link>
            </li>
            <li>
              <Link href="/support/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/support/terms">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h4 className="mb-4 font-semibold text-zinc-900 dark:text-white">
            Newsletter
          </h4>
          <input
            type="email"
            placeholder="Your email"
            className="w-full rounded-md border border-zinc-300 bg-transparent px-4 py-3 focus:outline-none dark:border-zinc-700"
          />
        </div>

      </div>

      <p className="mt-16 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Quantm Harmonics. All rights reserved.
      </p>
    </footer>
  );
}
