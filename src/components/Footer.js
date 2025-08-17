import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-gray-400 py-8 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <p className="text-sm sm:text-base select-none">
          © {new Date().getFullYear()} Nandhusri. All rights reserved.
        </p>
        <div className="flex space-x-8">
          {[
            {
              href: "https://github.com/your-github",
              label: "GitHub",
              icon: FaGithub,
            },
            {
              href: "https://linkedin.com/in/your-linkedin",
              label: "LinkedIn",
              icon: FaLinkedin,
            },
            {
              href: "https://twitter.com/your-twitter",
              label: "Twitter",
              icon: FaTwitter,
            },
          ].map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-400 hover:text-[#00ADB5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ADB5] rounded transition transform ease-in-out duration-300"
            >
              <Icon
                size={24}
                className="transition-transform ease-in-out duration-300 hover:scale-110"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
