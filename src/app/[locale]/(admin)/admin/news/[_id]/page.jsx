import ButtonBack from "@/components/sections/admin/ButtonBack";
import TitleAdmin from "@/components/sections/admin/TitleAdmin";
import NewsForm from "@/components/sections/news/NewsForm";
import { BaseURL } from "@/constants/BaseUrl";
import { StoreProvider } from "@/store/StoreProvider";

async function fetchNewsById(id) {
  const res = await fetch(`${BaseURL}news/id/${id}`, {
    method: "GET",
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch the news");
  }
  const data = await res.json();
  return data;
}

export async function generateMetadata({ params: { _id } }) {
  const currentNews = await fetchNewsById(_id);

  return {
    title: `Редагування новини: ${currentNews.title}`,
    description: currentNews.metaTags || "Опис цієї новини",
    keywords: currentNews.metaTags,
  };
}

export default async function AdminNewsPageWithId({ params: { _id } }) {
  const currentNews = await fetchNewsById(_id);

  return (
    <StoreProvider>
      <main className="px-10 py-5 relative">
        <TitleAdmin>Редагування новини</TitleAdmin>
        <ButtonBack path={"/uk/admin/news"} className={"absolute top-8"} />
        <section className="flex-grow overflow-y-auto" style={{ maxHeight: "calc(100vh - 120px)" }}>
          <NewsForm news={currentNews} part={"news"} />
        </section>
      </main>
    </StoreProvider>
  );
}
