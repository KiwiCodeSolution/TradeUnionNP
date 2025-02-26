import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import ListItem from "@/components/UI/items/ListItem";
import Wrapper from "@/components/Wrapper";

const StatuteRecreationPage = () => {
  const t = useTranslations("Sport");
  return (
    <BaseSection style={""}>
      <Wrapper styles={""}>
        <div className="bg-white flex flex-col items-center gap-4 rounded-t-2xl px-8 md:px-24 py-8 md:py-16 border-b-4 border-red">
          <Title tag={"h2"} styles={"text-center"}>
            {t(`statute_recreation_title`)}
          </Title>

          <div className="flex flex-col sm:flex-row w-full gap-4 md:gap-8 items-start justify-between">
            <h3 className="w-full md:w-2/5 text-xl font-bold text-bgBlack">
              {t(`statute_recreation_text.0`)} <br />
              {t(`statute_recreation_text.1`)}
            </h3>
            <ul className="w-full md:w-3/5 flex flex-col gap-y-5">
              <ListItem item={t(`statutory_activity.0`)} gap={5} />
            </ul>
          </div>
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default StatuteRecreationPage;
