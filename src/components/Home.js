import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <section
      id="home"
      className="h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#121212] to-[#1E1E1E] px-4"
    >
      <h1 className="text-5xl font-bold mb-2 text-white">
        Nandhusri Rajaraman
      </h1>

      <p className="text-lg text-[#B0B0B0] mb-6 max-w-md">
        Passionate Full Stack Developer specializing in React.js, Node.js, and
        modern web technologies.
      </p>

      <div className="flex space-x-6 mb-8 text-[#00ADB5] text-3xl">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-[#08D9D6] transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-[#08D9D6] transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-[#08D9D6] transition"
        >
          <FaTwitter />
        </a>
      </div>

      <a
        href="#projects"
        className="px-6 py-3 bg-[#00ADB5] hover:bg-[#08D9D6] rounded-lg shadow-lg transition"
      >
        View My Work
      </a>
    </section>
  );
}
