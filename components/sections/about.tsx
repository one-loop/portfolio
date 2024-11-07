"use client";

import classnames from "classnames";
import { Button } from "../button"
import { Features } from "../features"
import { Container } from "../container"
// import { RoomModel } from "../room-model"
// import { RoomModel } from "../room-model-basic"
import { RoomModel } from "../room-model-optimized"
import { useInView } from "react-intersection-observer";


export const About = () => {
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false});

    return (
        <>
    <div id="about-section">
    <section
        ref={ref}
        className={classnames(
            "after:bg-[radial-gradient(ellipse_100%_40%_at_50%_60%,rgba(var(--feature-color),0.1),transparent) relative flex flex-col items-center overflow-x-hidden overflow-x-clip before:pointer-events-none before:absolute before:h-[40rem] before:w-full before:bg-[conic-gradient(from_90deg_at_80%_50%,#000212,rgb(var(--feature-color-dark))),conic-gradient(from_270deg_at_20%_50%,rgb(var(--feature-color-dark)),#000212)] before:bg-no-repeat before:transition-[transform,opacity] before:duration-[960ms] before:ease before:[mask:radial-gradient(100%_50%_at_center_center,_black,_transparent)] before:[background-size:50%_100%,50%_100%] before:[background-position:1%_0%,99%_0%] after:pointer-events-none after:absolute after:inset-0",
            inView && "is-visible before:opacity-100 before:[transform:rotate(180deg)_scale(2)]",
            !inView && "before:opacity-40 before:rotate-180"
            )} 
        style={
            {
                "--feature-color": "40,87,255",
                "--feature-color-dark": "48,58,117",
            } as React.CSSProperties
            }
    >
        <div className="mt-[12.8rem] mb-16 w-full md:mt-[25.2rem]">
        <div className="relative before:absolute before:inset-0 heading-container">
          <Container
            className={classnames(
              "max-w-[90%] text-center",
            )}
          >
            <div className="h-[10rem] absolute mt-[-10rem]" id="about"/>
            <h2 id="about" className="text-gradient translate-y-[100%] pt-[5rem] text-center text-6xl [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] md:pt-0 md:text-8xl md:[.is-visible_&]:translate-y-0 [.is-visible_&]:translate-y-[40%]">
              About
            </h2>
          </Container>
        </div>
        <Container>
      <div className="items-center mx-auto my-auto lg:mt-[-12rem] mt-[10rem]">
          <div className="flex lg:flex-row flex-col">
          <div className="lg:w-[50%] w-full my-auto relative pt-5 md:p-0 md:pr-5">
              <h3 className="mb-4 text-xl md:mb-7 md:text-4xl">Hi there 👋</h3>
              <p className="text-lg text-primary-text mb-5">My  name is Saad and I’m currently a sophomore majoring in <span className="highlight">Computer Science</span> at <span className="highlight">New York University</span> in NYU's Abu Dhabi campus. I'm passionate about bridging the gap between <span className="highlight">engineering and design</span> — combining my keen eye for design with my <span className="highlight">technical knowledge</span> to craft something beautiful.</p>
              <p className="text-lg text-primary-text mb-5">When I'm not in front of my computer, I'm probably reading a new book, playing video games, or learning something new. Currently, I'm delving into <span className="highlight">React Development</span>, <span className="highlight">UI Design</span>, and <span className="highlight">3D Modelling</span>.</p>
              <p className="text-lg text-primary-text mb-5">I’m always down for hearing about new projects, so feel free to drop me a line.</p>
              <Button href="#projects" className="text-lg mt-7 z-40 mb-4" variant="secondary" size="large">
                {/* <span className="animated-text !hover:text-primary-text transition-[color]">View my Projects <span className="arrow">→</span></span> */}
                <span className="text-[#717ce1 text-off-white">View my Projects <span className="arrow inline-block">→</span></span>
              </Button>
          </div>
          <div className="w-[95%] min-h-[50%] mx-auto lg:w-[50%] h-[80rem] relative overflow-visible">
            {/* <span className="absolute [--grid-color:#746cf3] [--gradient-opacity:0.3] [--gradient:linear-gradient(92.88deg,#455eb5_9.16%,#5643cc_43.89%,#673fd7_64.72%)] before:absolute after:absolute before:[background-size:24px_24px] before:[background-image:var(--gradient)] h-[800px] w-[800px] before:[background-image:linear-gradient(to_right,_transparent_12px,_#746cf3_13px,_transparent_13px_),_linear-gradient(to_bottom,_transparent_12px,_#746cf3_13px,_transparent_13px))] after:[border-radius:50%] after:[opacity:0.3] after:[filter:blur(50px)] after:[background-image:linear-gradient(92.88deg,#455eb5_9.16%,#5643cc_43.89%,#673fd7_64.72%)]"></span> */}
            <span className={classnames(
              "absolute pointer-events-none [--grid-color:#f3bd6c] [z-index:-1] [--gradient-opacity:0.6] [--grid-size:24px] [--grid-size-half:12px]",
              "[background-size:var(--grid-size)_var(--grid-size)] [background-image:linear-gradient(to_right,_transparent_var(--grid-size-half),_var(--grid-color)_calc(var(--grid-size-half)+1px),_transparent_calc(var(--grid-size-half)+1px)),_linear-gradient(to_bottom,_transparent_var(--grid-size-half),_var(--grid-color)_calc(var(--grid-size-half)+1px),_transparent_calc(var(--grid-size-half)+1px)_)] md:rounded-[50%] h-[80rem] w-[80rem] overflow-clip")}>
            </span>
            <span className="absolute pointer-events-none top-[-200px] [z-index:-1] left-[-200px] h-[1100px] w-[1100px] overflow-x-clip [background:radial-gradient(transparent_0%,#000212_60%)] h-[100%] w-[100%]"></span>
            
            {/* Cool Gradient */}
            <span className="absolute pointer-events-none blur-[50px] [z-index:-1] [--gradient:linear-gradient(124.31deg,#46e3b7_0.18%,#2f7ad0_89.82%)] h-[800px] w-[800px] [background-image:var(--gradient)] md:rounded-[50%] opacity-60 h-[100%] w-[100%] overflow-clip"></span>


            {/* Warm Gradient */}
            {/* <span className="absolute pointer-events-none blur-[50px] [z-index:-1] [--gradient:linear-gradient(285.49deg,#f537f9_-14.61%,#f7c12b_106.06%)] h-[800px] w-[800px] [background-image:var(--gradient)] md:rounded-[50%] opacity-60 h-[100%] w-[100%] overflow-clip"></span> */}
            <span className="absolute pointer-events-none top-[-150px] [z-index:-1] left-[-150px] h-[1100px] w-[1100px] overflow-x-clip [background:radial-gradient(transparent_0%,#000212_60%)] h-[100%] w-[100%]"></span>
            <div className="w-full h-full overflow-hidden flex align-center justify-center" id="canvas-container">
              {/* <video muted autoPlay loop width="0" id="video1" src="/video.mp4" className="opacity-0 absolute top-[50%]"/> */}
              <video muted autoPlay loop width="0" id="video2" src="/codescroll2 720p.mp4" className="opacity-0 absolute top-[50%]"/>
              <RoomModel />
              <Button className="!absolute !bottom-[20%]" variant="secondary" size="large" id="click-object">
                <span className="text-[#717ce1 text-off-white">Click me!
                  <svg width="18" height="18" className="inline-block ml-1" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.8325 2.24968V18.9225H42.55C42.55 10.3443 36.1374 3.2799 27.8325 2.24968ZM8.91 31.5375C8.91 40.8306 16.4369 48.3575 25.73 48.3575C35.023 48.3575 42.55 40.8306 42.55 31.5375V23.1275H8.91V31.5375ZM23.6275 2.24968C15.3226 3.2799 8.91 10.3443 8.91 18.9225H23.6275V2.24968Z" fill="#F7F8F8"/>
                  </svg>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
        </div>
    </section>
    </div>
    </>
    )
}
