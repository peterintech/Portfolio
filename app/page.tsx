import Hero from "@/components/homepage/sections/hero";
import NavBar from "@/components/layout/navbar";
import "./globals.css";
import About from "@/components/homepage/sections/about";
import Approach from "@/components/homepage/sections/approach";
import AppShowcase from "@/components/homepage/sections/showcase";
import Experience from "@/components/homepage/sections/experience";
import KeySkills from "@/components/homepage/sections/keySkills";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Approach />
        <AppShowcase />
        <Experience />
        <KeySkills />
      </main>
    </div>
  );
}
