"use client"
import React, { useEffect } from "react";
import classnames from "classnames";
import { Features } from "../features";
import { Container } from "../container";
import { Button } from "../button";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export const Projects = () => {
    const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: false});


    useEffect(() => {
        const allCards = document.querySelectorAll(".card");

        const projectsSection = document.querySelector('#projects') as HTMLDivElement;
        projectsSection.addEventListener("mousemove", (ev) => {
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
                    id="projects"
                    ref={ref}
                    className={classnames(
                        "after:bg-[radial-gradient(ellipse_100%_40%_at_50%_60%,rgba(var(--feature-color),0.1),transparent) relative flex flex-col items-center overflow-x-hidden overflow-x-clip before:pointer-events-none before:absolute before:h-[40rem] before:w-full before:bg-[conic-gradient(from_90deg_at_80%_50%,#000212,rgb(var(--feature-color-dark))),conic-gradient(from_270deg_at_20%_50%,rgb(var(--feature-color-dark)),#000212)] before:bg-no-repeat before:transition-[transform,opacity] before:duration-[960ms] before:ease before:[mask:radial-gradient(100%_50%_at_center_center,_black,_transparent)] before:[background-size:50%_100%,50%_100%] before:[background-position:1%_0%,99%_0%] after:pointer-events-none after:absolute after:inset-0",
                        inView && "is-visible before:opacity-100 before:[transform:rotate(180deg)_scale(2)]",
                        !inView && "before:opacity-40 before:rotate-180"
                        )} 
                    style={
                        {
                            "--feature-color": "249,55,107",
                            "--feature-color-dark": "51,6,98",
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
                                <h2 className="text-gradient translate-y-[100%] pt-[5rem] text-center text-6xl [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] md:pt-0 md:text-8xl md:[.is-visible_&]:translate-y-0 [.is-visible_&]:translate-y-[40%]">
                                    Projects
                                </h2>
                            </Container>
                        </div>
                        <Container className="mt-[8rem] md:mt-[4rem]">
                            <div className="cards flex flex-row flex-wrap gap-6 mx-auto items-center">
                                <div className="card [--card-w:100%] sm:[--card-w:calc(50%-(3.2rem/2))] !p-0 [border:1px_solid_rgb(255,255,255,0.08)]">
                                    <Link href="https://avaevolve.vercel.app/#" target="_blank">
                                        <div className="inner !p-0 pb-1 transition-all cursor-pointer">
                                            <div className="overflow-hidden">
                                                <img src="../cards/AVA Card 2.jpg" alt="AVA Evolve project thumbnail" className="card-image h-auto max-h-[300px] w-full object-cover object-top"/>
                                            </div>
                                            <div className="sm:col-span-6 p-5">
                                                <h3 className="text-lg">
                                                    <span>AVA Evolve <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span>
                                                </h3>
                                                <p className="mt-2 text-sm leading-normal text-primary-text">
                                                    I established and developed an interactive entrepreneurship community website that fosters networking, collaboration, and knowledge sharing among entrepreneurs. Additionally, I implemented a fully functional blog section to provide valuable insights, tips, and success stories for entrepreneurs.
                                                </p>
                                                <div className="mt-2">
                                                    <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                                        HTML
                                                    </span>
                                                    <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                                        CSS
                                                    </span>
                                                    <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                                        JS
                                                    </span>
                                                    <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                                        React
                                                    </span>
                                                    <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                                        NextUI
                                                    </span>
                                                    <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                                        Hygraph CMS
                                                    </span>
                                                    <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                                        Hygraph API
                                                    </span>
                                                    <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                                        Vercel
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="glow glow-2"></div>
                                        <div className="fake-glow"></div>
                                    </Link>
                                </div>
                                <div className="card [--card-w:100%] sm:[--card-w:calc(50%-(3.2rem/2))] !p-0 [border:1px_solid_rgb(255,255,255,0.08)]">
                                    <Link href="https://one-loop.github.io/redlookit/" target="_blank">
                                        <div className="inner !p-0 pb-1 transition-all cursor-pointer">
                                            <div className="overflow-hidden">
                                                <img src="../cards/Redlookit Card 2.jpg" alt="Redlookit project thumbnail" className="card-image h-auto max-h-[300px] w-full object-cover object-top"/>
                                            </div>
                                            <div className="sm:col-span-6 p-5">
                                                <h3 className="text-lg">
                                                    <span>Redlookit <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span>
                                                </h3>
                                                <p className="mt-2 text-sm leading-normal text-primary-text">
                                                    Started off as a practice passion project but evolved into a full web application. Redlookit is a third-party web application designed as Microsoft's Outlook email UI and built with the Reddit API, providing users with a unique way to browse Reddit. Its originality attracted over 150,000 users.
                                                </p>
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
                                                        TypeScript
                                                    </span>
                                                    <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                                        Reddit API
                                                    </span>
                                                    <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                                        Webpack
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="glow glow-2"></div>
                                        <div className="fake-glow"></div>
                                    </Link>
                                </div>
                                <div className="card [--card-w:100%] sm:[--card-w:calc(50%-(3.2rem/2))] !p-0 [border:1px_solid_rgb(255,255,255,0.08)]">
                                    <Link href="https://gsomedia.no/" target="_blank">
                                        <div className="inner !p-0 pb-1 transition-all cursor-pointer">
                                            <div className="overflow-hidden">
                                                {/* <img src="https://repository-images.githubusercontent.com/539114541/42d94c47-3530-4b51-bbec-9e363f449308" alt="" className="card-image h-auto max-h-[300px] w-full object-cover object-top"/> */}
                                                <img src="../cards/GSO Card.jpg" alt="GSO Media project thumbnail" className="card-image h-auto max-h-[300px] w-full object-cover object-top"/>
                                            </div>
                                            <div className="sm:col-span-6 p-5">
                                                <h3 className="text-lg">
                                                    <span>GSO Media <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span>
                                                </h3>
                                                <p className="mt-2 text-sm leading-normal text-primary-text">
                                                    For a Norwegian marketing agency client, I developed a dynamic and visually captivating website that showcases their diverse range of services, while incorporating localized elements to appeal to their target audience.
                                                </p>
                                                <div className="mt-2">
                                                    <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                                        Webflow
                                                    </span>
                                                    <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                                        HTML
                                                    </span>
                                                    <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                                        CSS
                                                    </span>
                                                    <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                                        JavaScript
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="glow glow-2"></div>
                                        <div className="fake-glow"></div>
                                    </Link>
                                </div>
                                <div className="card [--card-w:100%] sm:[--card-w:calc(50%-(3.2rem/2))] !p-0 [border:1px_solid_rgb(255,255,255,0.08)]">
                                    <Link href="https://arclighta.com/" target="_blank">
                                        <div className="inner !p-0 pb-1 transition-all cursor-pointer">
                                            <div className="overflow-hidden">
                                                <img src="../cards/Arclight Card.jpg" alt="Arclight Agency project thumbnail" className="card-image h-auto max-h-[300px] w-full object-cover object-top"/>
                                            </div>
                                            <div className="sm:col-span-6 p-5">
                                                <h3 className="text-lg">
                                                    <span>Arclight Agency <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span>
                                                </h3>
                                                <p className="mt-2 text-sm leading-normal text-primary-text">
                                                    Developed a client marketing agency website, leveraging modern design principles and a user-centric approach to showcase the agency's services, drive lead generation, and establish a strong online presence for the business.
                                                </p>
                                                <div className="mt-2">
                                                    <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                                        Webflow
                                                    </span>
                                                    <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                                        HTML
                                                    </span>
                                                    <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                                        CSS
                                                    </span>
                                                    <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                                        JavaScript
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="glow glow-2"></div>
                                        <div className="fake-glow"></div>
                                    </Link>
                                </div>
                                {/* <div className="card [--card-w:100%] sm:[--card-w:calc(50%-(3.2rem/2))] !p-0 [border:1px_solid_rgb(255,255,255,0.08)]">
                                    <Link href="https://airae.agency" target="_blank">
                                        <div className="inner !p-0 pb-1 transition-all cursor-pointer">
                                            <div className="overflow-hidden">
                                                <img src="../cards/Airae Card.jpg" alt="Airae Agency project thumbnail" className="card-image h-auto max-h-[300px] w-full object-cover object-top"/>
                                            </div>
                                            <div className="sm:col-span-6 p-5">
                                                <h3 className="text-lg">
                                                    <span>Airae Agency <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span>
                                                </h3>
                                                <p className="mt-2 text-sm leading-normal text-primary-text">
                                                    Developed a website for my marketing/web development agency, showcasing our diverse range of services, client testimonials, and seamless user interface to attract new clientele and drive business growth.
                                                </p>
                                                <div className="mt-2">
                                                    <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                                        Webflow
                                                    </span>
                                                    <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                                        HTML
                                                    </span>
                                                    <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                                        CSS
                                                    </span>
                                                    <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                                        JavaScript
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="glow glow-2"></div>
                                        <div className="fake-glow"></div>
                                    </Link>
                                </div> */}
                                <div className="card [--card-w:100%] sm:[--card-w:calc(50%-(3.2rem/2))] !p-0 [border:1px_solid_rgb(255,255,255,0.08)]">
                                    <Link href="https://github.com/one-loop/FocusBoostVR" target="_blank">    
                                        <div className="inner !p-0 pb-1 transition-all cursor-pointer">
                                            <div className="overflow-hidden">
                                                <img src="../cards/Focus Boost.png" alt="" className="card-image h-auto max-h-[300px] w-full object-cover object-top"/>
                                            </div>
                                            <div className="sm:col-span-6 p-5">
                                                <h3 className="text-lg">
                                                    <span>FocusBoost VR ADHD Helper</span>
                                                </h3>
                                                <p className="mt-2 text-sm leading-normal text-primary-text">
                                                    A VR Term Project Built in Unity 3D and C# aimed at helping children with ADHD focus and study 
                                                </p>
                                                <div className="mt-2">
                                                    <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                                        Unity
                                                    </span>
                                                    <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                                        C#
                                                    </span>
                                                    <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                                        C++
                                                    </span>
                                                    <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                                        Meta Quest 2
                                                    </span>
                                                    <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                                        Oculus
                                                    </span>
                                                    <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
                                                        VR
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="glow glow-2"></div>
                                        <div className="fake-glow"></div>
                                    </Link>
                                </div>
                                <Button href="https://github.com/one-loop?tab=repositories" target="_blank" className="text-lg mt-7 z-40 mx-auto" variant="secondary" size="large">
                                    <span className="text-[#717ce1 text-off-white">View All Projects<span className="arrow ml-1">→</span></span>
                                </Button>
                            </div>
                        </Container>
                    </div>
            </section>
        </>
    )
}
