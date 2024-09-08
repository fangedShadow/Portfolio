import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/TechStack";

export default function Home() {
  return (
   <>
    <Navbar />
    

    <main className="p-4">
      <Hero/>

      <AboutMe/>
      <Projects />
      <Skills/>
      <Contact />
    </main>
    <Footer />
   </>
  );
}
