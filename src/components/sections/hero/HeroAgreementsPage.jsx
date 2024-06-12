import { inter } from "@/app/fonts";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";

const HeroAgreementsPage = () => {
  return (
    <BaseSection>
      <Wrapper>
        <div className="w-full flex flex-col gap-y-8 my-16 bg-white rounded-2xl px-14 py-10 relative">
          <h1 className={`${inter.className} text-5lx font-extrabold leading-[1.25]`}>
            Колективний <span className="text-red">договір</span>
          </h1>
          <div className="w-full grid grid-cols-4"></div>
          <div className="w-1/2 grid grid-cols-2"></div>
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default HeroAgreementsPage;
