"use client";

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container } from "../container";
import { Features } from "../features";
import classnames from "classnames";
import { useInView } from "react-intersection-observer";
// import ReCAPTCHA from "react-google-recaptcha";


export const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: false});
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showLoading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  // const form = useRef();
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (form.current) {
      emailjs
        .sendForm('service_y9mmcit', 'template_jrfa0n8', form.current, 'fEOzzYHLy9Uhf7d-X')
        .then(
          (result) => {
            // console.log('message sent!');
            // console.log(result.text);
            setLoading(false);
            setShowConfirmation(true);
            form.current!.reset(); // Use form.current to reset the form
          },
          (error) => {
            // console.log('message was not sent. Error')
            console.log(error.text);
            setLoading(false);
            setShowError(true);
          }
        );
    }
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
                  <form className="w-[100%] p-6" id="contact-form" ref={form} onSubmit={(e) => sendEmail(e)} action="?" method="POST">
                    <div className="mb-4">
                      <label className="block text-primary-text text-sm font-bold/ mb-2" htmlFor="name">First Name</label>
                      <input type="text" id="name" placeholder="Enter your name" name="from_name" required className="block w-[100%] shadow appearance-none border rounded-[6px] w-full py-2 px-3 text-off-white leading-tight focus:outline-none focus:shadow-outline bg-[rgba(255,255,255,0.03)] [border:1px_solid_rgba(255,255,255,0.1)] [transition:border_0.15s] text-sm hover:[border-color:rgb(60,61,83)] focus:[border-color:rgb(79,82,180)] focus:[border-color:#0284c7]"/>
                    </div>
                    <div className="mb-4">
                      <label className="block text-primary-text text-sm font-bold/ mb-2" htmlFor="email">Email</label>
                      <input type="email" id="email" placeholder="Enter your email" name="email_id" required className="block w-[100%] shadow appearance-none border rounded-[6px] w-full py-2 px-3 text-off-white leading-tight focus:outline-none focus:shadow-outline bg-[rgba(255,255,255,0.03)] [border:1px_solid_rgba(255,255,255,0.1)] [transition:border_0.15s] text-sm hover:[border-color:rgb(60,61,83)] focus:[border-color:rgb(79,82,180)] focus:[border-color:#0284c7]"/>
                    </div>
                    <div className="mb-6">
                      <label className="block text-primary-text text-sm font-bold/ mb-2" htmlFor="message">Message</label>
                      <textarea name="message" id="message" required className="block w-[100%] shadow appearance-none border rounded-[6px] w-full py-2 px-3 text-off-white leading-tight focus:outline-none focus:shadow-outline bg-[rgba(255,255,255,0.03)] [border:1px_solid_rgba(255,255,255,0.1)] [transition:border_0.15s] text-sm [resize:none] h-[10rem] hover:[border-color:rgb(60,61,83)] focus:[border-color:rgb(79,82,180)] focus:[border-color:#0284c7]" placeholder="Type your message"></textarea>
                    </div>
                    {/* Prevent bot form submissions */}
                    {/* <ReCAPTCHA
                      sitekey="6LcyrWgnAAAAACIXG_6J3NSsE10LKS-H9ru6kuNb"
                      onChange={onChange}
                      className="mx-auto flex justify-center"
                    />, */}
                    <div className="flex justify-center">
                      {!showConfirmation && !showError && !showLoading && (
                      <button type="submit" value="Send" data-sitekey="6LcyrWgnAAAAACIXG_6J3NSsE10LKS-H9ru6kuNb" data-callback="onSubmit" className={classnames(
                        "rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in",
                        "[&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2",
                        "text-sm px-4 h-8",
                        "mx-auto"
                        )}>
                        Send Message{" "}
                        <span className="arrow inline-block">→</span>
                      </button>
                      )}
                      {showLoading && (
                        <div className="flex flex-row items-center justify-center gap-2">
                          <div className="relative flex w-8 h-8">
                            <i className="absolute w-full h-full rounded-full animate-spinner-ease-spin [border:solid_3px_#006FEE] !border-t-transparent !border-l-transparent !border-r-transparent"></i>
                            <i className="absolute w-full h-full rounded-full opacity-75 animate-spinner-linear-spin [border:dotted_3px_#006FEE] !border-t-transparent !border-l-transparent !border-r-transparent"></i>
                          </div>
                          <p className="text-sm text-off-white select-none">Sending Message...</p>
                        </div>
                      )}
                      {showConfirmation && (
                      <div className="flex flex-row items-center justify-center gap-2">
                        <span className="w-5 h-5 rounded-[8px] bg-[#1ac964] inline-block flex justify-center items-center">
                          <svg aria-hidden="true" role="presentation" viewBox="0 0 17 18" className="z-10 w-4 h-3"><polyline fill="none" points="1 9 7 14 15 4" stroke="#000" strokeDasharray="22" strokeDashoffset="44" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" id="checkmark"></polyline></svg>
                        </span>
                        {/* <p className="text-[rgb(24,201,100)] text-sm bg-[rgba(24,201,100,0.2)] py-[2px] px-[12px] rounded-full [border:1px_solid_rgba(24,201,100,_0.2)]">Message has been sent!</p> */}
                        <p className="text-sm text-off-white select-none">Message has been sent!</p>
                      </div>
                      )}
                      {showError && (
                      <div className="flex flex-row items-center justify-center gap-2">
                        <span className="w-5 h-5 rounded-[8px] bg-[#f5a524] inline-block flex justify-center items-center">
                          <svg width="14" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.67982 14.275H14.3202C15.6128 14.275 16.4185 12.8733 15.7722 11.757L9.45205 0.837235C8.80576 -0.279078 7.19424 -0.279078 6.54795 0.837235L0.227771 11.757C-0.418516 12.8733 0.387244 14.275 1.67982 14.275ZM8 8.39963C7.53837 8.39963 7.16067 8.02193 7.16067 7.5603V5.88163C7.16067 5.42 7.53837 5.0423 8 5.0423C8.46163 5.0423 8.83933 5.42 8.83933 5.88163V7.5603C8.83933 8.02193 8.46163 8.39963 8 8.39963ZM8.83933 11.757H7.16067V10.0783H8.83933V11.757Z" fill="black"/>
                          </svg>
                        </span>
                        <p className="text-sm text-off-white select-none">Error! Message not sent</p>
                      </div>
                      )}
                    </div>
                  </form>
                </div>
              </Container>
          </div>
      </section>
  );
};
