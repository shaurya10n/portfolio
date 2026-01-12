import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-white/20">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Footer />
    </main>
  );
}
