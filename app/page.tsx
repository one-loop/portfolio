import { Button, Highlight } from '@/components/button';
import { Container } from '../components/container';
import { Skills } from "../components/sections/skills";
import { StarsIllustration } from '@/components/icons/stars';
import classNames from "classnames";
import { HomepageHero } from '@/components/sections/homepage-hero';
import { Contact } from '@/components/sections/contact';
import { Projects } from '@/components/sections/projects';
import { About } from '@/components/sections/about';
import { Experience } from '@/components/sections/experience';


export default function Homepage() {
  return (
    <>
      <div className="overflow-hidden pb-[6.25rem] md:pb-[16rem] md:h-[calc(100vh-48px)]">
        <Container className="pt-[11.4rem]">
          <HomepageHero />
        </Container>
      </div>
      <About />
      <Container >
        <Skills />
      </Container>
      <div className={classNames(
            "z-[-1] mask-radial-faded pointer-events-none relative my-[-12.8rem] mb-[-25rem] h-[60rem] overflow-hidden max-w-[100rem] w-auto mx-auto [&_svg]:absolute [&_svg]:top-[50%] [&_svg]:left-[50%] [&_svg]:translate-x-[-50%] [&_svg]:translate-y-[-50%]",
            "[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.8]",
            "after:absolute after:top-1/2 after:-left-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background"
          )}>
          <StarsIllustration />
      </div>
      <Experience />
      <Projects />
      <div className="[background-image:url(https://linear.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter.5e158556.jpg&w=3840&q=75)] [background-position:50%_20%] bg-no-repeat">
        <Contact />
      </div>
    </>
  );
}
