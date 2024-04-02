"use client";
import React, { useEffect, useState } from "react";
import { IconArrowRight, IconMenu2 } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false); // State to track scroll
  const MotionLink = motion(Link);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled more than 100px, then set scrolled state to true
      if (window.scrollY > 70) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  type Nav = {
    name: string;
    path: string;
  }[];

  const navItems: Nav = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Company", path: "/company" },
    { name: "Education", path: "/education" },
    { name: "Resources", path: "/resources" },
  ];

  return (
    <nav
      className={`bg_cont px-8 py-4 flex ;-all items-center fixed top-0 left-0 w-full z-30 justify-between ${
        scrolled
          ? "bg-[#0d1117b8] opacity-100 bg-clip-padding backdrop-filter backdrop-blur-md border-b border-b-white/5"
          : "" // Change background color when scrolled
      }`}
    >
      <div className={`logoname font-bold text-white`}>Investment site</div>
      <div className={`menus hidden lg:flex md:gap-x-3 text-sm`}>
        <AnimatePresence>
          {navItems.map((items) => (
            <motion.div key={items.path}>
              <MotionLink
                href={items.path}
                className={`cursor-pointer transition-all hover:text-white duration-500 ease-out relative ${
                  items.path === pathname
                    ? "font-bold text-green-500"
                    : "text-gray-400"
                }`}
              >
                {" "}
                {items.name}
                {pathname === items.path ? (
                  <motion.div
                    transition={{ type: "spring" }}
                    layoutId="part"
                    className="rounded-full w-3 h-0.5 bg-green-500 bottom-0 mx-auto"
                  ></motion.div>
                ) : null}
              </MotionLink>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="cta hidden lg:block">
        <Button className="text-white px-4 /h-12 bg-[#15833e] flex text-sm rounded-full font-bold items-center gap-x-3 ">
          <span>Get Started</span>{" "}
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
      <div className={`side-panel-trigger lg:hidden cursor-pointer`}>
        <Sheet>
          <SheetTrigger className="text-white">
            <IconMenu2 />
          </SheetTrigger>
          <SheetContent
            className="w-[60%] bg-[#0D1117] border-0 text-white"
            side="left"
          >
            {" "}
            <SheetHeader>
              <SheetTitle className="font-bold text-cen/ter text-white">
                <p>Investment Site</p>
              </SheetTitle>
            </SheetHeader>
            <div className="menus flex flex-col gap-y-1 mt-9">
              <AnimatePresence>
                {navItems.map((item) => (
                  <motion.div
                    key={item.path}
                    className={`py-3 transition-all duration-500 ease-out hover:bg-green-500/5 rounded-sm cursor-pointer ${
                      item.path === pathname ? "/bg-gray-100" : ""
                    }`}
                  >
                    <MotionLink
                      href={item.path}
                      className={`relative px-3 ${
                        item.path === pathname
                          ? "font-bold  text-green-500  "
                          : "text-gray-400"
                      }`}
                    >
                      <motion.span>{item.name}</motion.span>
                      {item.path === pathname ? (
                        <motion.div
                          transition={{ type: "spring" }}
                          layoutId="underline"
                          className="absolute w-0.5 h-5 bg-green-500 rounded-full left-0 top-0 my-auto"
                        ></motion.div>
                      ) : null}
                    </MotionLink>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
