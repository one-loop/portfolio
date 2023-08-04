// "use client"
// import React, { useEffect } from "react";
// import classnames from "classnames";
// import { Features } from "../features";
// import { Container } from "../container";
// import { Button } from "../button";
// import Link from "next/link";

// export const Experience = () => {
//     useEffect(() => {
//         const allCards = document.querySelectorAll(".card");

//         window.addEventListener("mousemove", (ev) => {
//             allCards.forEach((e) => {
//                 const glow = e.querySelector(".glow") as HTMLElement;
//                 const fakeGlow = e.querySelector(".fake-glow") as HTMLElement;

//                 // returns size and position of inner glow
//                 const rec = fakeGlow.getBoundingClientRect();

//                 glow.animate(
//                     [{
//                         transform: `translate(${ev.clientX - rec.left - (rec.width / 2)}px,${ev.clientY - rec.top - (rec.height / 2)}px)`,
//                     }],
//                     {
//                         duration: 300,
//                         fill: "forwards",
//                     }
//                 );
//             })
//         })
//     })


//     return (
//         <>
//             {/* <h1 className="text-5xl">Cards</h1>
//             <div className="cards flex flex-row gap-2">
//                 <div className="card [--card-w:32.5rem] [--card-h:28rem] bg-[rgba(128_128_128_0.2)] p-[1px] rounded-[12px] w-[var(--card-w)] h-[var(--card-h)] relative overflow-hidden z-10">
//                     <div className="inner bg-[rgba(22,27,34,0.8)] rounded-[12px] p-6 w-[100%]] h-[100%]">
//                         <h1 className="text-md">Hello World</h1>
//                         <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ut</p>
//                     </div>
//                     <div className="glow [--card-w:32.5rem] [--card-h:28rem] blur-[180px] absolute z-[-1] top-0 left-0 w-[var(--card-w)] h-[var(--card-h)] rounded-full bg-[#ffa28b]"></div>
//                     <div className="fake-glow hidden absolute z-[-1] top-0 left-0 w-[20rem] h-[20rem] rounded-full"></div>
//                 </div>
//             </div> */}
//             <div id="experience">
//                 {/* dark teal */}
//                 <Features color="0,225,244" colorDark="31,49,64">
//                 {/* dark green */}
//                 {/* <Features color="249,55,107" colorDark="1,47,31"> */}
//                 {/* dark orange */}
//                 {/* <Features color="249,55,107" colorDark="125,48,10"> */}
//                 {/* dark red */}
//                 {/* <Features color="249,55,107" colorDark="87,11,17"> */}
//                 {/* dark blue */}
//                 {/* <Features color="249,55,107" colorDark="0,16,58"> */}
//                     <Features.Title title={"Experience"} />
//                 </Features>
//             </div>
//             <Container>
//                 <div className="cards flex flex-col flex-wrap gap-4 mx-auto items-center">
//                     {/* <div className="card mb-[3rem]">
//                         <div className="inner group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
//                             <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
//                             <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2018 to Present">2018 — Present</header>
//                             <div className="z-10 sm:col-span-6">
//                                 <h3 className="font-medium leading-snug text-slate-200"><div><a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://upstatement.com" target="_blank" rel="noreferrer" aria-label="Lead Engineer at Upstatement"><span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>Lead Engineer · <span className="inline-block">Upstatement<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span></span></a></div><div><div className="text-slate-500" aria-hidden="true">Senior Engineer</div></div><div><div className="text-slate-500" aria-hidden="true">Engineer</div></div></h3><p className="mt-2 text-sm leading-normal">Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.</p><ul className="mt-2 flex flex-wrap" aria-label="Technologies used"><li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">React</div></li><li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">React Native</div></li><li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">SCSS</div></li><li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">WordPress</div></li><li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">JavaScript</div></li><li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">TypeScript</div></li><li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">PHP</div></li></ul></div>
//                         </div>
//                         <div className="glow"></div>
//                         <div className="fake-glow"></div>
//                     </div> */}
//                     <div className="card">
//                         <Link href="https://apple.com" target="_blank">
//                             <div className="inner grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 flex flex-row cursor-pointer">
//                                 <div className="text-xs text-primary-text sm:col-span-2 mb-2 mt-1 [&_span]:block [&_span]:mb-2">
//                                     <span className="uppercase">2022 — Present</span>
//                                 </div>
//                                 <div className="sm:col-span-6">
//                                     <h3 className="text-lg">
//                                         <span>Software Engineer · <span className="inline-block">Apple<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span></span>
//                                     </h3>
//                                     <span className="text-xs text-primary-text sm:col-span-2 mb-2 mt-1 [&_span]:block [&_span]:mb-2">
//                                         Palo Alto, California 🇺🇸
//                                     </span>
//                                     <ul className="mt-2 text-sm leading-normal text-primary-text list-disc [&_li]:mb-1">
//                                         <li>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more.</li>
//                                         <li>Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.</li>
//                                     </ul>
//                                     <div className="mt-2">
//                                         <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
//                                             React
//                                         </span>
//                                         <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
//                                             Webflow
//                                         </span>
//                                         <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
//                                             TypeScript
//                                         </span>
//                                         <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
//                                             Threejs
//                                         </span>
//                                         <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
//                                             Blender
//                                         </span>
//                                         <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
//                                             WordPress
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="glow"></div>
//                             <div className="fake-glow"></div>
//                         </Link>
//                     </div>
//                     <div className="card">
//                         <Link href="https://google.com" target="_blank">
//                             <div className="inner grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 flex flex-row cursor-pointer">
//                                 <div className="text-xs text-primary-text sm:col-span-2 mb-2 mt-1 [&_span]:block [&_span]:mb-2">
//                                     <span className="uppercase">June 2021 — Aug 2021</span>
//                                 </div>
//                                 <div className="sm:col-span-6">
//                                     <h3 className="text-lg">
//                                         <span>Software Engineer Intern · <span className="inline-block">Google<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span></span>
//                                     </h3>
//                                     <span className="text-xs text-primary-text sm:col-span-2 mb-2 mt-1 [&_span]:block [&_span]:mb-2">
//                                         Dubai, UAE 🇦🇪
//                                     </span>
//                                     <ul className="mt-2 text-sm leading-normal text-primary-text list-disc [&_li]:mb-1">
//                                         <li>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more.</li>
//                                         <li>Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.</li>
//                                     </ul>
//                                     <div className="mt-2">
//                                         <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
//                                             Python
//                                         </span>
//                                         <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
//                                             NodeJS
//                                         </span>
//                                         <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
//                                             MongoDB
//                                         </span>
//                                         <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
//                                             UI/UX
//                                         </span>
//                                         <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
//                                             Express
//                                         </span>
//                                         <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
//                                             NextJS
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="glow"></div>
//                             <div className="fake-glow"></div>
//                         </Link>
//                     </div>
//                     <div className="card">
//                         <Link href="https://www.goldmansachs.com/" target="_blank">
//                             <div className="inner grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 flex flex-row cursor-pointer">
//                                 <div className="text-xs text-primary-text sm:col-span-2 mb-2 mt-1 [&_span]:block [&_span]:mb-2">
//                                     <span className="uppercase">Jun 2020 — Dec 2020</span>
//                                 </div>
//                                 <div className="sm:col-span-6">
//                                     <h3 className="text-lg">
//                                         <span>Quantitative Developer Intern · <span className="inline-block">Goldman Sachs<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span></span>
//                                     </h3>
//                                     <span className="text-xs text-primary-text sm:col-span-2 mb-2 mt-1 [&_span]:block [&_span]:mb-2">
//                                         New York, USA 🇺🇸
//                                     </span>
//                                     <ul className="mt-2 text-sm leading-normal text-primary-text md:list-disc [&_li]:mb-1">
//                                         <li>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more.</li>
//                                         <li>Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.</li>
//                                     </ul>
//                                     <div className="mt-2">
//                                         <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
//                                             React
//                                         </span>
//                                         <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
//                                             Webflow
//                                         </span>
//                                         <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
//                                             TypeScript
//                                         </span>
//                                         <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
//                                             Threejs
//                                         </span>
//                                         <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
//                                             Blender
//                                         </span>
//                                         <span className="relative inline-flex items-center mt-2 mr-2 rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in [&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 text-xs px-3 h-7">
//                                             WordPress
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="glow"></div>
//                             <div className="fake-glow"></div>
//                         </Link>
//                     </div>
//                     <div className="card">
//                         <Link href="https://www.goldmansachs.com/" target="_blank">
//                             <div className="inner grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 flex flex-row cursor-pointer">
//                                 <div className="text-xs text-primary-text sm:col-span-2 mb-2 mt-1 [&_span]:block [&_span]:mb-2">
//                                     <span className="uppercase">Jun 2020 — Dec 2020</span>
//                                 </div>
//                                 <div className="sm:col-span-6">
//                                     <h3 className="text-lg">
//                                         <span>Research Assistant · <span className="inline-block">New York University<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span></span>
//                                     </h3>
//                                     <span className="text-xs text-primary-text sm:col-span-2 mb-2 mt-1 [&_span]:block [&_span]:mb-2">
//                                         New York, USA 🇺🇸
//                                     </span>
//                                     <ul className="mt-2 text-sm leading-normal text-primary-text md:list-disc [&_li]:mb-1">
//                                         <li>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more.</li>
//                                         <li>Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.</li>
//                                     </ul>
//                                 </div>
//                             </div>
//                             <div className="glow"></div>
//                             <div className="fake-glow"></div>
//                         </Link>
//                     </div>
//                     <Button href="resume.pdf" className="text-lg mt-7 z-40" variant="secondary" size="large">
//                         {/* <span className="animated-text !hover:text-primary-text transition-[color]">View Full Résumé <span className="arrow">→</span></span> */}
//                         <span className="text-[#717ce1 text-off-white">View Full Résumé <span className="arrow">→</span></span>
//                     </Button>
//                 </div>
//             </Container>
//         </>
//     )
// }
