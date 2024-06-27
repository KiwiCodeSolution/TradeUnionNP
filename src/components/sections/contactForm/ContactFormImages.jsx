import Image from "next/image";
import Men from "@/images/feedback.svg";
import agr_1 from "@/images/home/agr_1.svg";
import agr_2 from "@/images/home/agr_2.svg";
import agr_3 from "@/images/home/agr_3.svg";
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

const ContactFormImages = () => {
  return (
    <div className="w-1/2 relative">
      <ParallaxSection items={ITEMS} />
      <Image
        src={Men}
        width={600}
        height={549}
        alt="малюнок чоловіка, що сидить а столом з ноутбуком, чашкою гарячого напою та квіткою у вазоні"
        className="relative z-[15]"
      />
    </div>
  );
};

export default ContactFormImages;
