"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Questions from "./components/Questions";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import About from "./components/About";
import Carousel from "./components/Carousel";
import Projects from "./components/Projects";
export default function Home() {
  return (
    <>
      <Navbar />
            <Hero />
            <About />
        <Carousel/>
        <Projects/>
        <Footer />
    </>
  );
}
