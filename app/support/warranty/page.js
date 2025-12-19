export default function WarrantyPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-40 text-zinc-900 dark:text-zinc-100">
      <h1 className="mb-4 text-4xl font-semibold">
        Warranty Policy
      </h1>

      <p className="mb-10 text-sm text-zinc-600 dark:text-zinc-400">
        Updated: 01/01/2025
      </p>

      {/* Company Info */}
      <section className="mb-12 space-y-2 text-sm">
        <p className="font-medium">
          Quantm Harmonics Private Limited
        </p>
        <p>
          204 Shibas Glen, Kapadia Lane,<br />
          Somajiguda, Hyderabad – 500082, India
        </p>
        <p>
          Phone: +91 95051 92555
        </p>
      </section>

      {/* Introduction */}
      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-semibold">Introduction</h2>
        <p>
          Quantm Harmonics designs and manufactures premium-class audio systems
          intended for high-fidelity music reproduction. The materials used,
          manufacturing processes, and final assembly are carried out with
          uncompromising quality standards.
        </p>
        <p>
          Warranty support, spare parts availability, and customer service are
          considered equally important as product performance and design.
        </p>
      </section>

      {/* Standard Warranty */}
      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-semibold">Standard Warranty</h2>
        <p>
          Quantm Harmonics warrants its products against defects in materials,
          technical components, or workmanship in accordance with applicable
          Indian consumer protection laws.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Standard warranty period is <strong>24 months</strong> from the
            original date of purchase by the end customer from an authorised
            Quantm Harmonics dealer.
          </li>
          <li>
            Custom Install products may be offered with extended or limited
            lifetime warranty depending on product category.
          </li>
          <li>
            Demo or display models carry a minimum warranty of
            <strong> 24 months</strong> from the date of purchase.
          </li>
        </ul>
      </section>

      {/* Extended Warranty */}
      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-semibold">Extended Warranty</h2>
        <p>
          Quantm Harmonics may offer extended warranty coverage on selected
          products as part of quality assurance initiatives.
        </p>

        <p>
          Extended warranty benefits apply only to products purchased through
          authorised dealers and registered within the prescribed registration
          period (where applicable).
        </p>

        <h3 className="font-semibold mt-4">Coverage by Product Category</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Home Audio – Passive Components:</strong> Up to
            <strong> 8 years</strong> warranty on drivers and crossover
            components.
          </li>
          <li>
            <strong>Home Audio – Active / Electronic Components:</strong>
            Up to <strong>3 years</strong> warranty on amplifier and control
            electronics.
          </li>
          <li>
            <strong>Professional Audio:</strong> Drivers up to
            <strong> 5 years</strong>, non-driver components up to
            <strong> 3 years</strong>.
          </li>
        </ul>

        <p className="text-sm text-zinc-500">
          Extended warranty is not applicable to demo units unless explicitly
          stated.
        </p>
      </section>

      {/* Warranty Limitations */}
      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-semibold">Warranty Limitations</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Normal wear and tear</li>
          <li>Mechanical or accidental damage</li>
          <li>Electrical overload, misuse, or negligence</li>
          <li>Unauthorised modification or repair</li>
          <li>Products with removed or altered serial numbers</li>
          <li>Accessories such as cables, mounts, batteries, or cosmetic parts</li>
        </ul>

        <p>
          Warranty coverage is valid only for products sold by authorised
          Quantm Harmonics dealers and is limited to the country of purchase.
        </p>
      </section>

      {/* Warranty Handling */}
      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-semibold">Warranty Responsibility</h2>
        <p>
          Any warranty claim must be initiated through an authorised
          Quantm Harmonics dealer. Repairs may be carried out by the dealer or
          the national distributor.
        </p>
        <p>
          Quantm Harmonics reserves the right to repair, replace with an
          equivalent product, or refund the purchase price if repair is not
          feasible.
        </p>
      </section>

      {/* Liability */}
      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
        <p>
          Quantm Harmonics’ liability shall not exceed the actual purchase price
          paid for the product.
        </p>
        <p>
          Under no circumstances shall Quantm Harmonics be liable for indirect,
          incidental, consequential, or special damages including loss of use,
          economic loss, or personal injury arising from product use.
        </p>
      </section>

      {/* Legal Rights */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Legal Rights</h2>
        <p>
          This warranty grants specific legal rights to the consumer, which may
          vary depending on jurisdiction. Certain limitations may not apply
          where prohibited by law.
        </p>
        <p className="text-sm text-zinc-500">
          Quantm Harmonics reserves the right to amend this warranty policy
          without prior notice.
        </p>
      </section>
    </div>
  );
}
