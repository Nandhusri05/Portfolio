import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPanel from "./components/AdminPanel";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="font-sans bg-[#121212] text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <About />
                  <Projects />
                  <Skills />
                  <Contact />
                </>
              }
            />
            <Route path="/admin" element={<AdminPanel />} />{" "}
            {/* 🔒 Protected */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
