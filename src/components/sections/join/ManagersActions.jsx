import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Arrow from "@/images/join/arrow_1.png";
import ButtonsSection from "./ButtonsSection";

const ManagersActions = () => {
  return (
    <BaseSection style={"bg-bgGrey pb-10"}>
      <Wrapper>
        <div className="w-full xl:w-4/5 mx-auto relative">
          <p className="text-center text-2xl xl:text-[32px] leading-7 font-semibold mb-8">
            А що робити, якщо ти <span className="text-red">керівник</span>, якому принесли заяву на
            вступ до Профспілки? Покроково розповідаємо нижче.  <br />
            Заяву на вступ необхідно відправити по шаблону <br />
            “Документи в ___ППО”.
          </p>
          <div className="mb-[94px] xl:mb-24 relative">
            <p className="text-center text-4xl xl:text-[64px] font-bold leading-[1.2] relative z-[1]">
              Обери своє програмне забезпечення
            </p>

            <Image
              src={Arrow}
              width={124}
              height={120}
              alt=""
              className="w-8 h-8 xl:w-[124px] xl:h-[120px] absolute bottom-[70px] left-[20px] z-[0]"
            />
            <Image
              src={Arrow}
              width={124}
              height={120}
              alt=""
              className="w-12 h-12 xl:w-[124px] xl:h-[120px] absolute bottom-[29px] right-[9px] z-[0]"
            />
          </div>
          <ButtonsSection />
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default ManagersActions;
