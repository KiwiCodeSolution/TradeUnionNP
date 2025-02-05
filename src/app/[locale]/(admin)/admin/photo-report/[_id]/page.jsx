import ButtonBack from "@/components/sections/admin/ButtonBack";
import TitleAdmin from "@/components/sections/admin/TitleAdmin";
import NewsForm from "@/components/sections/news/NewsForm";
import { BaseURL } from "@/constants/BaseUrl";
import { StoreProvider } from "@/store/StoreProvider";

async function fetchReportById(id) {
  const res = await fetch(`${BaseURL}gallerey/id/${id}`, { method: "GET", cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch the report");
  }
  const data = await res.json();
  return data;
}

export async function generateMetadata({ params: { _id } }) {
  const currentReport = await fetchReportById(_id);

  return {
    title: `Редагування запису: ${currentReport.title}`,
    description: currentReport.metaTags || "Опис цього запису",
    keywords: currentReport.metaTags,
  };
}

export default async function AdminReportPageWithId({ params: { _id } }) {
  const currentReport = await fetchReportById(_id);

  return (
    <StoreProvider>
      <main className="px-10 py-5 relative">
        <TitleAdmin>Редагування запису</TitleAdmin>
        <ButtonBack path={"/uk/admin/photo-report"} className={"absolute top-8"} />
        <section className="flex-grow overflow-y-auto" style={{ maxHeight: "calc(100vh - 120px)" }}>
          <NewsForm news={currentReport} part={"photo"} />
        </section>
      </main>
    </StoreProvider>
  );
}
