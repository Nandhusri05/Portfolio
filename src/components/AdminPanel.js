import { useState, useEffect } from "react";

export default function AdminPanel() {
  const [auth, setAuth] = useState(false);
  const [password, setPassword] = useState("");

  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);

  const [newSkill, setNewSkill] = useState("");
  const [newProject, setNewProject] = useState({
    title: "",
    category: "",
    description: "",
    link: "",
  });

  // 🔐 Handle Login
  const handleLogin = () => {
    if (password === "Nandhu12") {
      setAuth(true);
    } else {
      alert("Wrong password!");
    }
  };

  // 📥 Fetch portfolio from backend
  const fetchPortfolio = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/portfolio");
      const data = await res.json();
      setPortfolio(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching portfolio:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (auth) {
      fetchPortfolio();
    }
  }, [auth]);

  // ➕ Add new skill
  const handleAddSkill = async () => {
    if (!newSkill) return;
    try {
      const res = await fetch("http://localhost:5000/api/portfolio/skills", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ skill: newSkill }),
      });
      if (res.ok) {
        fetchPortfolio();
        setNewSkill("");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // ❌ Delete skill
  const handleDeleteSkill = async (skill) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/portfolio/skills/${skill}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) fetchPortfolio();
    } catch (err) {
      console.error(err);
    }
  };

  // ➕ Add project
  const handleAddProject = async () => {
    if (!newProject.title) return;
    try {
      const res = await fetch("http://localhost:5000/api/portfolio/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProject),
      });
      if (res.ok) {
        fetchPortfolio();
        setNewProject({ title: "", category: "", description: "", link: "" });
      }
    } catch (err) {
      console.error(err);
    }
  };

  // ❌ Delete project
  const handleDeleteProject = async (title) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/portfolio/projects/${title}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) fetchPortfolio();
    } catch (err) {
      console.error(err);
    }
  };

  // 🔑 If not logged in, show login screen
  if (!auth) {
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-[#121212] text-white">
        <h2 className="text-2xl mb-4">Admin Login</h2>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-4 py-2 rounded text-black"
        />
        <button
          onClick={handleLogin}
          className="mt-4 px-6 py-2 bg-[#00ADB5] rounded hover:bg-[#08D9D6]"
        >
          Login
        </button>
      </div>
    );
  }

  if (loading) return <p className="text-white p-6">Loading...</p>;

  return (
    <div className="p-6 bg-[#1E1E1E] min-h-screen text-white">
      <h1 className="text-3xl font-bold text-center mb-6">Admin Panel</h1>

      {/* BIO */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-[#00ADB5]">Bio</h2>
        <p>
          <strong>Name:</strong> {portfolio.bio?.name}
        </p>
        <p>
          <strong>Title:</strong> {portfolio.bio?.title}
        </p>
        <p>
          <strong>GitHub:</strong> {portfolio.bio?.github}
        </p>
      </div>

      {/* SKILLS */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-[#00ADB5]">Skills</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {portfolio.skills.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-[#2C2C2C] rounded-full flex items-center gap-2"
            >
              {skill}
              <button
                onClick={() => handleDeleteSkill(skill)}
                className="text-red-400 hover:text-red-600"
              >
                ✕
              </button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add new skill"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            className="px-3 py-2 rounded text-black flex-grow"
          />
          <button
            onClick={handleAddSkill}
            className="px-4 py-2 bg-[#00ADB5] rounded hover:bg-[#08D9D6]"
          >
            Add
          </button>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-[#00ADB5]">Projects</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {portfolio.projects.map((proj, i) => (
            <div
              key={i}
              className="bg-[#2C2C2C] p-4 rounded-lg shadow flex flex-col"
            >
              <h3 className="font-bold">{proj.title}</h3>
              <p className="text-sm text-gray-400">{proj.category}</p>
              <p className="mt-2">{proj.description}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 mt-2 underline"
              >
                {proj.link}
              </a>
              <button
                onClick={() => handleDeleteProject(proj.title)}
                className="mt-2 px-3 py-1 bg-red-500 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {/* Add Project */}
        <div className="bg-[#2C2C2C] p-4 rounded-lg">
          <h3 className="mb-2 font-bold">Add New Project</h3>
          <input
            type="text"
            placeholder="Title"
            value={newProject.title}
            onChange={(e) =>
              setNewProject({ ...newProject, title: e.target.value })
            }
            className="w-full mb-2 px-3 py-2 rounded text-black"
          />
          <input
            type="text"
            placeholder="Category"
            value={newProject.category}
            onChange={(e) =>
              setNewProject({ ...newProject, category: e.target.value })
            }
            className="w-full mb-2 px-3 py-2 rounded text-black"
          />
          <textarea
            placeholder="Description"
            value={newProject.description}
            onChange={(e) =>
              setNewProject({ ...newProject, description: e.target.value })
            }
            className="w-full mb-2 px-3 py-2 rounded text-black"
          />
          <input
            type="text"
            placeholder="GitHub Link"
            value={newProject.link}
            onChange={(e) =>
              setNewProject({ ...newProject, link: e.target.value })
            }
            className="w-full mb-2 px-3 py-2 rounded text-black"
          />
          <button
            onClick={handleAddProject}
            className="px-4 py-2 bg-[#00ADB5] rounded hover:bg-[#08D9D6]"
          >
            Add Project
          </button>
        </div>
      </div>
    </div>
  );
}
