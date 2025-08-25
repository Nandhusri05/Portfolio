import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/portfolio")
      .then((res) => res.json())
      .then((data) => {
        setPortfolio(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching portfolio:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-b from-[#121212] to-[#1E1E1E]">
        <p className="text-gray-400 animate-pulse">Loading portfolio...</p>
      </section>
    );
  }

  if (!portfolio) {
    return (
      <section className="h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-b from-[#121212] to-[#1E1E1E]">
        <p className="text-red-400">Failed to load portfolio data.</p>
      </section>
    );
  }

  return (
    <section
      id="home"
      className="h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#121212] to-[#1E1E1E] px-4"
    >
      {/* Name */}
      <h1 className="text-5xl font-bold mb-2 text-white transition-opacity duration-700 ease-in-out opacity-0 animate-fadeIn">
        {portfolio.bio?.name}
      </h1>

      {/* Title */}
      <p className="text-lg text-[#B0B0B0] mb-6 max-w-md animate-fadeIn delay-200">
        {portfolio.bio?.title}
      </p>

      {/* Social Links */}
      <div className="flex space-x-6 mb-8 text-[#00ADB5] text-3xl animate-fadeIn delay-300">
        {portfolio.bio?.github && (
          <a
            href={portfolio.bio.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-[#08D9D6] transition"
          >
            <FaGithub />
          </a>
        )}
        {portfolio.bio?.linkedin && (
          <a
            href={portfolio.bio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#08D9D6] transition"
          >
            <FaLinkedin />
          </a>
        )}
        {portfolio.bio?.twitter && (
          <a
            href={portfolio.bio.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-[#08D9D6] transition"
          >
            <FaTwitter />
          </a>
        )}
      </div>

      {/* Button */}
      <a
        href="#projects"
        className="px-6 py-3 bg-[#00ADB5] hover:bg-[#08D9D6] rounded-lg shadow-lg transition transform hover:scale-105 animate-fadeIn delay-500"
      >
        View My Work
      </a>
    </section>
  );
}
