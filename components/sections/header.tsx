"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../button";
import { Container } from "../container";
import { HamburgerIcon } from "../icons/hamburger";
import { Logo } from "../icons/logo";
import classnames from "classnames";

export const Header = () => {
  const [hamburgerMenuIsOpen, setHambugerMenuIsOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setHambugerMenuIsOpen(false);

    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, [setHambugerMenuIsOpen]);

  return (
    <header className="select-none z-50 fixed top-0 left-0 z-10 w-full backdrop-blur-[12px] border-b border-transparent-white">
      <Container className="flex h-navigation-height">
        <Link className="flex items-center text-md [text-shadow:rgba(0,0,0,0.3)_1px_1px_4px,rgba(0,0,0,0.1)_2px_2px_4px]" href="/" onClick={window.scrollTo(0, 0)}>
          saad sifar
        </Link>

        <div
          className={classnames(
            "transition-[visibility] md:visible ml-auto flex h-full items-center",
            hamburgerMenuIsOpen ? "visible" : "delay-500 invisible"
          )}
        >
          <nav
            className={classnames(
              "fixed top-navigation-height left-0 h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background  transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none",
              hamburgerMenuIsOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-[-100vw] opacity-0"
            )}
          >
            <ul
              className={classnames(
                "flex h-full flex-col md:flex-row md:items-center [&_li]:ml-6 [&_li]:border-b [&_li]:border-grey-dark md:[&_li]:border-none [&_li]:[text-shadow:rgba(0,0,0,0.3)_1px_1px_4px,rgba(0,0,0,0.1)_2px_2px_4px]",
                "ease-in [&_a:hover]:text-grey [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:text-lg [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-sm [&_a]:md:transition-colors",
                hamburgerMenuIsOpen && "[&_a]:translate-y-0"
              )}
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#skills">Skills</Link>
              </li>
              <li className="">
                <Link href="#experience">Experience</Link>
              </li>
              <li className="">
                <Link href="#projects">Projects</Link>
              </li>
              <li className="">
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* <div className="ml-auto flex h-full items-center">
          <Link className="mr-6 text-sm" href="#">
            Log in
          </Link>
          <Button href="#">Sign up</Button>
        </div> */}

        <button
          className="ml-6 md:hidden"
          onClick={() => setHambugerMenuIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
};