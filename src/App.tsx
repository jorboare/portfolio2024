import "./App.css";
import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import { useEffect, useState } from "react";
import Navbar from "./layout/navbar/Navbar";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Projects from "./components/projectsComp/Projects";
function App() {
  const [aboutReached, setAboutReached] = useState(false);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("showEl");
      } else {
        entry.target.classList.remove("showEl");
      }
    });
  });

  useEffect(() => {
    const checkPosition = () => {
      const aboutEl = document.getElementById("about");
      if (aboutEl) setAboutReached(aboutEl?.getBoundingClientRect().top <= 0);
    };
    window.addEventListener("scroll", checkPosition);
    const hiddenElements = document.querySelectorAll(".hiddenEl");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      <div
        id="home"
        className={`bg-background shadow-lg transition-all duration-1000 `}
      >
        <Hero></Hero>
        <Navbar reached={aboutReached}></Navbar>
        <About reached={aboutReached}></About>
        <Experience></Experience>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </>
  );
}

export default App;
