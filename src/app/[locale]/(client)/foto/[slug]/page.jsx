import NewsPageComponent from "@/components/sections/news/NewsPageComponent";
import { BaseURL } from "@/constants/BaseUrl";

// Функція для отримання новини із серверу
async function fetchReportBySlug(slug) {
  const response = await fetch(`${BaseURL}gallerey/${slug}`, { method: "GET", cache: "no-store" });
  const report = await response.json();

  return report;
}

// Функція для генерації метаданих
export async function generateMetadata({ params: { slug } }) {
  const report = await fetchReportBySlug(slug);

  return {
    title: report.title,
    description: report.metaTags.join(", "),
    keywords: report.metaTags.join(", "),
  };
}

export default async function ReportPageBySlug({ params: { slug } }) {
  const report = await fetchReportBySlug(slug);

  return (
    <main className="w-full bg-bgGrey news-page">
      <NewsPageComponent news={report} />
    </main>
  );
}
