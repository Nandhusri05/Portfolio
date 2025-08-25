import { useEffect, useState } from "react";
import { SiOracle } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";

const iconMap = {
  oracle: <SiOracle className="text-orange-500 text-5xl mb-3" />,
  laptop: <FaLaptopCode className="text-blue-400 text-5xl mb-3" />,
  guvi: <SiGoogleclassroom className="text-green-400 text-5xl mb-3" />,
};

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/portfolio")
      .then((res) => res.json())
      .then((data) => {
        setSkills(data.skills || []);
        setCertifications(data.certifications || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching skills:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-20 px-6 bg-[#1E1E1E] text-center text-gray-400">
        Loading skills & certifications...
      </section>
    );
  }

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
          {skills.map((skill, idx) => (
            <span
              key={idx}
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
          {certifications.map((cert, idx) => (
            <a
              key={idx}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2C2C2C] rounded-lg shadow hover:shadow-lg transition transform hover:scale-105 p-6 flex flex-col items-center text-center"
            >
              {iconMap[cert.icon] || (
                <span className="text-gray-400 text-5xl mb-3">📜</span>
              )}
              <strong className="text-white block">{cert.title}</strong>
              <p className="text-sm text-gray-400">{cert.organization}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
