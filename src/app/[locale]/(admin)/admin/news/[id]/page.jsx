import ButtonBack from "@/components/sections/admin/ButtonBack";
import TitleAdmin from "@/components/sections/admin/TitleAdmin";
import NewsForm from "@/components/sections/news/NewsForm";
import { BaseURL } from "@/constants/BaseUrl";

// Функція для отримання новини із серверу
async function fetchNewsById() {
  const res = await fetch(`${BaseURL}news`, { method: "GET", cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch the news");
  }
  const data = await res.json(); // Чекаємо, поки проміс завершиться
  return data;
}

// Функція для генерації метаданих
export async function generateMetadata({ params: { id } }) {
  const news = await fetchNewsById();
  const currentNews = news.find(el => el._id === id);
  // console.log(currentNews);

  return {
    title: `Редагування новини: ${currentNews.title}`,
    description: currentNews.metaTags || "Опис цієї новини",
    keywords: currentNews.metaTags,
  };
}

export default async function AdminNewsPageWithId({ params: { id } }) {
  const news = await fetchNewsById();
  const currentNews = news.find(el => el._id === id);
  // console.log("currentNews", currentNews);

  return (
    <main className="px-10 py-5 relative">
      <TitleAdmin>Редагування новини id: {id}</TitleAdmin>
      <ButtonBack path={"/uk/admin/news"} className={"absolute top-8"} />
      <section className="flex-grow overflow-y-auto" style={{ maxHeight: "calc(100vh - 120px)" }}>
        <NewsForm news={currentNews} /> {/* Передаємо новину у форму для редагування */}
      </section>
    </main>
  );
}
