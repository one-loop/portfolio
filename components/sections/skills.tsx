import { NextJSLogo } from "../logos/nextjs";
import { GitLogo } from "../logos/git";
import { ReactLogo } from "../logos/react";
import { NodeJSLogo } from "../logos/nodejs";
import { CSSLogo } from "../logos/css";
import { TailwindLogo } from "../logos/tailwind";
import { FigmaLogo } from "../logos/figma";
// import { MongoLogo } from "../logos/mongo";
import { CpluplusLogo } from "../logos/cplusplus";
import { HTMLLogo } from "../logos/html";
import { PythonLogo } from "../logos/python";
import { BootstrapLogo } from "../logos/bootstrap";
import { JavaScriptLogo } from "../logos/java-script";

export const Skills = () => (
  <>
    <div className="h-[20rem] absolute mt-[-20rem]" id="skills"/>
    <h2 className="mb-4 text-4xl md:mb-7 md:text-7xl text-center">
      Skills
    </h2>
    <p className="text-lg md:text-xl text-primary-text text-center mb-12">
        I'm continuing to learn and grow
    </p>
    <div className="flex [&_svg]:min-w-[10rem] md:[&_svg]:min-w-[16rem] flex-wrap gap-x-6 gap-y-8 justify-around  [&_svg]:basis-[calc(50%-12 px)] md:[&_svg]:basis-[calc(16.66%-20px)] items-center">
         <HTMLLogo />
         <CSSLogo className="hidden md:block"/>
         <JavaScriptLogo />
         <NodeJSLogo className="hidden md:block"/>
         <CplusplusLogo />
         <PythonLogo />
         <ReactLogo />
         <TailwindLogo />
         <BootstrapLogo className="hidden md:visible" />
         <NextJSLogo className="hidden md:visible"/>
         <GitLogo className="hidden md:visible"/>
         <FigmaLogo className="hidden md:visible"/>
{/*          <MongoLogo className="hidden md:visible" /> */}
    </div>
  </>
)
