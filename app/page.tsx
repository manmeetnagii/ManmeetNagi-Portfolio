import Image from "next/image";
import { HeroParallaxDemo } from "./_components/Hero";
import { Marque } from "./_components/Marque";

import { AnimatedPinDemo } from "./_components/3dPin";
import { ThreeDCardDemo } from "./_components/3dCard";

import { BackgroundBeamsDemo } from "./_components/BackgroundBeams";


export default function Home() {
  return (
    <div className="min-h-full">
      <HeroParallaxDemo/>
      <Marque/>
      <AnimatedPinDemo/>
      <ThreeDCardDemo/>
      <BackgroundBeamsDemo/>
    </div>
  );
}
