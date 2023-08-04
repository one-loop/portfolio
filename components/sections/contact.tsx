"use client";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container } from "../container";
import { Features } from "../features";
import classnames from "classnames";
import { useInView } from "react-intersection-observer";
// import ReCAPTCHA from "react-google-recaptcha";


export const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: false});
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y9mmcit', 'template_jrfa0n8', form.current, 'fEOzzYHLy9Uhf7d-X')
      .then((result) => {
          // console.log('message sent!');
          // console.log(result.text);
          e.target.reset()
      }, (error) => {
          // console.log('message was not sent. Error')
          console.log(error.text);
      });
  };

  function onChange(value: any) {
    console.log("Captcha value:", value);
  }

  return (
    <section 
        id="contact"
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
                      <h2 className="text-gradient translate-y-[100%] pt-[5rem] text-center text-6xl [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] md:pt-0 md:text-8xl md:[.is-visible_&]:translate-y-0 [.is-visible_&]:translate-y-[40%]">
                          Contact
                      </h2>
                  </Container>
              </div>
              <Container className="mt-[8rem] md:mt-[4rem]">
                <div className="text-md flex flex-col items-center justify-center max-w-[550px] w-[90%] mx-auto md:w-[50%] bg-[rgba(255,255,255,0.03)] [border:1px_solid_rgba(255,255,255,0.15)] rounded-[8px] backdrop-blur-[12px]">
                  <div className="[border-bottom:1px_solid_rgba(255,255,255,0.15)] py-4 text-sm px-6 w-full text-primary-text">
                      Have a question, proposal, or just want to say hello? Send me a message!
                  </div>
                  <form className="w-[100%] p-6" id="contact-form" ref={form} onSubmit={sendEmail} action="?" method="POST">
                    <div className="mb-4">
                      <label className="block text-primary-text text-sm font-bold/ mb-2" htmlFor="name">First Name</label>
                      <input type="text" id="name" placeholder="Enter your name" name="from_name" required className="block w-[100%] shadow appearance-none border rounded-[6px] w-full py-2 px-3 text-off-white leading-tight focus:outline-none focus:shadow-outline bg-[rgba(255,255,255,0.03)] [border:1px_solid_rgba(255,255,255,0.1)] [transition:border_0.15s] text-sm hover:[border-color:rgb(60,61,83)] focus:[border-color:rgb(79,82,180)] focus:[border-color:#0284c7]"/>
                    </div>
                    <div className="mb-4">
                      <label className="block text-primary-text text-sm font-bold/ mb-2" htmlFor="email">Email</label>
                      <input type="email" id="email" placeholder="Enter your email" name="email_id" required className="block w-[100%] shadow appearance-none border rounded-[6px] w-full py-2 px-3 text-off-white leading-tight focus:outline-none focus:shadow-outline bg-[rgba(255,255,255,0.03)] [border:1px_solid_rgba(255,255,255,0.1)] [transition:border_0.15s] text-sm hover:[border-color:rgb(60,61,83)] focus:[border-color:rgb(79,82,180)] focus:[border-color:#0284c7]"/>
                    </div>
                    <div className="mb-4">
                      <label className="block text-primary-text text-sm font-bold/ mb-2" htmlFor="message">Message</label>
                      <textarea name="message" id="message" required className="block w-[100%] shadow appearance-none border rounded-[6px] w-full py-2 px-3 text-off-white leading-tight focus:outline-none focus:shadow-outline bg-[rgba(255,255,255,0.03)] [border:1px_solid_rgba(255,255,255,0.1)] [transition:border_0.15s] text-sm [resize:none] h-[10rem] hover:[border-color:rgb(60,61,83)] focus:[border-color:rgb(79,82,180)] focus:[border-color:#0284c7]" placeholder="Type your message"></textarea>
                    </div>
                    {/* Prevent bot form submissions */}
                    {/* <ReCAPTCHA
                      sitekey="6LcyrWgnAAAAACIXG_6J3NSsE10LKS-H9ru6kuNb"
                      onChange={onChange}
                      className="mx-auto flex justify-center"
                    />, */}
                    <div className="flex">
                      <button type="submit" value="Send" data-sitekey="6LcyrWgnAAAAACIXG_6J3NSsE10LKS-H9ru6kuNb" data-callback="onSubmit" className={classnames(
                        "rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in",
                        "[&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2",
                        "text-sm px-4 h-8 mt-2",
                        "mx-auto"
                        )}>
                        Send Message{" "}
                        <span className="arrow inline-block">→</span>
                      </button>
                    </div>
                  </form>
                </div>
              </Container>
          </div>
      </section>
  );
};
