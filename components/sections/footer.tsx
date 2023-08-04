import Link from "next/link";
import { GithubLogo } from "../logos/github";
import { LinkedinLogo } from "../logos/linkedin";
import { MailLogo } from "../logos/mail";


export const Footer = () => (
  <footer className="text-md text-primary-text text-center py-10 border-t border-transparent-white">
    <p>
      <Link href="https://raw.githubusercontent.com/one-loop/portfolio/main/components/humans.txt" className="text-off-white hover:text-primary-text [transition:color_0.2s] text-sm">Developed by Saad Sifar</Link>
    </p>
    <div className="fill-primary-text [&_svg]:w-[2rem] [&_svg]:inline [&_svg]:mr-4">
          <Link href="https://www.linkedin.com/in/saad-sifar" target="_blank" className="hover:fill-off-white [transition:fill_0.2s_ease]"><LinkedinLogo/></Link>
          <Link href="mailto:ss17886@nyu.edu" target="_blank" className="hover:fill-off-white [transition:fill_0.2s_ease]"><MailLogo/></Link>
          <Link href="https://www.github.com/saad-sifar" target="_blank" className="hover:fill-off-white [transition:fill_0.2s_ease]"><GithubLogo/></Link>
    </div>
  </footer>
);
