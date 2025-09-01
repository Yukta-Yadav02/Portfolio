import React from "react";
import { Code, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code className="w-8 h-8 text-purple-600" />,
    skills: ["HTML & CSS", "JavaScript", "React", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: <Database className="w-8 h-8 text-pink-500" />,
    skills: ["Java", "MongoDB", "SQL"],
  },
  {
    title: "Tools & Others",
    icon: <Wrench className="w-8 h-8 text-blue-500" />,
    skills: ["Git & GitHub", "VS Code", "Deployment (Vercel/Netlify)"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-purple-700">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-white via-purple-50 to-purple-100 rounded-3xl shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-800">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, sIdx) => (
                  <li
                    key={sIdx}
                    className="text-gray-700 font-medium bg-white/70 rounded-lg px-3 py-2 shadow-sm hover:shadow-md transition"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

