"use client";
import { InfiniteMovingCards } from "@/components/ui/infiniteMovingCards";
import React from "react";
import CountUp from "react-countup";

export default function CountupDisc() {
  type countUps = { name: string; value: number; plus: boolean }[];
  type imageSlider = {
    id: number;
    path: string;
  }[];
  const countUp: countUps = [
    { name: "Markets", value: 1900, plus: true },
    { name: "Countries", value: 45, plus: false },
    { name: "Currencies", value: 36, plus: false },
  ];
  const imagePaths: imageSlider = [
    { id: 1, path: "/assets/main/sssvgs/AAVE.svg" },
    { id: 2, path: "/assets/main/sssvgs/BTC.svg" },
    { id: 3, path: "/assets/main/sssvgs/DOGE.svg" },
    { id: 4, path: "/assets/main/sssvgs/ETH.svg" },
    { id: 5, path: "/assets/main/sssvgs/ADA.svg" },
  ];
  const imagePathstwo: imageSlider = [
    { id: 6, path: "/assets/main/sssvgs/SOL.svg" },
    { id: 7, path: "/assets/main/sssvgs/TRX.svg" },
    { id: 8, path: "/assets/main/sssvgs/BCH.svg" },
    { id: 9, path: "/assets/main/sssvgs/SHIB.svg" },
    { id: 10, path: "/assets/main/sssvgs/USDT.svg" },
  ];
  return (
    <div className="pt-20">
      <div className="gridcont grid grid-cols-1 gap-x-3 md:grid-cols-2 pb-5">
        <div className=" mx-8">
          <div className="lg:text-6xl md:text-5xl text-4xl font-bold text-white/90">
            Discover a World of{" "}
            <div className="text-green-600">Opportunities.</div>
          </div>
          <div className="smaller-text md:text-base text-sm text-gray-400 font-medium mt-4  md:w-4/5">
            Get your Hands on our automated trading platform giving our users
            the potential to generate financial returns on both rising and
            falling prices across all financial markets globally.
          </div>
          <div className="countup_figures mt-10">
            <div className="figurescnt grid grid-cols-3 gap-x-3 /text-center">
              {countUp.map((countdivs) => (
                <div key={countdivs.value} className=" rounded-md">
                  <div className="text-green-600 text-lg font-black">
                    <CountUp
                      end={countdivs.value}
                      duration={5}
                      start={0}
                      decimal=","
                      enableScrollSpy
                    />
                    {countdivs.plus && "+"}
                  </div>
                  <div className="font-medium text-sm text-gray-400">
                    {countdivs.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="slides px-2 md:px-16">
          {" "}
          <div className="h-1/2">
            {" "}
            <InfiniteMovingCards
              items={imagePaths}
              direction="right"
              speed="normal"
            />
          </div>
          <div className="h-1/2">
            {" "}
            <InfiniteMovingCards
              items={imagePathstwo}
              direction="left"
              speed="normal"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
