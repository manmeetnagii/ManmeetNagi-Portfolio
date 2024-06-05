"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FixedNavbar } from "@/app/_components/FixedNavbar";
import { ShimmerButtonDemo } from "@/app/_components/Button";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-full py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
         <FixedNavbar/>
      <Header />
      <div>
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="top-[-500px] relative"
      >
        <h2 className="text-4xl font-semibold mb-[4rem] px-[8.2rem]">Glimpse of my work.</h2>
        
         
        
        <motion.div className="flex  flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
      </div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl  relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-[-70px]">
      <h1 className="text-2xl relative z-[9999999] md:text-7xl font-bold dark:text-white">
        Manmeet Nagi
      </h1>
      <p className="z-[9999] relative max-w-2xl md:text-xl mt-8 text-neutral-200">
        I develop beautiful websites and web-apps with the latest technologies and frameworks.
        I&apos;m a passionate developer and designer who love to build
        amazing products.
      </p>
      <div className="flex gap-4 ">
      <button className="hover:scale-[1.1] transition text-neutral-300 hover:text-white ease-in-out w-[10rem] py-2 mt-6 rounded-full  z-[999999] border border-gray-500 ">
        <a href="https://drive.google.com/file/d/1-fBa-7yxtm2Z7O8PkZt3T1rtqftjZFzS/view?usp=sharing" target="_blank">
          <span className="text-sm">Get Resume</span>
        </a>
      </button>
      <button className="w-[10rem] py-2 mt-6 rounded-full text-neutral-300 hover:text-white hover:scale-[1.1] transition ease-in-out z-[999999] border border-gray-500 ">
        <a href="#contact">
          <span className="text-sm">Get In Touch</span>
        </a>
      </button>
      </div>
      
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <>
    
        <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
    </>
  );
};
