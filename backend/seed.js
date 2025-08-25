const mongoose = require("mongoose");
const Portfolio = require("./models/portfolio");

mongoose
  .connect("mongodb://127.0.0.1:27017/portfolioDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected for Seeding"))
  .catch((err) => console.error(err));

async function seed() {
  await Portfolio.deleteMany({}); // clear old data

  await Portfolio.create({
    bio: {
      name: "Nandhusri Rajaraman",
      title:
        "Passionate Full Stack Developer specializing in React.js, Node.js, and modern web technologies.",
      github: "https://github.com/Nandhusri05",
      linkedin: "https://linkedin.com/in/yourprofile",
      twitter: "https://twitter.com/yourhandle",
    },
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "MongoDB",
      "Git & GitHub",
    ],
    certifications: [
      {
        title: "Oracle Cloud Infrastructure",
        organization: "Oracle",
        icon: "oracle",
        link: "/certificates/oracle.pdf",
      },
      {
        title: "Web Development Internship",
        organization: "TechnoHacks EduTech",
        icon: "laptop",
        link: "/certificates/technohacks.pdf",
      },
      {
        title: "Fullstack Workshop",
        organization: "GUVI",
        icon: "googleclassroom",
        link: "/certificates/guvi.pdf",
      },
    ],
    projects: [
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
    ],
  });

  console.log("✅ Seed data inserted!");
  mongoose.connection.close();
}

seed();
