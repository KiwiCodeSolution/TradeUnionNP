import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";

const Honors = () => {
  const t = useTranslations("Collective_labour_agreement");
  return (
    <BaseSection style={"mt-16 "}>
      <Wrapper styles={"honors"}>
        <div className="flex flex-col justify-center items-center py-12 px-8 md:px-36 relative text-center">
          <p className="text-[40px]">{t(`honors.0`)}</p>
          <p className="text-[40px] font-bold">{t(`honors.1`)}</p>
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default Honors;
