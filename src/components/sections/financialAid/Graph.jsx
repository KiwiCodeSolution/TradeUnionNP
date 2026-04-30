import BaseSection from "@/components/BaseSection";
import Image from "next/image";
import GraphImage from "@/images/aid/material-aid.png";
import GraphImageMob from "@/images/aid/material-aid_mob_2026.png";

const Graph = ({ locale }) => {
  return (
    <BaseSection style={""}>
      <div className="px-4 flex flex-col">
        <Image
          src={GraphImage}
          width={1200}
          height={700}
          alt="графік виплат за 2015-2025 роки"
          className="hidden md:block mx-auto"
        />
        <Image
          src={GraphImageMob}
          width={450}
          height={250}
          alt="графік виплат за 2015-2025 роки"
          className="md:hidden mx-auto w-full h-auto"
        />
        <p className="text-center text-lg xl:text-2xl font-bold">
          {locale === "uk"
            ? "Загальна сума 37,51 млн.грн (без врахування податків)"
            : "Total amount of 37.51 million UAH (without taxes)"}
        </p>
      </div>
    </BaseSection>
  );
};

export default Graph;
