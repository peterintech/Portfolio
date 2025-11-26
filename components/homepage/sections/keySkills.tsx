"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { techStackImgs } from "@/constants";
import Heading from "../ui/Heading";
import Image from "next/image";

const KeySkills = () => {
  // Animate the tech cards in the skills section
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center container-x py-20">
      <div className="w-full h-full">
        <div className="flex flex-col md:items-end">
          <Heading text="Key" strong="Skills" />
        </div>
        <div className="tech-grid">
          {/* This is for the img part */}
          {techStackImgs.map((techStackIcon, index) => (
            <div
              key={index}
              className="card-border tech-card overflow-hidden group rounded-full"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <Image
                    width={130}
                    height={100}
                    src={techStackIcon.imgPath}
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <p>{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeySkills;
