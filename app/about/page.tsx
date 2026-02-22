"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function AboutPage() {
  return (
    <div className="bg-[#0f0f0f] text-white">
      {/* ================= INTRODUCTION SECTION ================= */}
      <section className="min-h-screen flex items-center px-8 md:px-20 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-extrabold"
            >
              Introduction
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="h-[2px] bg-[#39FF14] mt-6 mb-10"
            />

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={1}
              viewport={{ once: true }}
              className="text-gray-400 leading-relaxed text-lg"
            >
              I’m Mohana Aditiyan P, a Full Stack Developer with industry
              experience building scalable web applications. I primarily work
              with Next.js, React.js, Node.js, and MySQL, focusing on writing
              clean, maintainable code and creating modern, high-performing user
              experiences. I enjoy turning ideas into practical,
              production-ready solutions that are reliable and built to scale.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-10 mt-14">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={2}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4">About Me</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  I’m a developer who enjoys building scalable full stack
                  applications with clean structure and strong performance. I
                  focus on writing maintainable code, designing modern and
                  responsive interfaces, and creating backend systems that are
                  efficient and reliable.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={3}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4">About Portfolio</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  This portfolio showcases my technical skills, development
                  approach, and the way I build professional, production-ready
                  web applications using modern tools and best practices. It
                  reflects how I structure projects, write clean code, and focus
                  on performance and user experience.
                </p>
              </motion.div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] w-full"
          >
            <Image
              src="/images/About_image.jpg"
              alt="About Image"
              fill
              className="object-cover grayscale hover:grayscale-0 transition duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ME SECTION ================= */}
      <section className="min-h-screen px-8 md:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-extrabold"
          >
           Overview
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h-[2px] bg-[#39FF14] mt-6 mb-16"
          />

          <div className="grid md:grid-cols-3 gap-14">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={1}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">My Vision</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                This portfolio represents how I approach development — with
                structure, clarity, and attention to detail. It showcases the
                way I build clean, production-ready web applications using
                modern technologies and best practices. Every project here
                reflects my focus on performance, maintainability, and
                delivering a smooth user experience.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={2}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">My Mission</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                My goal is to continuously grow as a full stack engineer by
                mastering modern technologies and building reliable, scalable
                applications that solve real-world problems. I believe in
                learning by building and improving with every project.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={3}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">Core Strength</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                I bring a strong problem-solving mindset, clean coding
                standards, a solid understanding of API architecture, and a
                performance-first approach to development. I value structured
                systems, efficient backend logic, and intuitive frontend
                experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
