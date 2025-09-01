import React from "react";
import { FileDown, Mail } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="px-6 md:px-20 py-16">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-white via-purple-50 to-purple-100 rounded-3xl shadow-lg p-8 md:p-12">
        <h2 className="text-4xl font-bold mb-6 text-purple-700">About</h2>

        <p className="text-gray-800 text-lg leading-relaxed">
          I'm a BCA student passionate about crafting clean, user-friendly, and scalable web solutions. 
          Currently, I’m exploring the <b>MERN stack</b> to enhance my skills as a full-stack developer. 
          I enjoy problem-solving, designing intuitive interfaces, and building projects that create real-world impact.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 flex-wrap">
          {/* Resume Button */}
          {/* <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl shadow-md transition-transform transform hover:scale-105"
          >
            <FileDown size={20} />
            <span className="font-medium">Download Resume</span>
          </a> */}

          {/* Contact Button */}
          <a
            href="#contact"
            className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-5 py-3 rounded-xl shadow-md transition-transform transform hover:scale-105"
          >
            <Mail size={20} />
            <span className="font-medium">Get In Touch</span>
          </a>
        </div>
      </div>
    </section>
  );
}
