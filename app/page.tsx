import Hero from "@/components/homepage/sections/hero";
import NavBar from "@/components/layout/navbar";
import "./globals.css";
import About from "@/components/homepage/sections/about";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}
