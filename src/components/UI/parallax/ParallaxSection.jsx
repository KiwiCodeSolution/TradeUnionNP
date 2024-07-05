"use client";

import { MouseParallax } from "react-just-parallax";

import Image from "next/image";

const ParallaxSection = ({ items, style }) => {
  return (
    <div className={` top-0 left-0 w-full h-full z-[10] ${style || "absolute"}`}>
      {items.map(el => (
        <MouseParallax
          enableOnTouchDevice
          isAbsolutelyPositioned
          key={el.id}
          strength={(Math.floor(Math.random() * (30 - 7 + 1)) + 3) / 200}
          lerpEase={(Math.floor(Math.random() * (40 - 3 + 2)) + 6) / 1000}
        >
          <Image src={el.url} className={el.style} alt={el.alt} />
        </MouseParallax>
      ))}
    </div>
  );
};

export default ParallaxSection;
