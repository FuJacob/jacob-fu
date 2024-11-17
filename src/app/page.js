"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Questions from "./components/Questions";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import About from "./components/About";
import Carousel from "./components/Carousel";
export default function Home() {
  return (
    <>
      <Navbar />
      <Parallax pages={3}>
        <ParallaxLayer offset={0} speed={1} >
          <Hero />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
        <Carousel/>
        </ParallaxLayer>
        <ParallaxLayer offset={1.9} speed={1}>
          <About /> </ParallaxLayer>
              </Parallax>
    </>
  );
}
