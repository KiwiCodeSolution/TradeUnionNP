import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import RegionalOfficesList from "./RegionalOfficesList";
import Title from "@/components/Title";

const RegionalOffices = () => {
  const t = useTranslations("Contacts");
  return (
    <BaseSection style={""}>
      <Wrapper styles={"pt-16"}>
        <Title tag="h1" styles="text-center">
          <span className="text-red">{t(`regional_offices_title.0`)}</span>{" "}
          {t(`regional_offices_title.1`)} <br /> {t(`regional_offices_title.2`)}
        </Title>

        <RegionalOfficesList />
      </Wrapper>
    </BaseSection>
  );
};

export default RegionalOffices;
