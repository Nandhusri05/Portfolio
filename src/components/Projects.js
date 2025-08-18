import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import { WiDaySunny } from "react-icons/wi";
import { motion } from "framer-motion";

const techIconsMap = {
  React: <FaReact className="inline mr-1 text-blue-400" />,
  TailwindCSS: <SiTailwindcss className="inline mr-1 text-teal-400" />,
  "MERN Stack": <FaNodeJs className="inline mr-1 text-green-500" />,
  MongoDB: <SiMongodb className="inline mr-1 text-green-600" />,
  API: <WiDaySunny className="inline mr-1 text-yellow-400" />,
};

const projects = [
  {
    title: "EduWeb",
    category: "Web Development",
    description:
      "An online learning platform built with React and TailwindCSS. It provides engaging courses, a responsive UI, and smooth navigation for an enhanced learning experience.",
    tech: ["React", "TailwindCSS"],
    link: "https://github.com/Nandhusri05/EduWeb.git",
  },
  {
    title: "Portfolio Website",
    category: "Personal Project",
    description:
      "A responsive portfolio website designed and developed to showcase my skills, projects, and achievements. Built with React, TailwindCSS, and Framer Motion for modern animations and a clean design.",
    tech: ["React", "TailwindCSS"],
    link: "https://github.com/Nandhusri05/Portfolio.git",
  },
  {
    title: "HomeVerse",
    category: "API Integration",
    description:
      "A real estate platform with property listings, advanced filtering, and API-based data fetching. Developed using React with a smooth, interactive UI and animations for a modern browsing experience.",
    tech: ["React", "API"],
    link: "https://github.com/Nandhusri05/HomeVerse.git",
  },
];

export default function Projects() {
  return (
    <section className="bg-[#121212] py-16 px-6 md:px-12" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          My Projects
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#1E1E1E] rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 p-6 flex flex-col border border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <h3 className="text-xl font-semibold mb-1 text-white">
                {project.title}
              </h3>
              <p className="text-sm text-teal-400 mb-3 font-medium">
                {project.category}
              </p>
              <p className="text-gray-400 flex-grow">{project.description}</p>
              <div className="mt-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center bg-[#2C2C2C] text-blue-300 text-sm px-2 py-1 rounded-full mr-2"
                  >
                    {techIconsMap[t]} {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-[#00ADB5] hover:bg-[#08D9D6] text-white py-2 px-4 rounded-lg shadow-lg transition"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
