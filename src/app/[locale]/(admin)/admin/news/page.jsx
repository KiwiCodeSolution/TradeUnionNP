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

  const today = new Date();

  //треба виводити новини зі статусами опубліковано та створено. ті, котрі створені, виділити окремим кольором, або ж виводити статус. крім того, зробити прозорість на новинах, які з майбутнього. тобто, в адмінці ми виводимо і новини з майбутнього, але іншим кольором.
  //переписати функцію, що нижче! вона для клієнта!

  const filteredNewsArray = news
    .filter(item => item.status === "published" && new Date(item.publishDate) <= today)
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

  console.log(news.filter(item => new Date(item.publishDate) >= today));

  return (
    <main className="px-10 py-5 admin relative max-h-screen">
      <NewsAdminPageComponent news={news} />
    </main>
  );
}
