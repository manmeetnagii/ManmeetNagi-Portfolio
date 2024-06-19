"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";



export function AnimatedPinDemo() {
  return (
    <div id="projects" className="relative flex  h-full w-full flex-col items-center justify-center overflow-hidden border-t-2 border-[#1f1f1f]  bg-background py-14 md:shadow-xl">
        <div className="mb-[5rem] w-full z-[999] px-[2rem]">
            <h1 className="text-4xl w-full flex items-start justify-start font-semibold text-white">RECENT PROJECTS</h1>
            <p className="text-sm  mb-[3rem] font-medium text-gray-500">My Work</p>
            <p className="md:w-[80%] text-sm text-white">Following projects showcase my knowledge and skills in the field. Each project is shortly described with links to the live demos in it. The source code for these projects can be found in my <a href="https://github.com/manmeetnagii?tab=repositories" className="text-blue-500 underline">Github Repo</a>. Mainly MERN Technologies are used in development of these projects.</p>
        </div>
      <div className="h-full w-full flex flex-wrap   items-center justify-center  gap-y-[4rem]">
      <PinContainer
        title="/meta-drive"
        href="https://meta-drive.vercel.app"
        
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Meta Drive
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
            Access your files anytime, anywhere with ease.
            </span>
          </div>
          <div className=" mt-4 rounded-lg w-full h-full overflow-hidden">
            <Image  src="/metadrive.png" alt="p1" height={1000} width={1000} style={{height:"12rem"}}/>
          </div>
        </div>
      </PinContainer>
      <PinContainer
        title="/papernote.github"
        href="https://github.com/manmeetnagii/Papernote"
        
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Papernote
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
            Stay organized, inspired, and productive wherever you go.
            </span>
          </div>
          <div className=" mt-4 rounded-lg w-full h-full overflow-hidden">
            <Image  src="/papernote.png" alt="p1" height={1000} width={1000} style={{height:"12rem"}}/>
          </div>
        </div>
      </PinContainer>
      <PinContainer
        title="/yoom.github"
        href="https://github.com/manmeetnagii/Yoom"
        
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Yoom
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Join or host a real time video chat room with your friends.
            </span>
          </div>
          <div className=" mt-4 rounded-lg w-full h-full overflow-hidden">
            <Image  src="/yoom.png" alt="p1" height={1000} width={1000} style={{height:"12rem"}}/>
          </div>
        </div>
      </PinContainer>
      <PinContainer
        title="/figpro.app"
        href="https://figprodev.vercel.app/"
        
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Fig Pro
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Design in real-time collaborative environment with your friends.
            </span>
          </div>
          <div className=" mt-4 rounded-lg w-full h-full overflow-hidden">
            <Image  src="/figpro.png" alt="p1" height={1000} width={1000} style={{height:"12rem"}}/>
          </div>
        </div>
      </PinContainer>
      <PinContainer
        title="/genesis.dev"
        href="https://genesisdev.netlify.app"
        
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Genesis
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              It&apos;s an AI chatbot inspired by google gemini.
            </span>
          </div>
          <div className=" mt-4 rounded-lg w-full h-full overflow-hidden">
            <Image  src="/genesis.png" alt="p1" height={1000} width={1000} style={{height:"12rem"}}/>
          </div>
        </div>
      </PinContainer>
      <PinContainer
        title="/architectural.co"
        href="https://architecturaldesignforum.netlify.app"
        
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Architectural Design Forum
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              A freelance project for architectural company.
            </span>
          </div>
          <div className=" mt-4 rounded-lg w-full h-full overflow-hidden">
            <Image  src="/adf.png" alt="p1" height={1000} width={1000} style={{height:"12rem"}}/>
          </div>
        </div>
      </PinContainer>
    
      </div>
      
    </div>
  );
}
