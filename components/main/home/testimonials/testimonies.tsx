import { CardStack } from "@/components/ui/cardStack";
import React from "react";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Line from "../Line";

export default function Testimonies() {
  return (
    <div className="relative w-full">
      {" "}
      <Line className="cont flex justify-center absolute -top-14 w-full" />
      <div className="osciliate_holder md:-top-80 left-0 absolute w-full opacity-10 /animate-pulse">
        <Image
          alt=""
          src={"/assets/main/sssvgs/oooscillate.svg"}
          width={1000}
          height={1000}
          className="w-full h-full "
        />{" "}
      </div>
      <div className="grid gridco1 md:grid-cols-2 my-14">
        <div className="text pl-8">
          <div className="header text-3xl font-bold">
            Simply the <span className="text-green-600">Best.</span>
          </div>
          <div className="subtext text-gray-400 font-semibold mt-4 /text-sm w-5/6">
            With millions of crypto investors all over the world, we have
            satified each and every one of our users in more ways than one. We
            have been persistent over the years in making [site name] home for
            crypto investors and all.
          </div>
          <div className="sponsors grid grid-cols-3 items-center mt-8">
            <div>
              <Image
                alt=""
                src={"/assets/main/sponsors/trustpilot.png"}
                width={100}
                height={100}
              />
            </div>
            <div>
              {" "}
              <Image
                alt=""
                src={"/assets/main/sponsors/marketwatch.svg"}
                width={100}
                height={100}
              />
            </div>
            <div>
              <Image
                alt=""
                src={"/assets/main/sponsors/reuters.svg"}
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className="stack flex justify-center mt-10 md:mt-0">
          <CardStack items={CARDS} />
        </div>
      </div>
    </div>
  );
}
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-700/[0.11] rounded-md text-green-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <p>
        These cards are amazing, <Highlight>I want to use them</Highlight> in my
        project. Framer motion is a godsend ngl tbh fam 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        I dont like this Twitter thing,{" "}
        <Highlight>deleting it right away</Highlight> because yolo. Instead, I
        would like to call it <Highlight>X.com</Highlight> so that it can easily
        be confused with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of
        <Highlight>Fight Club</Highlight> is that you do not talk about fight
        club. The second rule of
        <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
];
