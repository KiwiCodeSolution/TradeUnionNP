import BaseSection from "@/components/BaseSection";
import Image from "next/image";
import GraphImage from "@/images/aid/material-aid.svg";
import GraphImageMob from "@/images/aid/material-aid_mob.jpg";

const Graph = () => {
  return (
    <BaseSection style={""}>
      <div className="px-4">
        <Image
          src={GraphImage}
          width={1200}
          height={700}
          alt="графік виплат за 2015-2023 роки"
          className="hidden md:block mx-auto"
        />
        <Image
          src={GraphImageMob}
          width={450}
          height={250}
          alt="графік виплат за 2015-2023 роки"
          className="md:hidden mx-auto w-full h-auto"
        />
      </div>
    </BaseSection>
  );
};

export default Graph;
