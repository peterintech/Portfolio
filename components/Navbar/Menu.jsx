import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MenuIcon from "@mui/icons-material/Menu";

import { socialLinks } from "../Title/title";
import Link from "next/router";

function Menu() {
  const menuLinks = [
    { path: "/", label: "Home" },
    { path: "/#about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/#contact", label: "Contact" },
  ];

  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tl = useRef();

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
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <nav className="menu-container" ref={container}>
      <div className="menu-header">
        <div>
          <Link className="text-lightBlue text-2xl">Peter</Link>
        </div>
        <div
          className="p-2 border border-lightBlue rounded-lg hover:bg-lightBlue cursor-pointer active:scale-95"
          onClick={toggleMenu}
        >
          <MenuIcon sx={{ color: "white", fontSize: 30 }} />
        </div>
      </div>
      <div className="menu-overlay">
        <div className="menu-header">
          <div>
            <Link className="text-black text-2xl" href="/">
              Peter
            </Link>
          </div>
          <div
            className={
              "border-black border py-2 px-4 rounded-lg hover:bg-white hover:border-none cursor-pointer active:scale-95"
            }
            onClick={toggleMenu}
          >
            <p className="">Close</p>
          </div>
        </div>
        <div className="menu-links">
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
              <a target="_blank" href={socialLinks.github}>
                Github &#8599;
              </a>
              <a target="_blank" href={socialLinks.x}>
                X &#8599;
              </a>
              <a target="_blank" href={socialLinks.linkedIn}>
                LinkedIn &#8599;
              </a>
              <a target="_blank" href={socialLinks.instagram}>
                Instagram &#8599;
              </a>
            </div>
            <div className="flex flex-col">
              <a href="mailto:ogbonnapete210@gmail.com">
                ogbonnapete210@gmail.com&#8599;
              </a>
              <a href="tel:+2349077210759">(234) 9077210759 &#8599;</a>
            </div>
          </div>
          <div className="flex flex-1 items-end justify-end">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1ozXUwhqBusP2NukdXAhsppc4gxPiEIF4/view?usp=sharing"
            >
              View CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
