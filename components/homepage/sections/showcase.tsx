"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Heading from "../ui/Heading";
import Link from "next/link";
import Button from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const router = useRouter();

  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  const gotoProjects = () => {
    router.push("/projects");
  };

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="container-x py-20">
      <div className="flex flex-col md:items-end">
        <Heading text="My Recent" strong="Projects" />
        <p className="md:text-right -mt-6 mb-8 text-accent">
          I’ve built products in different industries like Fintech,
          Entertainment and many more
        </p>
      </div>
      <div className="w-full app-showcase">
        <div className="showcaselayout">
          <div ref={project1Ref} className="first-project-wrapper">
            <Link href={`/projects/#1`}>
              <div className="image-wrapper">
                <Image
                  width={500}
                  height={300}
                  src="/cryptnance-img.png"
                  alt="Cryptnance"
                />
              </div>
              <div className="text-content">
                <h2>Cryptnance</h2>
                <p className="text-accent md:text-xl hidden md:block">
                  A crypto fintech web application for a startup for sending and
                  receiving crpyto and fiat funds. Built with React, Typescript
                  and Redux.
                </p>
              </div>
            </Link>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <Link href={`/projects/#2`}>
                <div className="image-wrapper bg-green-400">
                  <Image
                    width={500}
                    height={300}
                    src="/teeket.png"
                    alt="Library Management Platform"
                  />
                </div>
                <h2>TeeKet</h2>
              </Link>
            </div>

            <div className="project" ref={project3Ref}>
              <Link href={`/projects/#1`}>
                <div className="image-wrapper bg-[#FFE7EB]">
                  <Image
                    width={500}
                    height={300}
                    src="/zayth.png"
                    alt="Zathyth Ecommerce Platform"
                  />
                </div>
                <h2>Zathyth Driver App</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-end mt-8">
        <Button
          text="See More"
          className="w-60 h-12"
          id="counter"
          onClick={gotoProjects}
          icon={<ArrowUpRight />}
        />
      </div>
    </section>
  );
};

export default AppShowcase;
