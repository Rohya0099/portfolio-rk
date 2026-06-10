import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import Testimonials from "@/components/Testimonials";
import HireMe from "@/components/HireMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-[100svh] overflow-x-clip bg-[#080A0C] text-[#F5F2EA]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <WhyWorkWithMe />
      <Testimonials />
      <HireMe />
      <Contact />
      <Footer />
    </main>
  );
}
