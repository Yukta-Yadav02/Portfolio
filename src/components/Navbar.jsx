import React from "react";

export default function Navbar() {
  const links = ["home", "about", "resume", "projects", "education", "skills", "contact"];

  return (
    <nav className="fixed w-full z-40 bg-gradient-to-r from-purple-500/90 via-pink-400/90 to-purple-500/90 backdrop-blur-md px-6 md:px-20 py-3 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="text-2xl font-extrabold text-white tracking-wide">Yukta</div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 items-center">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l}`}
                className="capitalize text-lg font-medium text-white hover:text-gray-100 transition"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
