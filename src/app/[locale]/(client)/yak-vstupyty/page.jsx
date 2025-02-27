import { getTranslations } from "next-intl/server";
import HeroJoinPage from "@/components/sections/join/HeroJoinPage";
import StepsFiveAndSix from "@/components/sections/join/StepsFiveAndSix";
import StepFour from "@/components/sections/join/StepFour";
import StepOne from "@/components/sections/join/StepOne";
import StepsTwoAndThree from "@/components/sections/join/StepsTwoAndThree";
import StepSeven from "@/components/sections/join/StepSeven";
import ManagersActions from "@/components/sections/join/ManagersActions";
import NewsSectionHomePage from "@/components/sections/news/NewsSectionHomePage";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });

  return {
    title: t("Root.Metadata_Join_Page"),
    metadataBase: new URL("https://profspilka.org"),
    openGraph: {
      title: t("Root.Metadata_Join_Page"),
      url: "https://profspilka.org",
    },
  };
}

export default function HowToJoinLayout({ params }) {
  return (
    <main className="w-full pb-[111px]">
      <HeroJoinPage />
      <StepOne />
      <StepsTwoAndThree />
      <StepFour />
      <StepsFiveAndSix />
      <StepSeven />
      <ManagersActions />
      <NewsSectionHomePage locale={params.locale} page={"join"} />
    </main>
  );
}
