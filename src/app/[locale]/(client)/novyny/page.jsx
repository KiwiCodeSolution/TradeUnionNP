import NewsPathHero from "@/components/sections/news/NewsPathHero";
import PaginatedItems from "@/components/sections/news/PaginatedItems";

export default function NewsPage() {
  return (
    <main className="w-full  bg-bgGrey">
      <NewsPathHero />
      <PaginatedItems />
    </main>
  );
}
