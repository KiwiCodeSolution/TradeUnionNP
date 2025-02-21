"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import Image1 from "@/images/health/running_line/1.jpg";
import Image2 from "@/images/health/running_line/2.jpg";
import Image3 from "@/images/health/running_line/3.jpg";
import Image4 from "@/images/health/running_line/4.jpg";
import Image5 from "@/images/health/running_line/5.jpg";
import Image6 from "@/images/health/running_line/6.jpg";

const images = [Image1, Image2, Image3, Image4, Image5, Image6];

const RunningLine = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const handleResize = () => setKey(prev => prev + 1);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full h-[120px] md:h-[200px] xl:h-fit overflow-hidden bg-white xl:py-4 xl:mt-8">
      <div key={key} className="flex w-max animate-scroll">
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="mx-4 w-[115px] h-[115px] md:w-[195px] md:h-[195px] xl:w-[360px] xl:h-[360px] rounded-xl overflow-hidden"
          >
            <Image
              src={image}
              alt="фото відпочинку"
              width={360}
              height={360}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RunningLine;
