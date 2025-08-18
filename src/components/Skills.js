import React from "react";
import { SiOracle } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-[#1E1E1E]">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">
        Skills & Certifications
      </h2>

      {/* Skills */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-[#00ADB5] mb-4 text-center">
          Technical Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React.js",
            "Node.js",
            "Tailwind CSS",
            "MongoDB",
            "Git & GitHub",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-[#2C2C2C] rounded-full text-gray-200 hover:bg-[#00ADB5] hover:text-white transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h3 className="text-xl font-semibold text-[#00ADB5] mb-8 text-center">
          Certifications
        </h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Oracle Certificate */}
          <a
            href="/certificates/oracle.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2C2C2C] rounded-lg shadow hover:shadow-lg transition transform hover:scale-105 p-6 flex flex-col items-center text-center"
          >
            <SiOracle className="text-orange-500 text-5xl mb-3" />
            <strong className="text-white block">
              Oracle Cloud Infrastructure
            </strong>
            <p className="text-sm text-gray-400">AI Foundations Associate</p>
          </a>

          {/* TechnoHacks Internship */}
          <a
            href="/certificates/technohacks.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2C2C2C] rounded-lg shadow hover:shadow-lg transition transform hover:scale-105 p-6 flex flex-col items-center text-center"
          >
            <FaLaptopCode className="text-blue-400 text-5xl mb-3" />
            <strong className="text-white block">
              Web Development Internship
            </strong>
            <p className="text-sm text-gray-400">TechnoHacks EduTech</p>
          </a>

          {/* GUVI Workshop */}
          <a
            href="/certificates/guvi.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2C2C2C] rounded-lg shadow hover:shadow-lg transition transform hover:scale-105 p-6 flex flex-col items-center text-center"
          >
            <SiGoogleclassroom className="text-green-400 text-5xl mb-3" />
            <strong className="text-white block">Fullstack Workshop</strong>
            <p className="text-sm text-gray-400">GUVI • 2024</p>
          </a>
        </div>
      </div>
    </section>
  );
}
