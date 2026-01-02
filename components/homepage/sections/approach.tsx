//approach.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CanvasRevealEffect } from "../ui/canvasRevealEffect";
import { useGSAP } from "@gsap/react";
import Heading from "../ui/Heading";

gsap.registerPlugin(ScrollTrigger);

const Approach = () => {
  return (
    <section className="w-full py-20 container-x" id="approach">
      <Heading text="My" strong="Approach" />
      {/* remove bg-white dark:bg-black */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        {/* add des prop */}
        <Card
          title="Planning & Strategy"
          icon={<AceternityIcon order="Phase 1" />}
          des="We'll collaborate to map out your goals, target audience, 
          and key functionalities. We'll discuss things like site structure, 
          navigation, and content requirements."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>
        <Card
          title="Development & Progress Update"
          icon={<AceternityIcon order="Phase 2" />}
          des="Once we agree on the plan, I dive into
          coding. From initial sketches to polished code, I keep you updated every step of the way."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Development & Launch"
          icon={<AceternityIcon order="Phase 3" />}
          des="This is where the magic happens! Based on the approved design, 
          I'll translate everything into functional code, building your application
          from the ground up!"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const desRef = useRef<HTMLParagraphElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  // Detect mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // desktop
  useGSAP(() => {
    if (isMobile || !canvasRef.current) return;

    if (hovered) {
      gsap.to(canvasRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(canvasRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [hovered, isMobile]);

  // mobile
  useGSAP(() => {
    if (!isMobile || !canvasRef.current) return;

    const triggerEl = cardRef.current;
    if (!triggerEl) return;

    const scrollTrigger = {
      trigger: triggerEl,
      start: "top 60%",
      end: "bottom 40%",
      toggleActions: "play reverse play reverse",
    };

    const animations = [
      { element: canvasRef.current, opacity: 1 },
      { element: iconRef.current, opacity: 0 },
      { element: titleRef.current, opacity: 1 },
      { element: desRef.current, opacity: 1 },
    ];

    animations.forEach(({ element, opacity }) => {
      gsap.to(element, {
        opacity,
        duration: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          ...scrollTrigger,
        },
      });
    });
  }, [isMobile]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/20 group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-4 relative lg:h-140 rounded-3xl bg-linear-to-t from-card to-slate-800"
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <div ref={canvasRef} className="h-full w-full absolute inset-0 opacity-0">
        {children}
      </div>

      <div className="relative z-20 px-10 canvas-card-content" ref={cardRef}>
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
          ref={iconRef}
        >
          {icon}
        </div>
        <h2
          ref={titleRef}
          className="text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4  font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200 text-white"
        >
          {title}
        </h2>
        <p
          ref={desRef}
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};
// add order prop for the Phase number change
const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="rounded-lg border border-lightBlue/20 px-4 py-2 bg-linear-to-t from-background to-[#0A1128] flex items-center gap-2 font-medium text-lightBlue">
        {order}
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
