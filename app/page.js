"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [activeProduct, setActiveProduct] = useState(null);

  return (
    <div className="bg-black text-zinc-100 overflow-x-hidden">

{/* ================= HERO ================= */}
<section className="relative min-h-screen flex items-center overflow-hidden">

  {/* ===== BACKGROUND IMAGE ===== */}
  <div className="absolute inset-0 flex justify-center">
    <div className="relative w-full max-w-[1600px] h-full">
      <Image
        src="/img36.jpeg"
        alt="Studio sound environment"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 1600px"
        className="object-cover object-center"
      />
    </div>

    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_55%)]" />
  </div>

  {/* ===== CONTENT ===== */}
  <div className="relative z-10 px-6 max-w-7xl w-full">

    {/* TAGLINE */}
    <div className="relative mt-10 sm:mt-20 max-w-4xl">

      {/* Hear the Art */}
      <h1 className="leading-[0.95]">
        <span className="text-image-mask block text-[3.5rem] sm:text-[4.5rem] md:text-[6.5rem] lg:text-[7.5rem] font-extrabold tracking-tight">
          Hear the Art
        </span>
      </h1>

      {/* Feel the Tech — BELOW */}
      <span className="text-image-mask mt-3 sm:mt-5 block text-[2.6rem] sm:text-[3.2rem] md:text-[4.5rem] lg:text-[5rem] font-extrabold tracking-tight">
        Feel the Tech.
      </span>

    </div>

    {/* DESCRIPTION */}
    <p className="mt-12 sm:mt-16 max-w-2xl text-base md:text-lg leading-relaxed text-zinc-400">
      We design high-end audio systems shaped by decades of listening,
      experimentation, and an uncompromising respect for sound as truth.
    </p>

    {/* CTA */}
    <div className="mt-14 sm:mt-18 flex flex-col sm:flex-row gap-6">
      <Link
        href="/about"
        className="px-12 py-3 border border-zinc-500 text-sm uppercase tracking-[0.25em] hover:bg-white hover:text-black transition"
      >
        Our History
      </Link>

      <Link
        href="/explore"
        className="px-12 py-3 text-sm uppercase tracking-[0.25em] text-zinc-400 hover:text-white transition"
      >
        Explore Systems →
      </Link>
    </div>

  </div>
