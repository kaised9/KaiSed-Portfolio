import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Expertise from "./sections/Expertise";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Expertise />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Achievements />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default App;