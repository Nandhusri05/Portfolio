import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const skillsData = [
  { name: "HTML", icon: <FaHtml5 className="inline mr-2 text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="inline mr-2 text-blue-500" /> },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="inline mr-2 text-yellow-400" />,
  },
  { name: "React.js", icon: <FaReact className="inline mr-2 text-blue-400" /> },
  {
    name: "Node.js",
    icon: <FaNodeJs className="inline mr-2 text-green-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="inline mr-2 text-teal-400" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="inline mr-2 text-green-600" />,
  },
  {
    name: "Git & GitHub",
    icon: (
      <>
        <FaGitAlt className="inline mr-1 text-red-500" />
        <FaGithub className="inline mr-2 text-gray-200" />
      </>
    ),
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-[#1E1E1E]">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        {skillsData.map(({ name, icon }) => (
          <span
            key={name}
            className="flex items-center space-x-1 px-5 py-3 bg-gray-700 rounded-full text-gray-200 cursor-default 
                       hover:bg-[#00ADB5] hover:text-white transition duration-300 ease-in-out shadow-md"
            title={name}
          >
            {icon}
            <span>{name}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
