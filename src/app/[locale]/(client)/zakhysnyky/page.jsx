import CurrentFundraisers from "@/components/sections/defenders/CurrentFundraisers";
import HeroDef from "@/components/sections/defenders/HeroDef";
import Numbers from "@/components/sections/defenders/Numbers";
import Projects from "@/components/sections/defenders/Projects";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });

  return {
    title: t("Root.Metadata_Defenders_Page"),
    metadataBase: new URL("https://profspilka.org"),
    alternates: {
      languages: {
        "en-US": "/en",
        "uk-UA": "/uk",
      },
    },
    openGraph: {
      title: t("Root.Metadata_Defenders_Page"),
      url: "https://profspilka.org",
    },
  };
}

const fundraisers = [
  {
    _id: "rJ2zdZ0ksR",
    titleUk: "Заголовок 1",
    titleEn: "Title 1",
    descriptionUk: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    descriptionEn: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/defenders/test/1.jpg",
    link: "https://www.youtube.com/",
  },
  {
    _id: "vF3ghV2pwX",
    titleUk: "Заголовок 2",
    titleEn: "Title 2",
    descriptionUk: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    descriptionEn: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/defenders/test/2.jpg",
    link: "https://www.youtube.com/",
  },
  {
    _id: "tE6abD2ryY",
    titleUk: "Заголовок 3",
    titleEn: "Title 3",
    descriptionUk: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    descriptionEn: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/defenders/test/3.jpg",
    link: "https://www.youtube.com/",
  },
  {
    _id: "mL3jzA6eiB",
    titleUk: "Заголовок 4",
    titleEn: "Title 4",
    descriptionUk: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    descriptionEn: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/defenders/test/4.jpg",
    link: "https://www.youtube.com/",
  },
  {
    _id: "sF4kmE2qpM",
    titleUk: "Заголовок 5",
    titleEn: "Title 5",
    descriptionUk: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    descriptionEn: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/defenders/test/5.jpg",
    link: "https://www.youtube.com/",
  },
  {
    _id: "wS0kH2gpY1",
    titleUk: "Заголовок 6",
    titleEn: "Title 6",
    descriptionUk: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    descriptionEn: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/defenders/test/6.jpg",
    link: "https://www.youtube.com/",
  },
  {
    _id: "mL3jzA9eiB",
    titleUk: "Заголовок 7",
    titleEn: "Title 7",
    descriptionUk: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    descriptionEn: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/defenders/test/7.jpg",
    link: "https://www.youtube.com/",
  },
  {
    _id: "eK3qI1qyF9",
    titleUk: "Заголовок 8",
    titleEn: "Title 8",
    descriptionUk: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    descriptionEn: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/defenders/test/8.jpg",
    link: "https://www.youtube.com/",
  },
];

export default function DefendersPage({ params: { locale } }) {
  return (
    <main className="w-full">
      <HeroDef />

      <CurrentFundraisers fundraisers={fundraisers} locale={locale} />
      <Numbers />
      <Projects />
    </main>
  );
}
