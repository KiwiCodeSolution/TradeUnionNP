import Image from "next/image";
import Men from "@/images/feedback.svg";
import agr_1 from "@/images/home/agr_1.svg";
import agr_2 from "@/images/home/agr_2.svg";
import agr_3 from "@/images/home/agr_3.svg";
import MenGrey from "@/images/i-trade/man.svg";
import BgPaper from "@/images/i-trade/bg-form.svg";
import BgImage from "@/images/home/bg-image_5.svg";

import ParallaxSection from "@/components/UI/parallax/ParallaxSection";

const ITEMS = [
  {
    id: "1",
    url: agr_1,
    style: "absolute top-1/2 -left-4",
    alt: "білий бланк із загнутим куточком",
  },
  { id: "2", url: agr_2, style: "absolute top-8 right-4", alt: "біла скріпка" },
  {
    id: "3",
    url: agr_3,
    style: "absolute bottom-0 right-0",
    alt: "білий бланк із загнутим куточком",
  },
];

const ContactFormImages = ({ imageStyle }) => {
  return (
    <div className="w-full md:w-1/2 h-full relative order-1 md:order-2">
      {imageStyle === "bg-white" ? (
        <>
          <Image
            src={BgPaper}
            width={600}
            height={549}
            alt="малюнок чоловіка, що сидить а столом з ноутбуком, чашкою гарячого напою та квіткою у вазоні"
            className="top-0 z-[10] absolute"
          />
          <Image
            src={MenGrey}
            width={600}
            height={549}
            alt="малюнок чоловіка, що сидить а столом з ноутбуком, чашкою гарячого напою та квіткою у вазоні"
            className="relative z-[15] "
          />
        </>
      ) : (
        <>
          <ParallaxSection items={ITEMS} style={"hidden md:block md:absolute"} />
          <Image
            src={BgImage}
            width={600}
            height={549}
            alt="малюнок документів, паперів та скріпки"
            className="absolute top-0 md:hidden z-[15]"
          />
          <Image
            src={Men}
            width={600}
            height={549}
            alt="малюнок чоловіка, що сидить а столом з ноутбуком, чашкою гарячого напою та квіткою у вазоні"
            className="relative z-[15]"
          />
        </>
      )}
    </div>
  );
};

export default ContactFormImages;
