import React from "react";
import {
  ExternalLink,
  Github,
  Boxes,
  Home,
  CheckSquare,
  ShoppingCart,
  HelpCircle,
} from "lucide-react";

const data = [
  {
    title: "Home Decor Website",
    desc: "Stylish Home-Decor website with add-to-cart functionality.",
    tags: ["HTML", "CSS", "JS", "Bootstrap"],
    icon: <Home className="w-8 h-8 text-white" />,
    live: "https://yukta-yadav02.github.io/Home-Decor---Website/",
    github: "https://github.com/Yukta-Yadav02/Home-Decor---Website",
  },
  {
    title: "Grocery Website",
    desc: "Responsive grocery site using React + Tailwind.",
    tags: ["React", "Tailwind"],
    icon: <ShoppingCart className="w-8 h-8 text-white" />,
    live: "https://grocify-website-lilac.vercel.app",
    github: "https://github.com/Yukta-Yadav02/Grocify-Website",
  },
  {
    title: "Inventory Management System",
    desc: "Java + SQL project to manage products, categories, and stock efficiently.",
    tags: ["Java", "MySQL"],
    icon: <Boxes className="w-8 h-8 text-white" />,
    github: "https://github.com/Yukta-Yadav02/Inventory-Management-System",
  },
  {
    title: "To-Do List",
    desc: "React app to add/delete tasks with a random emoji feature.",
    tags: ["React"],
    icon: <CheckSquare className="w-8 h-8 text-white" />,
    live: "https://todo-list-rho-self-17.vercel.app",
    github: "https://github.com/Yukta-Yadav02/Todo-List",
  },

  {
    title: "Quiz App",
    desc: "Interactive quiz built with HTML/CSS/JS.",
    tags: ["JavaScript"],
    icon: <HelpCircle className="w-8 h-8 text-white" />,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-purple-700">
          Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              {/* Icon Circle */}
              <div className="h-24 flex items-center justify-center mb-4">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-lg">
                  {p.icon}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="font-semibold text-xl mb-2 text-center">{p.title}</h3>
              <p className="text-gray-600 text-center mb-4">{p.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {p.tags.map((t, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 bg-gray-100 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex justify-center gap-4">
                {p.live && (
                  <a
                    className="flex items-center gap-1 text-purple-600 hover:underline text-sm"
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
                {p.github && (
                  <a
                    className="flex items-center gap-1 text-gray-700 hover:underline text-sm"
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} /> GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}