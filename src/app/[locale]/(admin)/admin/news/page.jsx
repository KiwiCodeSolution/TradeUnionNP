import NewsAdminPageComponent from "@/components/sections/news/NewsAdminPageComponent";
import { BaseURL } from "@/constants/BaseUrl";

async function fetchNews() {
  const res = await fetch(`${BaseURL}news`, { method: "GET", cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }

  return res.json();
}

export default async function AdminNewsPage() {
  const news = await fetchNews();

  return (
    <main className="px-10 py-5 admin relative max-h-screen">
      <NewsAdminPageComponent news={news} />
    </main>
  );
}
