import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { counterItems } from "@/constants";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const itemsRef = useRef<Array<HTMLDivElement | null>>([]);

  useGSAP(() => {
    itemsRef.current.forEach((el, i) => {
      if (!el) return;

      const countSpan = el.querySelector(".count") as HTMLSpanElement | null;
      if (!countSpan) return;

      const target = Number(counterItems[i]?.value) || 0;
      const obj = { val: 0 };

      gsap.to(obj, {
        val: target,
        duration: 1.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          countSpan.textContent = Math.floor(obj.val).toString();
        },
      });
    });
  });

  return (
    <div id="counter" className="py-6 container-x">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            className="border border-lightBlue/20 rounded-lg px-4 py-6 flex flex-col justify-center"
          >
            <div className="text-4xl font-bold mb-2">
              <span className="count">0</span>
              {item.suffix}
            </div>
            <div className="text-accent">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
