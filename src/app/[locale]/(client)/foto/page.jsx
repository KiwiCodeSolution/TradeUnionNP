import PaginatedItems from "@/components/sections/news/PaginatedItems";
import PhotoPathHero from "@/components/sections/photo/PhotoPathHero";


export default function PhotoPage() {
  return (
    <main className="w-full bg-bgGrey">
      <PhotoPathHero />
      <PaginatedItems />
    </main>
  );
}
