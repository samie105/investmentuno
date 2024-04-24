"use client";
import React from "react";
import Lottie from "lottie-react";
import animationData from "../../../../public/assets/main/sssvgs/lottiedues.json";
import dynamic from "next/dynamic";
import Image from "next/image";
import CountUp from "react-countup";
import { Button } from "@/components/ui/moving-border";

export default function Wcuuno() {
  const Lottie = dynamic(() => import("lottie-react").then((m) => m.default), {
    ssr: false,
  });
  type gridData = {
    id: number;
    name: string;
    info: string;
    imagePath: string;
    classname: string;
    classnamedues: string;
  }[];
  const grid: gridData = [
    {
      id: 1,
      name: "Execution Speed",
      info: "130ms",
      imagePath: "/assets/main/deadline.png",
      classname: "bottom-2 right-2",
      classnamedues: "top-3 left-1",
    },
    {
      id: 2,

      name: "Support",
      info: "24/7",
      imagePath: "/assets/main/hours.png",
      classname: "bottom-2 left-2",
      classnamedues: "top-3 right-1",
    },
    {
      id: 3,

      name: "Pips Spread",
      info: "0.0",
      imagePath: "/assets/main/configuration.png",
      classname: "top-2 right-2",
      classnamedues: "bottom-3 left-1",
    },
    {
      id: 4,
      name: "Trading Instrument",
      info: "150+",
      imagePath: "/assets/main/chart.png",
      classname: "top-2 left-2",
      classnamedues: "bottom-3 right-1",
    },
  ];
  return (
    <section className="relaive h-full w-full">
      <div className="absolute -top-20  left-0">
        {/* <Image
          height={1000}
          width={1000}
          alt=""
          src={"/assets/main/sssvgs/bbblurry.svg"}
          className="opacity-80 w-full h-full"
        />{" "} */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:h-[60vh] md:px-4 py-8 md:py-0 z-20 md:overflow-hidden">
        {/* <div className="absolute -top-20 left-0">
          <div className="h-60 w-60 bg-green-600 opacity-30 /animate-pulse rounded-full blur-3xl"></div>
        </div> */}

        <div className="w-full z-20 relative">
          <div className="absolute top-7 left-0">
            <Button className="cont-green relative text-/sm w-full rounded-md bg-[#ffffff17] border border-white/10 bg-clip-padding backdrop-filter backdrop-blur-xl /bg-[#349C5B] px-4 py-3 overflow-hidden flex items-center /animate-bounce">
              <div className="inner-circle rounded-full text-xl h-9 w-9 font-bold /bg-[#349C5B] text-[#42FA85] flex items-center justify-center p-3 ">
                <p>
                  {" "}
                  <CountUp end={99} duration={5} start={0} decimal="," />
                </p>
              </div>
              <div className="inner-text text-white/60 pl-2 w-full f/ont-semibold text-base /text-sm /w-full z-20">
                Trading Accuracy
              </div>
            </Button>
          </div>
          <div className="absolute bottom-3 md:bottom-16 right-5">
            <code className="bignumber font-black text-[7rem] text-green-600 opacity-30">
              {" "}
              <CountUp
                end={99}
                duration={5}
                start={0}
                decimal=","
                enableScrollSpy
              />
              <sup className="text-lg">%</sup>
            </code>
          </div>
          <div className=" flex items-center justify-center w-full h-full">
            {" "}
            <Lottie
              animationData={animationData}
              className="w-full h-[27rem] "
            />
          </div>
        </div>

        <div className="textbracket md:h-[50vh] z-20 grid grid-cols-2 gap-2">
          {grid.map((g) => (
            <div key={g.info} className="overflow-hidden relative /py-4">
              {" "}
              <div
                className={`${
                  `bg-[#349C5B] absolute w-8 h-8  rounded-full /opacity-60 ` +
                  g.classnamedues
                }`}
              />{" "}
              <div
                className={`${
                  `bg-[#349C5B] absolute w-7 h-7 blur-xl rounded-full opacity-60 ` +
                  g.classname
                }`}
              />{" "}
              <div className="bg-[#ffffff0d] z-20 border w-full h-full  border-white/10 bg-clip-padding backdrop-filter backdrop-blur-2xl rounded-md  py-4">
                <div className="flex justify-center">
                  <Image
                    height={1000}
                    width={1000}
                    alt=""
                    src={g.imagePath}
                    className="opacity-50 w-16 h-"
                  />
                </div>
                <div className="font-medium md:text-xl text-base mt-2 text-center /text-green-600">
                  {g.id === 3 ? (
                    <CountUp
                      end={Number(g.info)}
                      duration={5}
                      start={9.9}
                      decimal="."
                      decimalPlaces={2}
                      decimals={1}
                    />
                  ) : (
                    <>{g.info}</>
                  )}
                </div>
                <div className="text-white/60 text-center md:text-base text-sm">
                  {g.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
