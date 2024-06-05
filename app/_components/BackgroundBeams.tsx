"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { SignupFormDemo } from "./Contact";

export function BackgroundBeamsDemo() {
  return (
    <div id="contact" className="h-full mt-[3rem] w-full   border-t-2 border-[#1f1f1f] rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
       <div className="mt-[4rem] w-full z-[999] px-[2rem]">
            <h1 className="text-4xl w-full flex items-start justify-start font-semibold">CONTACT</h1>
            <p className="text-sm  mb-[3rem] font-medium text-gray-500">Send us a message</p>
            
        </div>
      <div className="max-w-2xl z-[999999] mx-auto p-4">
        <SignupFormDemo/>
      </div>
      <BackgroundBeams />
    </div>
  );
}
