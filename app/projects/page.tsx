"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export default function ProjectsPage() {
  return (
    <div className="bg-[#0f0f0f] text-white overflow-hidden">
      {/* ================= PROJECTS SHOWCASE ================= */}
      <section className="min-h-screen px-8 md:px-20 py-28">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, letterSpacing: "20px" }}
            whileInView={{ opacity: 1, letterSpacing: "2px" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-extrabold text-center"
          >
            Projects
          </motion.h1>

          <div className="h-[2px] w-24 bg-[#39FF14] mx-auto mt-6 mb-20" />

          {/* Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-14"
          >
            {/* PROJECT 1 */}
            <motion.div variants={cardVariant} className="group">
              <div className="relative h-64 w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/Potfolio_img.jpg"
                  alt="Portfolio Project"
                  fill
                  className=" grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-700"
                />
              </div>

              <h3 className="text-xl font-semibold mt-6">
                Developer Portfolio Platform
              </h3>

              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                A thoughtfully designed portfolio built using Next.js and
                Tailwind CSS, enhanced with Framer Motion for subtle, smooth
                interactions. Optimized for performance, responsiveness, and a
                polished user experience.
              </p>

              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-[#39FF14] font-semibold hover:underline"
              >
                View Project →
              </Link>
            </motion.div>

            {/* PROJECT 2 */}
            <motion.div variants={cardVariant} className="group">
              <div className="relative h-64 w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/E_commerce_img.jpg"
                  alt="E-Commerce"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-700"
                />
              </div>

              <h3 className="text-xl font-semibold mt-6">
                E-Commerce Web Application (Prototype)
              </h3>

              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                A full-stack e-commerce prototype featuring user authentication,
                product management, cart functionality, and a secure backend
                built with Node.js and MySQL. Designed to demonstrate scalable
                architecture and real-world commerce workflows.
              </p>

              <Link
                href="https://ecommerce-mern-six-flax.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-[#39FF14] font-semibold hover:underline"
              >
                View Project →
              </Link>
            </motion.div>

            {/* PROJECT 3 */}
            <motion.div variants={cardVariant} className="group">
              <div className="relative h-64 w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/Animation_img.jpg"
                  alt="Admin Dashboard"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-700"
                />
              </div>

              <h3 className="text-xl font-semibold mt-6">
                UI Text Animation Showcase
              </h3>

              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                A curated collection of 20+ modern text animations designed for
                engaging landing screens. Built to enhance visual storytelling,
                improve user engagement, and create dynamic first impressions
                for web applications.
              </p>

              <Link
                href="https://react-text-motion-studio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-[#39FF14] font-semibold hover:underline"
              >
                View Project →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= PROJECT PHILOSOPHY SECTION ================= */}
      <section className="min-h-screen px-8 md:px-20 py-28 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-extrabold">What I Build</h2>

            <div className="h-[2px] w-24 bg-[#39FF14] mt-6 mb-10" />

            <p className="text-gray-400 leading-relaxed mb-6">
              I design and develop scalable full-stack applications with
              performance-first architecture. My focus is on clean code, modular
              structure, and production-ready systems.
            </p>

            <p className="text-gray-400 leading-relaxed">
              From frontend UI systems using Next.js and React to backend logic
              with Node.js and MySQL, I build complete solutions that are
              reliable, optimized, and recruiter-ready.
            </p>
          </motion.div>

          {/* RIGHT VISUAL GRID */}
          <motion.div
            initial={{ opacity: 0, rotate: -3 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="h-40 rounded-xl overflow-hidden group">
              <img
                src="/images/built1.jpg"
                alt="Frontend UI"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            <div className="h-40 rounded-xl overflow-hidden group">
              <img
                src="/images/built2.jpg"
                alt="Frontend UI"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            <div className="h-40 rounded-xl overflow-hidden group">
              <img
                src="/images/built3.jpg"
                alt="Frontend UI"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            <div className="h-40 rounded-xl overflow-hidden group">
              <img
                src="/images/built4.jpg"
                alt="Frontend UI"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
