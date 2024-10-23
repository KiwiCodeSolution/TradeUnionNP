import NewsPageComponent from "@/components/sections/news/NewsPageComponent";
import { BaseURL } from "@/constants/BaseUrl";

// Функція для отримання новини із серверу
async function fetchNewsBySlug(slug) {
  const response = await fetch(`${BaseURL}news/${slug}`, { method: "GET" });
  const news = await response.json();

  return news;
}

// Функція для генерації метаданих
export async function generateMetadata({ params: { slug } }) {
  const news = await fetchNewsBySlug(slug);

  return {
    title: news.title,
    description: news.metaTags,
    keywords: news.metaTags,
  };
}

export default async function NewsPageBySlug({ params: { slug } }) {
  const news = await fetchNewsBySlug(slug);

  return (
    <main className="w-full  bg-bgGrey">
      <NewsPageComponent news={news} />
    </main>
  );
}
