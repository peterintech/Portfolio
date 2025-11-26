import Hero from "@/components/homepage/hero";
import NavBar from "@/components/shared/navbar";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
