import Image from "next/image";
import React from "react";
import Line from "../Line";
import Wcuuno from "./wcuuno";

export default function Wcu() {
  return (
    <div className="px-8 md:px-5 relative w-full">
      <Line className="cont flex justify-center w-full left-0 absolute top-0" />
      <div className="headertext pt-8 md:pb-8">
        <div className="main text-3xl md:text-4xl font-bold text-center">
          <span className="text-green-600">Distinguished</span> From the{" "}
          <span className="/text-green-600">Rest</span>
        </div>
      </div>
      <Wcuuno />
    </div>
  );
}
