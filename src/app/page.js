import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Showcases from "./components/Showcases";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Showcases />
    </div>
  );
}
