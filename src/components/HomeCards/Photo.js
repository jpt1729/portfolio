import Image from "next/image";

import styles from './Card.module.css'

import { paragraphFont, headingFont } from "@/lib/fonts";

import { motion } from "framer-motion";

export default function PhotoCard({}) {
  return (
    
      <div className={`bg-color-5 rounded-2xl flex md:flex-row flex-col gap-2 lg:h-full md:w-auto w-full md:aspect-[11/5] p-2 ${styles.PhotoCard}`}>
        <div className="rounded-2xl relative aspect-[16/9] h-full">
          <Image
            src="/images/BostonCity17.jpg"
            className="rounded-xl"
            alt="People walking around Boston cross walk"
            fill={true}
          />
          <span className={`${headingFont.className} md:text-lg text-sm absolute left-2 bottom-1 text-color-5`}>
            42.357409, -71.092878
          </span>
        </div>
        <div className="bg-color-4 rounded-xl flex flex-col justify-between text-color-1 p-2 lg:w-3/4 w-full">
          <p className={`${paragraphFont.className} font-semibold text-[13px]`}>
            A photo I took while on vacation in Boston. I love this photo
            because it is a snapshot of the atmosphere. <br/><br/> Truly one of my favorite
            photos I took on that trip.
          </p>
          <div className="flex md:flex-col md:justify-normal justify-between">
            <span className={`${headingFont.className} text-xs`}>
              Boston, MA
            </span>
            <span className={`${paragraphFont.className} text-xs font-bold`}>
              August 2023
            </span>
          </div>
        </div>
      </div>
  );
}
