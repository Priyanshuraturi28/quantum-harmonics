export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-40 text-zinc-900 dark:text-zinc-100">
      <h1 className="mb-8 text-4xl font-semibold">Terms & Conditions</h1>

      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        Last updated: {new Date().getFullYear()}
      </p>

      <section className="space-y-6 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        <p>
          These Terms & Conditions ("Terms") govern your access to and use of the
          website, products, and services operated by <strong>Quantm Harmonics
          Private Limited</strong> ("Quantm Harmonics", "we", "us", or "our").
          By accessing or using our website or purchasing our products, you agree
          to be bound by these Terms.
        </p>

        <h2 className="text-xl font-semibold">1. Company Information</h2>
        <p>
          <strong>Quantm Harmonics Private Limited</strong><br />
          204 Shibas Glen, Kapadia Lane,<br />
          Somajiguda, Hyderabad – 500082<br />
          Phone: +91 95051 92555
        </p>

        <h2 className="text-xl font-semibold">2. Eligibility</h2>
        <p>
          You must be at least 18 years old to use our services or make a purchase.
          If you are under 18, you may only use our services with the consent and
          supervision of a parent or legal guardian.
        </p>

        <h2 className="text-xl font-semibold">3. Products & Services</h2>
        <p>
          Quantm Harmonics designs, manufactures, and distributes high-end audio
          products and related services. All product descriptions, pricing, and
          availability are subject to change without prior notice.
        </p>

        <h2 className="text-xl font-semibold">4. Orders & Payments</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>All orders are subject to acceptance and availability.</li>
          <li>We reserve the right to refuse or cancel any order.</li>
          <li>Payments must be made through approved payment methods.</li>
          <li>Prices are listed in INR unless stated otherwise.</li>
        </ul>

        <h2 className="text-xl font-semibold">5. Shipping & Delivery</h2>
        <p>
          Delivery timelines are estimates and may vary due to logistics,
          location, or unforeseen circumstances. Quantm Harmonics is not
          responsible for delays beyond its control.
        </p>

        <h2 className="text-xl font-semibold">6. Returns & Replacements</h2>
        <p>
          Returns and replacements are governed by our Return & Replacement Policy.
          Please review that policy before making a purchase.
        </p>

        <h2 className="text-xl font-semibold">7. Intellectual Property</h2>
        <p>
          All content on this website, including text, graphics, logos, images,
          audio, and software, is the property of Quantm Harmonics Private Limited
          and is protected under applicable intellectual property laws. You may
          not copy, reproduce, distribute, or use any content without prior
          written permission.
        </p>

        <h2 className="text-xl font-semibold">8. User Conduct</h2>
        <p>
          You agree not to misuse the website or engage in activities that are
          unlawful, harmful, fraudulent, defamatory, or infringe upon the rights
          of others.
        </p>

        <h2 className="text-xl font-semibold">9. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Quantm Harmonics shall not be
          liable for any indirect, incidental, consequential, or special damages
          arising out of your use of our website or products.
        </p>

        <h2 className="text-xl font-semibold">10. Disclaimer</h2>
        <p>
          Our products and services are provided on an "as is" and "as available"
          basis. We do not guarantee uninterrupted or error-free operation of the
          website.
        </p>

        <h2 className="text-xl font-semibold">11. Privacy</h2>
        <p>
          Your use of our services is also governed by our Privacy Policy, which
          explains how we collect and use your personal information.
        </p>

        <h2 className="text-xl font-semibold">12. Governing Law & Jurisdiction</h2>
        <p>
          These Terms shall be governed by and interpreted in accordance with the
          laws of India. Any disputes shall be subject to the exclusive
          jurisdiction of the courts located in Hyderabad, Telangana.
        </p>

        <h2 className="text-xl font-semibold">13. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. Updated Terms
          will be posted on this page and will become effective immediately upon
          posting.
        </p>

        <h2 className="text-xl font-semibold">14. Contact Us</h2>
        <p>
          If you have any questions regarding these Terms & Conditions, please
          contact us at:
        </p>

        <p className="mt-2">
          <strong>Quantm Harmonics Private Limited</strong><br />
          Phone: +91 95051 92555
        </p>
      </section>
    </div>
  );
}
