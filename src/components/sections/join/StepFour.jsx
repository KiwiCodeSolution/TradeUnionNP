import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Screen from "@/images/join/screen_2.png";

const StepFour = () => {
  return (
    <BaseSection style={"bg-bgGrey"}>
      <Wrapper styles={"relative"}>
        <div className="bg-white my-10 rounded-20 relative py-6 px-3 md:py-6 md:px-6 xl:py-6 xl:px-[102px] shadow-joinSections">
          <Title tag={"h2"} styles={"text-center"}>
            <span className="text-red">Крок 4. </span>
            Лівий верхній кут залишай порожнім, його має заповнити голова твого осередку.
          </Title>
          <Image src={Screen} width={960} height={516} alt="" className="mx-auto" />
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default StepFour;
