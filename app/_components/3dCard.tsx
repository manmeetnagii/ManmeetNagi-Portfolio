"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo() {
  return (

    <div id="certificates" className="flex border-[#1f1f1f] border-t-2    gap-[2rem] flex-wrap w-full h-full items-center justify-center">
      <div className=" w-full z-[999] px-[2rem]">
            <h1 className="text-4xl w-full flex items-start justify-start font-semibold mt-20 text-white">CERTIFICATIONS</h1>
            <p className="text-sm  mb-[3rem] font-medium text-gray-500">My Achievments</p>
        </div>
    <CardContainer className="inter-var w-[22rem]">
      <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-[20rem] h-auto sm:w-[30rem]  rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          Frontend Development
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className=" text-sm max-w-sm mt-2 text-neutral-300"
        >
          <span className="font-semibold">META</span><br />
          <span className="font-light">OCT 2023</span>
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/meta.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-fit rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-end items-center mt-5">
          
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-1 rounded-xl bg-blue-500 text-black text-[14px] font-semibold"
          >
            <a href="https://drive.google.com/file/d/130DzIHiIwgMdQ11zpB96ZhpqZPvlDhYn/view">Link</a>
          </CardItem>
        </div>
      </CardBody>

    </CardContainer>
    <CardContainer className="inter-var w-[22rem]">
      <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          Javascript (Intermediate)
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className=" text-sm max-w-sm mt-2 text-neutral-300"
        >
          <span className="font-semibold">Infosys | Springboard</span><br />
          <span className="font-light">OCT 2023</span>
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/js.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-fit rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-end items-center mt-5">
        <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-1 rounded-xl bg-blue-500 text-black text-[14px] font-semibold"
          >
            <a href="https://drive.google.com/file/d/1vTqSrBSZ5NG1JXifJRuHqobvY0vqIPNx/view">Link</a>
          </CardItem>
        </div>
      </CardBody>

    </CardContainer>
    <CardContainer className="inter-var w-[22rem]">
      <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          CSS (Advance)
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className=" text-sm max-w-sm mt-2 text-neutral-300"
        >
          <span className="font-semibold">Infosys | Springboard</span><br />
          <span className="font-light">OCT 2023</span>
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/cssC.png"
            height="1000"
            width="1000"
            
            className="h-60 w-full object-fit rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-end items-center mt-5">
        <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-1 rounded-xl bg-blue-500 text-black text-[14px] font-semibold"
          >
            <a href="https://drive.google.com/file/d/1S4QoZe_xiy8v3-BPfQ-gczDHIbvVWFSb/view">Link</a>
          </CardItem>
        </div>
      </CardBody>

    </CardContainer>
   
    
    </div>
  );
}
