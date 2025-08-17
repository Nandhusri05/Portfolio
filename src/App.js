import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-[#121212] text-white min-h-screen flex flex-col">
      <Navbar />
      {/* Add top padding so content isn't hidden under fixed navbar */}
      <main className="flex-grow pt-16">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
