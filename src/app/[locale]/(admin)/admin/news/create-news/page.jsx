import AdminBaseSection from "@/components/sections/admin/AdminBaseSection";
import ButtonBack from "@/components/sections/admin/ButtonBack";
import TitleAdmin from "@/components/sections/admin/TitleAdmin";
import NewsForm from "@/components/sections/news/NewsForm";
import { StoreProvider } from "@/store/StoreProvider";

export default async function CreateNewsPage({ username }) {
  return (
    <StoreProvider>
      <main className="px-10 py-5 relative">
        <TitleAdmin>Створення новини</TitleAdmin>
        <ButtonBack path={"/uk/admin/news"} className={"absolute top-8"} />
        <AdminBaseSection>
          <NewsForm part={"news"} />
        </AdminBaseSection>
      </main>
    </StoreProvider>
  );
}
