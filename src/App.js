import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
