"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beam";
import Lottie from "lottie-react";
import animationData from "../../../../public/assets/main/heroanim.json";
import { TextGenerateEffect } from "@/components/ui/word-generate";
import { Button } from "@/components/ui/button";
import { Globe } from "@/components/ui/globe";
import { sampleArcs } from "@/components/main/home/hero/sampleArc";
import dynamic from "next/dynamic";
import Image from "next/image";
const World = dynamic(
  () => import("@/components/ui/globe").then((m) => m.World),
  {
    ssr: false,
  }
);
const imagePaths = [
  "/assets/main/sponsors/kpmg.svg",
  "/assets/main/sponsors/pg.svg",
  "/assets/main/sponsors/sap.svg",
  "/assets/main/sponsors/mercedes.svg",
  "/assets/main/sponsors/telus.svg",
  "/assets/main/sponsors/trustee1.svg",
];
const globeConfig = {
  pointSize: 4,
  globeColor: "#041a0c",
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  emissive: "#062056",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "#a1cdb2",
  ambientLight: "#38bdf8",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

export default function HeroSectionBg() {
  return (
    <div className="h-screen w-full bg-[#0D1117] overflow-hidden relative">
      {" "}
      <BackgroundBeams className="" />{" "}
      <div className="h-full relative">
        <div className="flex items-center justify-center h-full ">
          <div className="hero-texts w-full grid-cols-1 md:px-16 lg:grid-cols-2 h-full grid">
            <div className="textxbtn font-bold md:h-full flex items-center lg:pl-7 w-full z-20">
              <div className="textcont">
                <div className="textheader text-white/90 font-black">
                  <TextGenerateEffect
                    words="The #1 Leading Profit Investment Platform"
                    className="lg:text-5xl md:text-4xl px-3 md:px-0 text-3xl lg:text-left text-center tracking-tighter text-balance"
                  />
                  <TextGenerateEffect
                    words="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique iure, blanditiis minima excepturi asperiores expedita."
                    className="md:text-base text-sm text-center lg:text-left text-gray-300 font-medium lg:w-5/6 mt-2 px-2 md:px-0 text-balance"
                  />
                </div>

                <div className="cta flex gap-x-4 items-center justify-center lg:justify-start mt-8 z-20">
                  <div className="btnone signup ">
                    <Button className="/h-12 rounded-full cursor-pointer flex font-bold items-center gap-x-2 text-white bg-gradient-to-r from-green-500 to-green-700">
                      <p>Get Started</p>{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-white"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Button>
                  </div>
                  <Button className="btnone hidden lg:flex font-bold hover:bg-white/10 bg-white/5 rounded-full login cursor-pointer text-white items-center gap-x-2 text-sm">
                    {" "}
                    <p>Continue Investment</p>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 tex-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Button>
                </div>
                {/* <div className="sponsors md:mt-20">
                <div className="headername pb-3 text-gray-300 text-sm">
                  TRUSTED GREATLY WORLDWIDE BY
                </div>

                <div className="sponsorBAr flex gap-x-3 items-center">
                  {imagePaths.map((img) => (
                    <Image
                      src={img}
                      alt=""
                      width={100}
                      height={100}
                      key={img}
                    />
                  ))}
                </div>
              </div> */}
              </div>
            </div>
            <div className="lg:relative animationGIF z-10 w-full flex items-center justify-center /bg-blue-500 h-full ">
              <div className="md:w-4/5 md:h-4/5 w-full h-[60%] lg:w-full lg:h-full absolute  lg:p-8 lg:top-0 /bottom-0 md:-bottom-4 bottom-20">
                <World globeConfig={globeConfig} data={sampleArcs} />
              </div>
            </div>
          </div>
        </div>
        <div className="sponsor w-full md:px-40 absolute -bottom-6 z-20 flex  justify-center">
          <div className="grid grid-cols-3  gap-4 md:grid-cols-6 gap-x-7 mt-8">
            {imagePaths.map((imagePath) => (
              <div key={imagePath}>
                {" "}
                <Image alt="" src={imagePath} width={70} height={70} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
