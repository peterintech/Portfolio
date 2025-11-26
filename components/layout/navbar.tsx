"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { socialLinks } from "@/constants";

function Menu() {
  const menuLinks = [
    { path: "/", label: "Home" },
    { path: "/#about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/#contact", label: "Contact" },
  ];

  const container = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tl = useRef<gsap.core.Timeline | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });
      tl.current = gsap
        .timeline({
          paused: true,
        })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(
          ".menu-link-item-holder",
          {
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power4.inOut",
          },
          "<0.5"
        );
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [isMenuOpen]);

  return (
    <nav className="menu-container" ref={container}>
      <div className="container-x z-100">
        <div className="menu-header">
          <div>
            <Link href="/" className="text-lightBlue logo">
              Peterintech
            </Link>
          </div>
          <div
            className="p-2 border border-lightBlue rounded-lg hover:bg-lightBlue cursor-pointer active:scale-95"
            onClick={toggleMenu}
          >
            <MenuIcon color="white" size={30} />
          </div>
        </div>
        <div className="menu-overlay">
          <div className="container-x h-full w-full flex flex-col justify-between">
            <div className="menu-header">
              <div>
                <Link href="/" className="logo">
                  Peterintech
                </Link>
              </div>
              <div
                className={
                  "border-white border py-2 px-4 rounded-lg hover:bg-white hover:text-black cursor-pointer active:scale-95"
                }
                onClick={toggleMenu}
              >
                <p className="">Close</p>
              </div>
            </div>
            <div className="menu-links uppercase">
              {menuLinks.map((link, index) => (
                <div className="menu-link-item" key={index}>
                  <div className="menu-link-item-holder" onClick={toggleMenu}>
                    <Link href={link.path}>{link.label}</Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="menu-extras">
              <div className="menu-info">
                <div className="menu-close-icon" onClick={toggleMenu}>
                  <p>&#x2715;</p>
                </div>
                <div className="flex flex-col">
                  {socialLinks.map(({ name, link }) => (
                    <a
                      target="_blank"
                      href={link}
                      key={name}
                      className="capitalize hover:text-background/30"
                    >
                      {name} &#8599;
                    </a>
                  ))}
                </div>
                <div className="flex flex-col">
                  <a
                    href="mailto:ogbonnapete210@gmail.com"
                    className="hover:text-background/30"
                  >
                    ogbonnapete210@gmail.com&#8599;
                  </a>
                  <a
                    href="tel:+2349077210759"
                    className="hover:text-background/30"
                  >
                    (234) 9077210759 &#8599;
                  </a>
                </div>
              </div>
              <div className="flex flex-1 items-end justify-end">
                <Link href="/#contact" className="contact-btn group">
                  <div className="inner">
                    <span>Contact me</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