</section>




      {/* ================= PHILOSOPHY ================= */}
      <section className="relative py-28 sm:py-44 overflow-hidden bg-black">

        <motion.div
          aria-hidden
          initial={{ rotate: -2, scale: 1.05 }}
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
          className="absolute inset-0"
        >
          <Image
            src="/img7.jpeg"
            alt="Sound philosophy background"
            fill
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full bg-white/5 blur-[140px]" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          variants={fadeUp}
          className="relative z-10 mx-auto max-w-4xl px-6 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light mb-10 sm:mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 via-white to-zinc-200 bg-[length:200%_100%] animate-[shine_6s_linear_infinite]">
              Designed for Those Who Truly Listen
            </span>
          </h2>

          <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
            Great sound is not defined by volume or specification.
            It is defined by <span className="text-zinc-200">restraint</span>,{" "}
            <span className="text-zinc-200">balance</span>, and the emotional weight
            carried between notes.
          </p>
        </motion.div>
      </section>

      {/* ================= PRODUCT FOCUS ================= */}
      <section className="py-28 sm:py-44 bg-zinc-950">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-20 sm:gap-24 px-6 items-center">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={fadeUp}
          >
            <h3 className="text-2xl md:text-4xl font-light mb-10">
              Precision-Engineered Audio Systems
            </h3>

            <p className="text-zinc-400 leading-relaxed mb-8">
              Every Quantm Harmonics system is engineered to disappear —
              removing itself from the experience so music can exist
              without interference.
            </p>

            <p className="italic text-zinc-500">
              “If you notice the speaker,” the engineers say,
              “we haven’t finished our work.”
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            variants={fadeUp}
            className="relative h-[300px] sm:h-[420px] md:h-[520px]"
          >
            <Image
              src="/img3.jpeg"
              alt="High-end speaker system"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>

        </div>
      </section>

      {/* ================= IMMERSIVE SPACE ================= */}
      <section className="relative py-32 sm:py-52">
        <div className="absolute inset-0">
          <Image
            src="/img2.jpeg"
            alt="Immersive sound environment"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
          variants={fadeUp}
          className="relative z-10 max-w-4xl px-6"
        >
          <h3 className="text-3xl md:text-5xl font-light mb-12">
            Sound That Shapes Space
          </h3>

          <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
            From intimate listening rooms to architectural installations,
            our systems adapt to the space — respecting its acoustics
            rather than overpowering it.
          </p>
        </motion.div>
      </section>

      {/* ================= PRODUCT SHOWCASE ================= */}
      <section className="py-28 sm:py-52 bg-black px-6">
        <div className="max-w-7xl mx-auto text-center mb-20 sm:mb-24">
          <h2 className="text-3xl md:text-5xl font-light">
            QH ∞ Reference Series
          </h2>
          <p className="mt-8 sm:mt-10 max-w-3xl mx-auto text-zinc-400">
            Three interpretations of the same philosophy — precision, restraint,
            and respect for sound.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto flex gap-8 sm:gap-14 justify-start sm:justify-center items-center overflow-x-auto sm:overflow-visible pb-6">
          {[
            {
              id: "one",
              img: "/img15.jpeg",
              name: "QH ∞ One",
            },
            {
              id: "compact",
              img: "/img16.jpeg",
              name: "QH ∞ Compact",
            },
            {
              id: "studio",
              img: "/img17.jpeg",
              name: "QH ∞ Studio",
            },
          ].map((product) => {
            const isActive = activeProduct === product.id;
            const isHidden = activeProduct && !isActive;

            return (
              <div
                key={product.id}
                className={`relative transition-all duration-700 ease-in-out
                  ${isActive ? "scale-100" : "scale-95"}
                  ${isHidden ? "opacity-0 translate-x-32 pointer-events-none" : "opacity-100"}
                `}
              >
                <div className="relative w-[260px] h-[360px] sm:w-[300px] sm:h-[420px]">
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>

                {!activeProduct && (
                  <button
                    onClick={() => setActiveProduct(product.id)}
                    className="absolute inset-0 m-auto h-14 w-14 rounded-full
                               border border-zinc-400 text-[10px]
                               uppercase tracking-widest
                               bg-black/70 sm:bg-black/60
                               sm:hover:bg-white sm:hover:text-black
                               transition"
                  >
                    See
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {activeProduct && (
          <div className="mt-20 sm:mt-32 max-w-[90%] sm:max-w-4xl mx-auto bg-zinc-950 border border-zinc-800 rounded-xl px-6 sm:px-12 py-10 sm:py-14">
            <h3 className="text-2xl font-light mb-6">
              {activeProduct === "one" && "QH ∞ One"}
              {activeProduct === "compact" && "QH ∞ Compact"}
              {activeProduct === "studio" && "QH ∞ Studio"}
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              Designed with authority, neutrality, and long-form listening in mind.
              Each system reflects a different interpretation of the same philosophy.
            </p>

            <button
              onClick={() => setActiveProduct(null)}
              className="mt-10 text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition"
            >
              Close
            </button>
          </div>
        )}
      </section>
{/* ================= USE CASES (ENHANCED) ================= */}
<section className="relative bg-zinc-950 py-28 sm:py-44 overflow-hidden">

  {/* subtle background texture */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_65%)]" />

  <div className="relative mx-auto max-w-7xl px-6">
    
    {/* section heading */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={fadeUp}
      className="text-center max-w-3xl mx-auto mb-20 sm:mb-28"
    >
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-light mb-6">
        Designed for Every Listening Context
      </h3>
      <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
        Our systems adapt — not dominate — shaping themselves to the way sound
        is meant to be experienced in each environment.
      </p>
    </motion.div>

    {/* cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-14">
      {[
        {
          title: "Residential",
          text:
            "Private listening rooms crafted for long, uninterrupted sessions where fatigue disappears and immersion remains.",
        },
        {
          title: "Professional",
          text:
            "Studios and creators who rely on absolute tonal honesty and trust every decision they hear.",
        },
        {
          title: "Architectural",
          text:
            "Integrated systems that disappear into modern spaces while preserving clarity, balance, and intent.",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: i * 0.15 }}
          variants={fadeUp}
          className="
            group relative rounded-2xl border border-zinc-800
            bg-zinc-900/40 backdrop-blur-sm
            px-8 py-10 sm:px-10 sm:py-12
            transition-all duration-500
            hover:border-zinc-600
            hover:-translate-y-2
          "
        >
          {/* hover glow */}
          <div
            className="
              pointer-events-none absolute inset-0 rounded-2xl
              opacity-0 group-hover:opacity-100
              transition duration-500
              bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]
            "
          />

          {/* index number (luxury detail) */}
          <div className="text-xs tracking-widest text-zinc-500 mb-6">
            0{i + 1}
          </div>

          <h4 className="text-lg sm:text-xl md:text-2xl font-light mb-4">
            {item.title}
          </h4>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {item.text}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* ================= CLOSING ================= */}
      <section className="px-6 py-28 sm:py-44 text-center bg-zinc-950">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={fadeUp}
          className="mx-auto max-w-4xl"
        >
          <p className="text-zinc-400 leading-relaxed text-base md:text-lg mb-12 sm:mb-16">
            Technology evolves. Sound remains human.  
            Quantm Harmonics exists to protect that connection.
          </p>

          <Link
            href="/explore"
            className="inline-block px-12 py-4 border border-zinc-500 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition"
          >
            Explore Our Systems
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
