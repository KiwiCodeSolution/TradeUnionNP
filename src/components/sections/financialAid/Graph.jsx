import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import GraphImage from "@/images/aid/material-aid.svg";

const Graph = () => {
  return (
    <BaseSection style={""}>
      <Wrapper>
        <Image
          src={GraphImage}
          width={1200}
          height={700}
          alt="графік виплат за 2015-2023 роки"
          className="mx-auto"
        />
      </Wrapper>
    </BaseSection>
  );
};

export default Graph;
