export default function CustomerCare() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-40 text-zinc-900 dark:text-zinc-100">
      <h1 className="text-4xl font-semibold mb-6">Customer Care</h1>

      {/* Intro */}
      <p className="mb-10 text-zinc-600 dark:text-zinc-400 leading-relaxed">
        Our customer care team is here to assist you with product support,
        service requests, and general inquiries regarding Quantm Harmonics systems.
      </p>

      {/* Contact Info */}
      <div className="mb-12 space-y-2 text-sm">
        <p>
          📞 <span className="font-medium">Phone:</span>{" "}
          <a href="tel:+919505192555" className="underline">
            +91 95051 92555
          </a>
        </p>
        <p>
          ✉️ <span className="font-medium">Email:</span>{" "}
          <a
            href="mailto:priyanshur225@gmail.com"
            className="underline"
          >
            priyanshur225@gmail.com
          </a>
        </p>
      </div>

      {/* Contact Form */}
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Send Us a Query</h2>

        <form
          action="mailto:priyanshur225@gmail.com"
          method="POST"
          encType="text/plain"
          className="space-y-4"
        >
          <div>
            <label className="block text-sm mb-1">Your Name</label>
            <input
              type="text"
              name="Name"
              required
              className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Your Email</label>
            <input
              type="email"
              name="Email"
              required
              className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="Message"
              rows="5"
              required
              className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400"
              placeholder="Write your query here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="rounded-lg bg-black px-6 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
