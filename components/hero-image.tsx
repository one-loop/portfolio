"use client";

import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import { CSSProperties, useEffect, useState, useRef } from "react";

const randomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

interface Line {
  id: string,
  direction:  "to bottom" | "to right",
  size: number,
  duration: number 
}

export const HeroImage = () => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  // const [lines, setLines] = useState<Line[]>([]); // create random lines
  // const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // // check if at least 40% of hero image is in view

  // const removeLine = (id: string) => {
  //   setLines((prev) => prev.filter((line) => line.id !== id));
  // };

  // useEffect(() => {
  //   if (!inView) return;

  //   const renderLine = (timeout: number) => {
  //     timeoutRef.current = setTimeout(() => {
  //       setLines((lines) => [
  //         ...lines,
  //         {
  //           direction: Math.random() > 0.5 ? "to bottom" : "to right",
  //           duration: randomNumberBetween(1300, 3500),
  //           size: randomNumberBetween(10, 30),
  //           id: Math.random().toString(36).substring(7),
  //         },
  //       ]);

  //       renderLine(randomNumberBetween(800, 2500));
  //     }, timeout);
  //   };

  //   renderLine(randomNumberBetween(800, 1300));

  //   return () => {
  //     if (timeoutRef.current) clearTimeout(timeoutRef.current);
  //   };
  // }, [inView, setLines]);

  return (
    <div ref={ref} className="mt-[12.8rem] md:my-auto md:flex md:items-center [perspective:2000px] rounded-full w-[30rem] h-[30rem]">
      <div
        className={classNames(
          "relative border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient rounded-full",
          inView ? "animate-image-rotate" : "[transform:rotateX(25deg)]",
          "before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-hero-glow before:opacity-0 before:[filter:blur(120px)]",
          inView && "before:animate-image-glow"
        )}
      >
        <svg
          className={classNames(
            "absolute left-0 top-0 h-full w-full",
            "[&_path]:stroke-white [&_path]:[stroke-opacity:0.2] [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1]",
            // inView && "[&_path]:animate-sketch-lines"
          )}
          width="100%"
          viewBox="0 0 1499 778"
          fill="none"
        >
          <path pathLength="1" d="M1500 72L220 72"></path>
          <path pathLength="1" d="M1500 128L220 128"></path>
          <path pathLength="1" d="M1500 189L220 189"></path>
          <path pathLength="1" d="M220 777L220 1"></path>
          <path pathLength="1" d="M538 777L538 128"></path>
        </svg>

        <img
          className={classNames(
            "relative z-10 transition-opacity delay-[680ms] rounded-full w-[30rem] h-[30rem] pointer-events-none",
            inView ? "opacity-100" : "opacity-0"
          )}
          // src="/macintosh-favicon.png"
          // src="/memoji 1.png"
          // src="/memoji 2.png"
          src="/memoji 3.png"
          // src="/memoji 4.png"
          // src="https://avatars.githubusercontent.com/u/78092430?v=4"
          alt="Hero image"
        />
      </div>
    </div>
  );
};