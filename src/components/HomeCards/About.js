import styles from "./Card.module.css";

import { headingFont, paragraphFont } from "@/lib/fonts";

import { motion } from "framer-motion";

export default function AboutCard({}) {
  return (
    <div
      className={`rounded-2xl bg-color-1 text-color-5 py-2 px-5 md:max-w-[300px] w-full md:h-full ${styles.AboutCard}`}
    >
      <h2 className={`text-color-4 text-4xl ${headingFont.className}`}>
        About Me
      </h2>
      <p
        className={`${paragraphFont.className} text-lg font-semibold my-auto`}
      >
        My name is John Tan-Aristy. I am a high school student based in Texas. Some
        things I do in my free time are Brazilian Jiu-Jitsu, photography, and
        bike. 
      </p>
    </div>
  );
}
