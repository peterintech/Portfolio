"use client";

import { socialLinks } from "@/constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Button from "../ui/button";
import AnimatedCounter from "../ui/animatedCounter";

function Hero() {
  const gotoWorks = () => {
    const target = document.getElementById("showcase"); // Find the section with ID "counter"

    if (target) {
      const offset = window.innerHeight * 0.15; // Leave a bit of space at the top
      const top =
        target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1,.desc",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="home">
      <div className="w-full relative nav-margin pb-16 container-x bg-darkBlue">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
          <div className="hero-text">
            <h1>Hey,</h1>
            <h1>
              I am
              <span className="text-lightBlue"> Peter,</span>
            </h1>{" "}
            <h1>A Web and App Developer.</h1>
            <p className="text-sm md:text-base text-accent mt-5 desc">
              I transform ideas and concepts into real projects that delivers
              Result.
            </p>
          </div>
          <Button
            text="See My Work"
            className="md:w-80 md:h-16 w-60 h-12"
            onClick={gotoWorks}
          />
          <div className="md:mt-12">
            <p className="text-sm text-accent mb-2">
              Connect with me (@peterintech) on all Socials:
            </p>
            <div className="w-full flex justify-center md:justify-start gap-4 social">
              {socialLinks.map(({ link, icon }) => (
                <a key={link} href={link} className="mx-2">
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Hero image */}
        <div className="lg:absolute lg:bottom-12 lg:right-2 md:-mr-16">
          <Image src={"/Hero_img.png"} alt="hero" width={550} height={448.29} />
        </div>
      </div>
      <AnimatedCounter />
    </section>
  );
}

export default Hero;
