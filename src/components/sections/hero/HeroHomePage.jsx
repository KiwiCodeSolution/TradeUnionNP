import TitleHomePage from "@/components/UI/titles/TitleHomePage";
import Wrapper from "@/components/Wrapper";
import HeroHomePageItems from "./HeroHomePageItems";
import Image from "next/image";
import HeroImageFirst from "@/images/frame_1.svg";
import HeroImageSecond from "@/images/frame_2.svg";
import HeroImageThird from "@/images/frame_3.svg";
import HeroImageMobile from "@/images/hero.svg";
import Join from "./Join";
import BaseSection from "@/components/BaseSection";

const HeroHomePage = () => {
  return (
    <BaseSection style="bg-bgGrey h-fit xl:h-[628px]">
      <Wrapper styles={"flex flex-col md:flex-row"}>
        <div className="order-2 md:order-1 w-full md:w-1/2 flex flex-col">
          <TitleHomePage />
          <HeroHomePageItems />
          <Join />
        </div>
        <div className="order-1 md:order-2 w-full md:w-1/2 h-[445px] md:h-[514px] xl:h-full relative">
          <Image
            src={HeroImageMobile}
            width={319}
            height={445}
            alt="малюнок трьох людей, один тримає коробку та планшет з документами, інший на візку везе посилки, третя сидить за столом. Їх накриває парасолькою, яку тримають у руці"
            className="md:hidden"
          />
          <Image
            src={HeroImageFirst}
            width={586}
            height={628}
            alt="малюнок двох людей, один тримає коробку та планшет з документами, інший на візку везе посилки"
            className="hidden md:block"
          />
          <Image
            src={HeroImageSecond}
            width={600}
            height={372}
            alt="малюнок парасольки із логотипом Профспілки"
            className="hidden md:block absolute top-10 xl:top-16 -right-16 animate-hero-slide-in"
          />
          <Image
            src={HeroImageThird}
            width={266}
            height={260}
            alt="малюнок дівчини, що сидить за столом"
            className="hidden md:block absolute bottom-6 -right-7 xl:bottom-14 xl:right-3"
          />
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default HeroHomePage;
