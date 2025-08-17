import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-[#1E1E1E]">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">
        About Me
      </h2>

      <p className="max-w-3xl mx-auto text-[#B0B0B0] text-center mb-10 leading-relaxed">
        I am a passionate full stack developer focused on building fast,
        responsive, and visually appealing web applications. Skilled in modern
        JavaScript frameworks with a keen eye for clean UI/UX design.
      </p>

      <hr className="max-w-xs border-gray-700 mx-auto mb-10" />

      <blockquote className="max-w-3xl mx-auto text-center text-[#B0B0B0] italic text-lg">
        "Striving to deliver clean and efficient code, every line counts."
      </blockquote>
    </section>
  );
}
