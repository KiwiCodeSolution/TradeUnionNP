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
export default function SearchPage({ params: { locale } }) {
  const t = useTranslations("Search");

  return (
    <main className="w-full bg-bgGrey">
      <section className="w-full relative">
        <Wrapper styles={"py-10 h-fit "}>
          <Title tag={"h1"} styles={"text-center mb-10"}>
            <span className="text-red">{t(`title.0`)}</span>
            {t(`title.1`)}
          </Title>
          <SearchPageComponent locale={locale} />
        </Wrapper>
      </section>
    </main>
  );
}
