import BaseSection from "@/components/BaseSection";
import SearchPageComponent from "@/components/sections/search/SearchPageComponent";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });

  return {
    title: t("Root.Metadata_Search_Page"),
    metadataBase: new URL("https://profspilka.org"),
    openGraph: {
      title: t("Root.Metadata_Search_Page"),
      url: "https://profspilka.org",
    },
  };
}
export default function SearchPage() {
  const t = useTranslations("Search");

  return (
    <main className="w-full bg-bgGrey">
      <BaseSection style={""}>
        <Wrapper styles={"pt-10"}>
          <Title tag={"h1"} styles={"text-center mb-10"}>
            <span className="text-red">{t(`title.0`)}</span>
            {t(`title.1`)}
          </Title>
          <SearchPageComponent text={t(`text`)} warning={[t(`warning.0`), t(`warning.1`)]} />
        </Wrapper>
      </BaseSection>
    </main>
  );
}
