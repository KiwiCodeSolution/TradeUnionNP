import ButtonBack from "@/components/sections/admin/ButtonBack";
import TitleAdmin from "@/components/sections/admin/TitleAdmin";
import NewsForm from "@/components/sections/news/NewsForm";
import data from "@/data/news.json";

// Функція для отримання новини із серверу
async function fetchNewsById(id) {
  // const response = await fetch(`https://api.example.com/news/${id}`);
  // const news = await response.json();
  const currentNews = data.find(el => el.id === id);

  const news = {
    ...currentNews,
    // title: `Це перша тестова новина з id:${id}`,
    // sections: ["Новина", "Інтерв'ю"],
    metaTags: currentNews.sections,
    status: "published",
    content: currentNews.shortText,
  };
  return news;
}

// Функція для генерації метаданих
export async function generateMetadata({ params: { id } }) {
  const news = await fetchNewsById(id);

  return {
    title: `Редагування новини: ${news.title}`, // Динамічний title
    description: news.metaTags || "Опис цієї новини", // Динамічний description
    keywords: news.metaTags, // Метатеги
  };
}

export default async function AdminNewsPageWithId({ params: { id } }) {
  const news = await fetchNewsById(id);

  return (
    <main className="px-10 py-5 relative">
      <TitleAdmin>Редагування новини id: {id}</TitleAdmin>
      <ButtonBack path={"/uk/admin/news"} className={"absolute top-8"} />
      <section className="flex-grow overflow-y-auto" style={{ maxHeight: "calc(100vh - 120px)" }}>
        <NewsForm news={news} />
      </section>
    </main>
  );
}
