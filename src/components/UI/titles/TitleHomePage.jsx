import Title from "@/components/Title";
import { useTranslations } from "next-intl";

const TitleHomePage = () => {
  const t = useTranslations("HomePage");
  return (
    <Title tag={"h1"} styles={"mt-8 md:mt-28"}>
      <span className="text-red"> {t(`title.0`)}</span> {t(`title.1`)}
    </Title>
  );
};

export default TitleHomePage;
