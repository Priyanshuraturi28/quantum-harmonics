"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <div className="bg-black text-zinc-100 overflow-hidden relative">

      {/* ================= OPENING ================= */}
      <section className="px-6 pt-44 pb-40 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={fadeUp}
          className="mx-auto max-w-5xl"
        >
          <h1 className="text-4xl md:text-6xl font-light tracking-tight">
            The Heritage of Sound
          </h1>

          <p className="mt-14 max-w-3xl mx-auto text-base md:text-lg leading-relaxed text-zinc-400">
            Quantm Harmonics was never designed to follow trends. It was shaped
            quietly — through listening, patience, and decades spent questioning
            what sound should feel like when technology disappears.
          </p>
        </motion.div>
      </section>

      {/* ================= TIMELINE SPINE (ALWAYS CENTER) ================= */}
      <div className="absolute top-[420px] bottom-0 left-1/2 w-px bg-zinc-800 -translate-x-1/2" />

      {/* ================= ORIGINS ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={fadeUp}
        className="relative py-40"
      >
        {/* DOT */}
        <div className="absolute left-1/2 top-24 w-3 h-3 bg-zinc-400 rounded-full -translate-x-1/2" />

        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-20 px-6 items-center">
          {/* TEXT */}
          <div className="md:pr-24 text-center md:text-right">
            <h2 className="text-2xl md:text-4xl font-light mb-10">
              Origins — The Engineers
            </h2>

            <p className="text-zinc-400 leading-relaxed mb-8">
              Quantm Harmonics was founded by three engineers — Mathew, Rohan,
              and Nirav — individuals shaped not by marketing decks, but by
              studios filled with cables, oscilloscopes, unfinished mixes,
              and long silences between notes.
            </p>

            <p className="text-zinc-400 leading-relaxed mb-8">
              Their careers spanned analog mastering rooms, early digital
              transitions, and countless listening sessions where progress
              was slow, deliberate, and earned.
            </p>

            <p className="italic text-zinc-500">
              “Truth reveals itself slowly.”
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative h-[300px] md:h-[480px]">
            <Image
              src="/img10.jpeg"
              alt="Early sound engineering"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </motion.section>

      {/* ================= PROCESS ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={fadeUp}
        className="relative py-44 bg-zinc-950"
      >
        {/* DOT */}
        <div className="absolute left-1/2 top-24 w-3 h-3 bg-zinc-400 rounded-full -translate-x-1/2" />

        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-20 px-6 items-center">
          {/* IMAGE */}
          <div className="relative h-[300px] md:h-[480px] order-2 md:order-1">
            <Image
              src="/img11.jpeg"
              alt="Audio research and tuning"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* TEXT */}
          <div className="md:pl-24 text-center md:text-left order-1 md:order-2">
            <h2 className="text-2xl md:text-4xl font-light mb-10">
              A Process Without Shortcuts
            </h2>

            <p className="text-zinc-400 leading-relaxed mb-8">
              The early years produced no finished products — only failures,
              notes, recalibrations, and discarded prototypes. Frequency
              responses were measured, then ignored.
            </p>

            <p className="text-zinc-400 leading-relaxed mb-8">
              Listening always came last — and mattered most.
            </p>

            <p className="italic text-zinc-500">
              “Ears make the final decision.”
            </p>
          </div>
        </div>
      </motion.section>

      {/* ================= SPACE ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={fadeUp}
        className="relative py-44"
      >
        {/* DOT */}
        <div className="absolute left-1/2 top-24 w-3 h-3 bg-zinc-400 rounded-full -translate-x-1/2" />

        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-20 px-6 items-center">
          {/* TEXT */}
          <div className="md:pr-24 text-center md:text-right">
            <h2 className="text-2xl md:text-4xl font-light mb-10">
              When Sound Meets Space
            </h2>

            <p className="text-zinc-400 leading-relaxed mb-8">
              As systems matured, their purpose expanded — from private
              listening rooms to automotive environments and professional
              studios.
            </p>

            <p className="text-zinc-400 leading-relaxed mb-8">
              Each space demanded restraint, adaptability, and respect for
              acoustics already present.
            </p>

            <p className="italic text-zinc-500">
              “A room tells you how it wants to sound.”
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative h-[300px] md:h-[480px]">
            <Image
              src="/img12.jpeg"
              alt="Architectural audio systems"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </motion.section>

      {/* ================= MODERN CULTURE ================= */}
      <section className="relative py-52">
        <div className="absolute inset-0">
          <Image
            src="/img13.jpeg"
            alt="Modern sound culture"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          variants={fadeUp}
          className="relative z-10 mx-auto max-w-4xl px-6 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-light mb-12">
            Heritage, Reinterpreted
          </h2>

          <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
            Today, Quantm Harmonics exists at the intersection of studio heritage
            and modern sound culture — where intention and emotion remain intact.
          </p>
        </motion.div>
      </section>

      {/* ================= MANIFESTO ================= */}
      <section className="bg-zinc-950 px-6 py-44 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={fadeUp}
          className="mx-auto max-w-4xl"
        >
          <p className="text-zinc-400 leading-relaxed text-base md:text-lg mb-12">
            Technology evolves. Formats change. Trends fade.  
            But the pursuit of honest sound remains.
          </p>

          <Link
            href="/"
            className="inline-block text-sm uppercase tracking-widest text-zinc-500 hover:text-white transition"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
