import About from "@/components/about";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-16">
      <Hero />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}
