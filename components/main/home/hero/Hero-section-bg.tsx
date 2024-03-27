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
import TickerTV from "./TickerTV";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faTelegramPlane,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  IconBrandFacebook,
  IconBrandFacebookFilled,
} from "@tabler/icons-react";
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
            <div className="textxbtn font-bold md:h-full flex items-center relative lg:pl-7 w-full z-20">
              <div className="textcont">
                <div className="textheader text-white/90 font-black">
                  <TextGenerateEffect
                    words="The #1 Leading Crypto Investment Platform"
                    className="lg:text-5xl md:text-4xl px-3 md:px-0 text-3xl lg:text-left text-center tracking-tighter text-balance"
                  />
                  <TextGenerateEffect
                    words="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique iure, blanditiis minima excepturi asperiores expedita."
                    className="md:text-base text-sm text-center lg:text-left text-gray-300 font-medium /lg:w-5/6 mt-2 px-2 md:px-0 text-balance"
                  />
                </div>

                <div className="cta relative flex gap-x-4 items-center justify-center lg:justify-start mt-8 z-20">
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
                <div className="socials hidden lg:block mt-9  absolute left-8 bottom-14">
                  <div className="socialcont flex items-center gap-x-5 justify-be/tween w-1/2">
                    <div className="facebook flex items-center gap-x-2 opacity-30 hover:opacity-100 transition-all cursor-pointer">
                      <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
                      {/* <p>Facebook</p> */}
                    </div>
                    <div className="telegram flex items-center gap-x-2 opacity-30 hover:opacity-100 transition-all cursor-pointer">
                      <FontAwesomeIcon
                        icon={faTelegramPlane}
                        className="w-5 h-5"
                      />
                      {/* <p>Telegram</p> */}
                    </div>
                    <div className="telegram flex items-center gap-x-2 opacity-30 hover:opacity-100 transition-all cursor-pointer">
                      <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
                      {/* <p>Telegram</p> */}
                    </div>
                    <div className="telegram flex items-center gap-x-2 opacity-30 hover:opacity-100 transition-all cursor-pointer">
                      <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                      {/* <p>Telegram</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:relative animationGIF z-10 w-full flex items-center justify-center /bg-blue-500 h-full ">
              <div className="md:w-4/5 md:h-4/5 w-full h-[60%] lg:w-full lg:h-full absolute  lg:p-8 lg:top-0 /bottom-0 md:-bottom-4 bottom-20">
                <World globeConfig={globeConfig} data={sampleArcs} />
              </div>
              <div className="socials absolute bottom-14 lg:hidden  mt-3 flex justify-center">
                <div className="socialcont flex items-center gap-x-5 justify-be/tween">
                  <div className="facebook flex items-center gap-x-2 opacity-30 hover:opacity-100 transition-all cursor-pointer">
                    <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
                    {/* <p>Facebook</p> */}
                  </div>
                  <div className="telegram flex items-center gap-x-2 opacity-30 hover:opacity-100 transition-all cursor-pointer">
                    <FontAwesomeIcon
                      icon={faTelegramPlane}
                      className="w-5 h-5"
                    />
                    {/* <p>Telegram</p> */}
                  </div>
                  <div className="telegram flex items-center gap-x-2 opacity-30 hover:opacity-100 transition-all cursor-pointer">
                    <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
                    {/* <p>Telegram</p> */}
                  </div>
                  <div className="telegram flex items-center gap-x-2 opacity-30 hover:opacity-100 transition-all cursor-pointer">
                    <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                    {/* <p>Telegram</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
