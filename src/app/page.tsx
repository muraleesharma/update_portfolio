import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Insights from "@/components/Insights";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden pt-20">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Insights />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
