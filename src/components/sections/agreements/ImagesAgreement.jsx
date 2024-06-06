"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Blank from "@/images/home/icon_blank.svg";
import Hand from "@/images/home/icon_hand.svg";
import Text from "@/images/home/icon_text.svg";

const textAnimation = {
  hidden: { opacity: 0, x: -70 },
  visible: { opacity: 1, x: 0, transition: { delay: 1, duration: 1 } },
};

const handAnimation = {
  hidden: { opacity: 0, y: "-120%", x: 0 },
  visible: {
    opacity: [0, 0.5, 1, 1],
    y: ["-100%", "-40%", 0, 0],
    x: [0, -10, -25, 5],
    transition: { duration: 2 },
  },
};

const ImagesAgreement = () => {
  return (
    <div className="w-1/2 relative">
      <Image
        src={Blank}
        width={498}
        height={429}
        alt="бланк колективного договору на планшетці"
        className="absolute bottom-0"
      />
      <motion.div
        className="absolute bottom-[182px] left-[198px]"
        initial="hidden"
        whileInView="visible"
        variants={textAnimation}
      >
        <Image src={Text} width={40} height={25} alt="написаний прописом текст" />
      </motion.div>
      <motion.div
        className="absolute bottom-[1px] left-[233px]"
        initial="hidden"
        whileInView="visible"
        variants={handAnimation}
      >
        <Image src={Hand} width={262} height={238} alt="малюнок руки, що тримає ручку" />
      </motion.div>
    </div>
  );
};

export default ImagesAgreement;
