import NewsPageComponent from "@/components/sections/news/NewsPageComponent";
import { BaseURL } from "@/constants/BaseUrl";

// Функція для отримання новини із серверу
async function fetchNewsBySlug(slug) {
  const response = await fetch(`${BaseURL}news/${slug}`, { method: "GET", cache: "no-store" });
  const news = await response.json();

  return news;
}

// Функція для генерації метаданих
export async function generateMetadata({ params: { slug } }) {
  const news = await fetchNewsBySlug(slug);
  const metaTags = news.metaTags.length < 2 ? [...news.metaTags, " "] : news.metaTags;

  return {
    title: news.title,
    description: metaTags.join(", "),
    keywords: metaTags.join(", "),
  };
}

export default async function NewsPageBySlug({ params: { slug } }) {
  const news = await fetchNewsBySlug(slug);

  return (
    <main className="w-full bg-bgGrey news-page">
      <NewsPageComponent news={news} />
    </main>
  );
}
