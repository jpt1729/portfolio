"use client";
import React from "react";
import { motion } from "framer-motion";
import Clock from "react-live-clock";

import { ContactCard, AboutCard, PhotoCard } from "@/components/HomeCards";
import { headingFont } from "@/lib/fonts";
import { animationTime, animationDelay } from "@/lib/animationUtils";
import Background from "@/components/bg";

export default function Home() {
  return (
    <>
      <Background />
      <main className="w-full h-[calc(100vh-4rem)] lg:grid flex flex-col gap-5 lg:grid-rows-2 md:px-5 px-2">
        <div className="flex justify-center items-center">
          <h1
            className={`${headingFont.className} w-full lg:text-8xl text-4xl`}
          >
            <span className="w-full flex justify-between items-baseline overflow-y-hidden">
              <motion.span
                initial={{
                  y: "100%",
                }}
                animate={{ y: 0 }}
                transition={{ duration: animationTime, type: "spring" }}
                className="text-color-1 lg:text-9xl text-5xl"
              >
                John
              </motion.span>
              <motion.span
                initial={{
                  y: "100%",
                }}
                animate={{ y: 0 }}
                transition={{ duration: animationTime, type: "spring" }}
                className="md:block hidden"
              >
                <Clock
                  format={"h:mm"}
                  ticking={true}
                />
              </motion.span>
            </span>
            <span className="w-full flex justify-between overflow-y-hidden">
              <motion.span
                initial={{
                  y: "100%",
                }}
                animate={{ y: 0 }}
                transition={{
                  duration: animationTime + animationDelay,
                  type: "spring",
                }}
              >
                Tan-Aristy
              </motion.span>
              <motion.span
                initial={{
                  y: "100%",
                }}
                animate={{ y: 0 }}
                transition={{
                  duration: animationTime + animationDelay,
                  type: "spring",
                }}
                className="text-color-1 md:block hidden"
              >
                {new Date().getHours() > 12 ? "PM" : "AM"}
              </motion.span>
            </span>
          </h1>
        </div>
        <div className="flex gap-5 mb-5 justify-center lg:flex-nowrap flex-wrap w-full">
          <PhotoCard />
          <AboutCard />
          <ContactCard />
        </div>
      </main>
    </>
  );
}
