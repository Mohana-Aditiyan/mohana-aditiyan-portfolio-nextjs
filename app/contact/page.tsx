"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function ContactPage() {
  return (
    <div className="bg-[#0f0f0f] text-white overflow-hidden">
      {/* ================= SECTION 1 - CONTACT ================= */}
      <section className="min-h-screen flex items-center px-8 md:px-20 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] w-full"
          >
            <Image
              src="/images/contact.jpg"
              alt="Contact"
              fill
              className="object-cover grayscale hover:grayscale-0 transition duration-700"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl font-extrabold"
            >
              My Contact
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="h-[2px] bg-[#39FF14] mt-6 mb-10 w-[120px]"
            />

            <motion.p
              variants={fadeUp}
              className="text-gray-400 leading-relaxed text-lg mb-10"
            >
              I'm always open to discussing new opportunities, collaborations,
              or innovative projects. Feel free to reach out.
            </motion.p>

            {/* EMAIL */}
            <motion.div variants={fadeUp} className="mb-10">
              <p className="text-sm text-gray-500">Email</p>
              <a
                href="mailto:mohanaaditiyan@gmail.com"
                className="text-lg font-medium text-white hover:text-[#39FF14] transition duration-300"
              >
                mohanaaditiyan21@gmail.com
              </a>
            </motion.div>

            {/* SOCIAL ICONS */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-8 text-2xl"
            >
              <a
                href="https://www.linkedin.com/in/mohana-aditiyan-p-80b68b233"
                target="_blank"
                className="text-gray-400 hover:text-[#39FF14] hover:scale-110 transition duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/_adhxx.21_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                className="text-gray-400 hover:text-[#39FF14] hover:scale-110 transition duration-300"
              >
                <FaInstagram />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 2 - THANK YOU ================= */}
      <section className="min-h-screen flex items-center px-8 md:px-20 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl font-extrabold"
            >
              Thank You
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="h-[2px] bg-[#39FF14] mt-6 mb-10 w-[120px]"
            />

            <motion.p
              variants={fadeUp}
              className="text-gray-400 leading-relaxed mb-6"
            >
              Thank you for taking the time to explore my portfolio. I truly
              appreciate your interest in my work and experience.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-gray-400 leading-relaxed"
            >
              If you believe my skills align with your requirements, I would be
              excited to contribute and grow with your team. Let’s build
              something impactful together.
            </motion.p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] w-full"
          >
            <Image
              src="/images/thank.jpg"
              alt="Thank You"
              fill
              className="object-cover grayscale hover:grayscale-0 transition duration-700"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
