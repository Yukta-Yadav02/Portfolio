import { FileDown, FileText } from "lucide-react";

import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="px-6 md:px-20 mt-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-purple-100">
        <div className="flex items-center gap-3 mb-4">
          <FileText className="text-purple-600 w-8 h-8" />
          <h2 className="text-3xl font-bold">Resume</h2>
        </div>
        <p className="mb-6 text-gray-700 text-lg leading-relaxed">
          Explore my detailed experience, education, and technical skills. Click
          the button below to download my full resume in PDF format.
        </p>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl shadow-md transition transform hover:scale-105"
        >
          <FileDown className="w-5 h-5" />
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
