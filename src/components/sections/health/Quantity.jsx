import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import QuantityImg from "@/images/health/quantity.png";

const Quantity = () => {
  return (
    <BaseSection style={"py-14 "}>
      <Wrapper>
        <Title tag={"h2"} styles={"text-center"}>
          Кількість <span className="text-red">наданих путівок</span>
        </Title>

        <Image
          src={QuantityImg}
          alt="Кількість виданих путівок, вигляд у графіку"
          width={1160}
          height={703}
          className="mt-8 mx-auto"
        />
      </Wrapper>
    </BaseSection>
  );
};

export default Quantity;
