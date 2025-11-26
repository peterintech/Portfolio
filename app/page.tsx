import Hero from "@/components/homepage/sections/hero";
import NavBar from "@/components/layout/navbar";
import "./globals.css";
import About from "@/components/homepage/sections/about";
import Approach from "@/components/homepage/sections/approach";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Approach />
      </main>
    </div>
  );
}
