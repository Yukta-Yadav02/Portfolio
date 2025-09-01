import React from "react";
import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-24 pt-28"
    >
      {/* Text Section */}
      <div className="max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold mb-6"
        >
          Hi, I'm <span className="text-purple-700">Yukta Yadav</span>
        </motion.h1>

        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          I'm a BCA student passionate about crafting clean, user-friendly, and
          scalable web solutions. Focused on continuous learning and building
          impactful digital experiences.
        </p>

        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/yukta-yadav02/"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-md"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/Yukta-Yadav02"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-pink-500 hover:bg-pink-600 text-white shadow-md"
          >
            <Github />
          </a>
          <a
            href="#projects"
            className="px-5 py-3 rounded-lg bg-gray-100 hover:scale-105 transition shadow-md"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-8 md:mt-0">
        <img
          src="/profile.png"
          alt="Profile"
          className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-full shadow-[0_0_30px_rgba(128,0,128,0.4)]"
        />
      </div>
    </section>
  );
}
