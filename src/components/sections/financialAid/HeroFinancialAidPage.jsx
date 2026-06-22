import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import PathPage from "@/components/PathPage";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import LinkButton from "@/components/UI/buttons/LinkButton";
import HeroImages from "@/images/aid/dop-top.svg";
import CountAid from "./CountAid";
import ListItem from "@/components/UI/items/ListItem";

const HeroFinancialAidPage = () => {
  const t = useTranslations("Financial_Aid");
  const ITEMS = Array.from({ length: 12 }, (_, index) => `list.${index}`);
  return (
    <BaseSection style={"pb-20"}>
      <Wrapper>
        <PathPage endPath={t(`path`)} />
        <div className="flex flex-col md:flex-row gap-x-4 pt-10">
          <div className="w-full md:w-2/5 flex flex-col gap-y-8">
            <Title tag={"h2"}>
              {t(`title.0`)}
              <span className="text-red"> {t(`title.1`)}</span>
            </Title>
            <p className="text-lg text-grey">
              {t(`subtitle.0`)} <strong>{t(`subtitle.1`)}</strong> {t(`subtitle.2`)}
            </p>
            <LinkButton
              view="red"
              style={"mx-auto md:ml-0 mt-4 md:mt-9 mb-16"}
              goTo={"#documents"}
              goToPage
              icon
            >
              {t(`button`)}
            </LinkButton>
          </div>
          <div className="w-full md:w-3/5 flex flex-col">
            <Image
              src={HeroImages}
              width={710}
              height={124}
              alt="зображення листа що виходить з принтера"
            />
            <div className="w-4/5 mx-auto -mt-10 md:-mt-14">
              <CountAid currency={t(`currency`)} />
              <div className="border-dotted border-b-8 border-bgBlack w-3/4 border-opacity-20 mx-auto" />
              <ul className="w-4/5 flex flex-col gap-y-4 mx-auto mt-8">
                {ITEMS.map(el => (
                  <ListItem item={t(el)} gap={5} key={el} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default HeroFinancialAidPage;
