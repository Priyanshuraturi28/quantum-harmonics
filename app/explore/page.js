"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Explore() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const products = [
    {
      name: "Quantum Reference Tower",
      image: "/img17.jpeg",
      summary: "The foundation of a true high-end listening experience.",
      details: `
Quantum Reference Tower represents the core philosophy of Quantum Harmonics: absolute fidelity without compromise.

Every frequency arrives in perfect timing and balance. Cabinet engineering minimizes resonance, allowing pure driver performance.

The result is an open, stable, three-dimensional soundstage that feels emotionally real.
`,
    },
    {
      name: "Quantum Arc One",
      image: "/img20.jpeg",
      summary: "Cinematic sound refined for modern living spaces.",
      details: `
Quantum Arc One balances clarity, spatial precision, and tonal realism.

Voices remain natural, bass stays controlled, and spatial processing enhances immersion without exaggeration.

Designed to blend seamlessly into modern interiors.
`,
    },
    {
      name: "Quantum Air Bookshelf",
      image: "/img15.jpeg",
      summary: "Compact design. Serious acoustic performance.",
      details: `
Quantum Air Bookshelf delivers transparency and balance in a compact form.

Optimized driver alignment preserves phase coherence and tonal accuracy.

Ideal for studios, desks, and near-field listening.
`,
    },
    {
      name: "Quantum Pulse Sub",
      image: "/img16.jpeg",
      summary: "Controlled bass that completes the system.",
      details: `
Quantum Pulse Sub focuses on speed, control, and integration.

Bass is tight, textured, and rhythmically precise — never overpowering.

Designed to disappear sonically while extending scale.
`,
    },
  ];

  return (
    <div className="min-h-screen bg-black px-5 py-28 text-white">
      <div className="mx-auto max-w-7xl space-y-32">

        {products.map((product, index) => {
          const isOpen = openIndex === index;
          const reverse = index % 2 !== 0;

          return (
            <section
              key={product.name}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
            >
              {/* IMAGE — CLICKABLE */}
              <motion.div
                className={`order-1 cursor-pointer ${
                  reverse ? "md:order-2" : "md:order-1"
                }`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                onClick={() => toggle(index)}
                animate={{
                  scale: isOpen ? 1.05 : 1,
                }}
              >
                <motion.div
                  className="overflow-hidden rounded-3xl"
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={1000}
                    height={700}
                    className="w-full object-cover"
                  />
                </motion.div>
              </motion.div>

              {/* TEXT */}
              <motion.div
                className={`order-2 ${
                  reverse ? "md:order-1" : "md:order-2"
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                  {product.name}
                </h2>

                <p className="mt-4 md:mt-6 max-w-xl text-base md:text-lg text-zinc-300 leading-relaxed">
                  {product.summary}
                </p>

                {/* BUTTON */}
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={() => toggle(index)}
                  className="mt-8 inline-flex items-center gap-2 border border-white/80 px-7 py-4 text-xs tracking-widest uppercase transition hover:bg-white hover:text-black"
                >
                  {isOpen ? "Read less" : "Read more"}
                </motion.button>

                {/* DETAILS */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="mt-8 max-w-xl whitespace-pre-line text-sm leading-relaxed text-zinc-300 overflow-hidden"
                    >
                      {product.details}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </section>
          );
        })}

        {/* BACK */}
        <div className="text-center pt-12">
          <Link
            href="/"
            className="text-xs tracking-widest uppercase underline opacity-60 hover:opacity-100"
          >
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}
