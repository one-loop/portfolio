"use client"
import Link from "next/link";
import { Button, Highlight } from "../button";
import { Hero, HeroTitle, HeroSubtitle } from "../hero";
import { HeroImage } from "../hero-image";
import { ChevronIcon } from "../icons/chevron";
import { GithubLogo } from "../logos/github";
import { LinkedinLogo } from "../logos/linkedin";
import { Container } from "../container";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";



export const HomepageHero = () => {
  const { ref, inView } = useInView({ threshold: 1, triggerOnce: false});

  return (
  <Container>
    <Hero>
      <div className="flex flex-col md:flex-row md:justify-around items-center">
        <div>
          <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] text-center md:text-left">
            Saad Sifar
          {/* <br className="" />Software Devloper  */}
          </HeroTitle>
          <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] text-center md:text-left">
            Hey there! I'm a Computer Science student at NYU. <br className="hidden md:block"/>
            I'm passionate about building truly great software.
          </HeroSubtitle>
          <div className="fill-primary-text [&_svg]:w-[2.8rem] [&_svg]:inline [&_svg]:mr-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] flex flex-col md:flex-row gap-4 md:gap-0 items-center z-40">
            {/* <Button href="resume.pdf" className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] text-lg !rounded-[12px]" variant="secondary" size="large">
                <span className="text-[#717ce1 text-off-white">Download CV <span className="arrow">→</span></span>
            </Button> */}
            <Button href="#contact" className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] text-lg !rounded-[12px]" variant="secondary" size="large">
                {/* <span className="animated-text !hover:text-primary-text transition-[color]">View Full Résumé <span className="arrow">→</span></span> */}
                <span className="text-[#717ce1 text-off-white user-select-none">Contact Me <span className="arrow">→</span></span>
            </Button>
            <div className="inline-block hidden md:block">
              <span className="mx-8 border-l-[1px] border-off-white opacity-20 block h-[35px] my-auto"></span>
            </div>
            <div>
              <Link href="https://www.linkedin.com/in/saad-sifar" target="_blank" className="hover:fill-off-white [transition:fill_0.2s_ease]"><LinkedinLogo/></Link>
              <Link href="https://www.github.com/saad-sifar" target="_blank" className="hover:fill-off-white [transition:fill_0.2s_ease]"><GithubLogo/></Link>
            </div>
          </div>
        </div>
        <div>
          <HeroImage />
        </div>
      </div>
    </Hero>
    <Link href="#about" className="block w-[10rem] mx-auto">
      <div className="cursor-pointer w-[10rem] mx-auto mt-[12rem]">
        <div id="scroll-anim" ref={ref} className={classNames(
          "[transition:opacity_0.5s]",
          inView && "opacity-100",
          !inView && "opacity-0",
        )}>
          <p className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms] text-xs text-primary-text relative z-40 mx-auto text-center pointer-events-none">Scroll Down</p>
          <div className="w-[2px] h-[7.5rem] relative mx-auto z-40 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
              {/* <div className="absolute w-full h-[6.4rem] bottom-0 [background:linear-gradient(180deg,#7139b7_0%,transparent_100%)] rounded-[2px]"></div> */}
              <div className="absolute w-full h-[6.4rem] bottom-0 [background:linear-gradient(180deg,#3987b7_0%,transparent_100%)] rounded-[2px]"></div>
              <div className="absolute overflow-hidden top-[1.1rem] h-[1.6rem] w-full bg-white rounded-[2px] scroll-line-animation"></div>
          </div>
        </div>
      </div>
    </Link>
  </Container>
)};