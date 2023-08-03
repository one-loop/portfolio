"use client";

import React, { useEffect } from "react";
import classNames from "classnames";
import { Features } from "../features";
import { Container } from "../container";
import { Button } from "../button";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export const Experience = () => {
    const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: false});

    useEffect(() => {
        const allCards = document.querySelectorAll(".card");

        const experienceSection = document.querySelector('#experience');
        experienceSection.addEventListener("mousemove", (ev) => {
            allCards.forEach((e) => {
                const glow = e.querySelector(".glow") as HTMLElement;
                const fakeGlow = e.querySelector(".fake-glow") as HTMLElement;

                // returns size and position of inner glow
                const rec = fakeGlow.getBoundingClientRect();

                glow.animate(
                    [{
                        transform: `translate(${ev.clientX - rec.left - (rec.width / 2)}px,${ev.clientY - rec.top - (rec.height / 2)}px)`,
                    }],
                    {
                        duration: 50,
                        fill: "forwards",
                    }
                );
            })
        })
    })


    return (
        <>
            {/* <Features color="249,55,107" colorDark="1,47,31"> // dark green */}
            {/* <Features color="249,55,107" colorDark="125,48,10"> // dark orange */}
            {/* <Features color="249,55,107" colorDark="87,11,17"> // dark red */}
            {/* <Features color="249,55,107" colorDark="0,16,58"> // dark blue */}
            <section 
                id="experience"
                ref={ref}
                className={classNames(
                    "after:bg-[radial-gradient(ellipse_100%_40%_at_50%_60%,rgba(var(--feature-color),0.1),transparent) relative flex flex-col items-center overflow-x-hidden overflow-x-clip before:pointer-events-none before:absolute before:h-[40rem] before:w-full before:bg-[conic-gradient(from_90deg_at_80%_50%,#000212,rgb(var(--feature-color-dark))),conic-gradient(from_270deg_at_20%_50%,rgb(var(--feature-color-dark)),#000212)] before:bg-no-repeat before:transition-[transform,opacity] before:duration-[960ms] before:ease before:[mask:radial-gradient(100%_50%_at_center_center,_black,_transparent)] before:[background-size:50%_100%,50%_100%] before:[background-position:1%_0%,99%_0%] after:pointer-events-none after:absolute after:inset-0",
                    inView && "is-visible before:opacity-100 before:[transform:rotate(180deg)_scale(2)]",
                    !inView && "before:opacity-40 before:rotate-180"
                    )} 
                style={
                    {
                        "--feature-color": "0,225,244",
                        "--feature-color-dark": "31,49,64",
                    } as React.CSSProperties
                    }
            >
            <div className="mt-[12.8rem] mb-16 w-full md:mt-[25.2rem]">
                <div className="relative before:absolute before:inset-0 heading-container">
                    <Container
                        className={classNames(
                        "max-w-[90%] text-center",
                        )}
                    >
                        <h2 className="text-gradient translate-y-[100%] pt-[5rem] text-center text-6xl [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] md:pt-0 md:text-8xl md:[.is-visible_&]:translate-y-0 [.is-visible_&]:translate-y-[40%]">
                            Experience
                        </h2>
                    </Container>
                </div>
                <Container className="mt-[8rem] md:mt-[4rem]">
                <div className="cards flex flex-col flex-wrap gap-4 mx-auto items-center">
                    {/* <div className="card mb-[3rem]">
                        <div className="inner group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2018 to Present">2018 — Present</header>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-slate-200"><div><a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="/" target="_blank" rel="noreferrer" aria-label="Software Engineer"><span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>Lead Engineer · <span className="inline-block">Upstatement<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span></span></a></div><div><div className="text-slate-500" aria-hidden="true">Senior Engineer</div></div><div><div className="text-slate-500" aria-hidden="true">Engineer</div></div></h3><p className="mt-2 text-sm leading-normal">Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.</p><ul className="mt-2 flex flex-wrap" aria-label="Technologies used"><li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">React</div></li><li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">React Native</div></li><li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">SCSS</div></li><li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">WordPress</div></li><li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">JavaScript</div></li><li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">TypeScript</div></li><li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">PHP</div></li></ul></div>
                        </div>
                        <div className="glow"></div>
                        <div className="fake-glow"></div>
                    </div> */}
                    <div className="card">
                        <Link href="https://nyuad.nyu.edu/" target="_blank">
                            <div className="inner grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 flex flex-row cursor-pointer">
                                <div className="text-xs text-primary-text sm:col-span-2 mb-2 mt-1 [&_span]:block [&_span]:mb-2">
                                    <span className="uppercase">Aug 2023 — Present</span>
                                </div>
                                <div className="sm:col-span-6">
                                    <h3 className="text-lg">
                                        <span>Student · <span className="inline-block">New York University<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span></span>
                                    </h3>
                                    <span className="text-xs text-primary-text sm:col-span-2 mb-2 mt-1 [&_span]:block [&_span]:mb-2">
                                        Abu Dhabi, UAE 🇦🇪
                                    </span>
                                    <ul className="mt-2 text-sm leading-normal text-primary-text list-disc [&_li]:mb-1">
                                        <li>Currently a freshman majoring in Computer Science and a minor in Economics</li>
                                        <li>Full scholarship. Class of 2027. 4% acceptance rate.</li>
                                        <li>GPA: N/A (not yet released)</li>
                                    </ul>
                                    {/* <div className="mt-2">
                                        <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                            HTML
                                        </span>
                                        <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                            CSS
                                        </span>
                                        <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                            JavaScript
                                        </span>
                                        <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                            Webflow
                                        </span>
                                        <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                            React
                                        </span>
                                        <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                            Webflow
                                        </span>
                                        <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                            Wordpress
                                        </span>
                                        <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                            NextUI
                                        </span>
                                    </div> */}
                                </div>
                            </div>
                            <div className="glow"></div>
                            <div className="fake-glow"></div>
                        </Link>
                    </div>
                    <div className="card">
                        <Link href="https://airae.agency" target="_blank">
                            <div className="inner grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 flex flex-row cursor-pointer">
                                <div className="text-xs text-primary-text sm:col-span-2 mb-2 mt-1 [&_span]:block [&_span]:mb-2">
                                    <span className="uppercase">Jun 2022 — Dec 2022</span>
                                </div>
                                <div className="sm:col-span-6">
                                    <h3 className="text-lg">
                                        <span>Web Developer · <span className="inline-block">Airae Agency<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span></span>
                                    </h3>
                                    <span className="text-xs text-primary-text sm:col-span-2 mb-2 mt-1 [&_span]:block [&_span]:mb-2">
                                        Colombo, Sri Lanka 🇱🇰
                                    </span>
                                    <ul className="mt-2 text-sm leading-normal text-primary-text list-disc [&_li]:mb-1">
                                        <li>Developed responsive and user-friendly websites for diverse clients, ensuring seamless functionality across various devices and browsers.</li>
                                        <li>Collaborated with clients to gather project requirements, translating their vision into practical design solutions and delivering projects within agreed timelines.</li>
                                        <li>Implemented content management systems (CMS) such as WordPress, Joomla, or Drupal, empowering clients to easily update and maintain their websites.</li>
                                        {/* <li>Customized and integrated third-party plugins and APIs to extend website functionality, enhancing performance and enabling seamless data exchange.</li> */}
                                    </ul>
                                    <div className="mt-2">
                                        <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                            HTML
                                        </span>
                                        <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                            CSS
                                        </span>
                                        <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                            JavaScript
                                        </span>
                                        <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                            Webflow
                                        </span>
                                        <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                            React
                                        </span>
                                        <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                            Webflow
                                        </span>
                                        <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                            Wordpress
                                        </span>
                                        <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                            NextUI
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="glow"></div>
                            <div className="fake-glow"></div>
                        </Link>
                    </div>
                    {/* <Button href="resume.pdf" className="text-lg mt-7 z-40" variant="secondary" size="large">
                        <span className="text-[#717ce1 text-off-white">View Full Résumé <span className="arrow ml-1">→</span></span>
                    </Button> */}
                </div>
            </Container>

            </div>

        </section>
        </>
    )
}