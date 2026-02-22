"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="h-[calc(100vh-80px)] mt-20 overflow-hidden relative bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row h-full">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full md:w-1/3 h-[60vh] md:h-screen overflow-hidden"
        >
          <Image
            src="/images/Aditiyan_image.png"
            alt="Mohana Aditiyan"
            fill
            priority
            style={{
              objectFit: "contain", // keeps full image visible
              objectPosition: "bottom", // adjust: top | center | bottom
            }}
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="md:w-1/2 flex items-center justify-center px-10 md:px-20">
          <div className="max-w-xl">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ duration: 1.2 }}
              className="h-[2px] bg-[#3b82f6] mb-6"
            />

            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-extrabold leading-tight"
            >
              Full Stack
              <br />
              Developer
            </motion.h2>

            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-6 text-gray-300 text-lg leading-relaxed"
            >
              I enjoy building scalable web applications that blend clean,
              modern UI with solid backend architecture using Next.js, React,
              Node.js, and MySQL.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-10 flex gap-6 items-center"
            >
              <Link
                href="/projects"
                className="bg-white text-black px-8 py-3 font-semibold hover:scale-105 transition duration-300"
              >
                View Projects
              </Link>

              <a
                href="/Mohana_Aditiyan_Full_Stack_Developer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm hover:text-[#3b82f6] transition"
              >
                Download Resume
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
