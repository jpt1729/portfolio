"use client";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";

export default function Background({}) {
  const [bgCoords, setBgCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveRandomly = () => {
      const randomnessFactor = 75;
      // Generate random values for x and y within a 500x500 grid
      const randomX = Math.random() * randomnessFactor;
      const randomY = Math.random() * randomnessFactor;

      // Animate the motion.div to the random x and y values
      setBgCoords({ x: randomX, y: randomY });

      // Set a timeout to call the moveRandomly function again
      setTimeout(moveRandomly, 5000); // Adjust the timeout based on your needs
    };

    // Start the initial animation
    moveRandomly();
  }, []);
  return (
    <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden -z-50">
      <motion.div
        id="dotGrid"
        className="relative -z-50 top-0 left-0 w-[200vw] h-[200vh]"
        animate={{ x: bgCoords.x - 100, y: bgCoords.y - 100 }}
        transition={{
          animationTime: 5,
        }}
      ></motion.div>
    </div>
  );
}
