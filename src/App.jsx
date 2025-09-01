import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-100 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
