"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const categories = [
  {
    title: "Frontend Development",
    skills:
      "React.js, Next.js, JavaScript (ES6+), HTML5, CSS3, Responsive Web Design",
  },
  {
    title: "State Management",
    skills: "React Hooks, Context API ,Redux",
  },
  {
    title: "Backend Integration",
    skills: "REST API Integration, CRUD Operations, JWT Authentication",
  },
  {
    title: "Database",
    skills: "MySQL, MangoDB",
  },
  {
    title: "Tools & Platforms",
    skills: "Git, GitHub, Postman, Vercel, Netlify",
  },
  {
    title: "UI/UX",
    skills: "Figma (Wireframing, Prototyping)",
  },
  {
    title: "SEO & Digital Marketing",
    skills:
      "SEO Keywords, Meta Tag Optimization, Google Analytics, Google Tag Manager, Digital Marketing, Social Media Handling",
  },
  {
    title: "AI & Modern Development",
    skills: "AI Tools, Prompt Engineering, AI-Assisted Development",
  },
  {
    title: "Other Skills",
    skills: "Debugging, Cross-Browser Compatibility, Performance Optimization",
  },
];

export default function SkillsPage() {
  const secondSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("skillsVisited");

    if (!hasVisited) {
      setTimeout(() => {
        secondSectionRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      }, 2500);

      sessionStorage.setItem("skillsVisited", "true");
    }
  }, []);

  return (
    <div className="bg-[#0f0f0f] text-white overflow-x-hidden">
      {/* ================= VIEWPORT 1 (INTRO) ================= */}
      {/* ================= VIEWPORT 1 (INTRO WITH BG IMAGE) ================= */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/skills-bg.jpg')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        {/* Content */}
        <div className="relative z-10 px-6 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight"
          >
            Skills & Capabilities
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-8 text-gray-300 text-lg leading-relaxed"
          >
            From responsive UI development to structured backend systems and
            database design, I build performance-focused applications using
            modern tools, SEO best practices, and AI-assisted development
            workflows.
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-16 flex flex-col items-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2"
            >
              <div className="w-1 h-2 bg-white rounded-full" />
            </motion.div>

            <p className="text-sm text-gray-400 mt-3 tracking-widest">
              SCROLL DOWN
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= VIEWPORT 2 (SKILLS GRID) ================= */}
      <section
        ref={secondSectionRef}
        className="min-h-screen flex items-center px-8 md:px-20 py-24"
      >
        <div className="max-w-7xl mx-auto w-full">
          <motion.h2
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-16"
          >
            Technical Expertise
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {categories.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.7,
                }}
                viewport={{ once: true }}
                className="
  bg-gradient-to-br from-[#111827] to-[#0b1220]
  border border-[#1f2937]
  rounded-2xl p-8
  hover:border-[#3b82f6]
  hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]
  hover:-translate-y-3
  transition-all duration-500
  backdrop-blur-lg
  "
              >
                <h3 className="text-xl font-semibold mb-4 text-[#60a5fa]">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.skills}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
