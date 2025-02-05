import AdminBaseSection from "@/components/sections/admin/AdminBaseSection";
import ButtonBack from "@/components/sections/admin/ButtonBack";
import TitleAdmin from "@/components/sections/admin/TitleAdmin";
import NewsForm from "@/components/sections/news/NewsForm";

import { StoreProvider } from "@/store/StoreProvider";

export default async function CreatePhotoReportPage() {
  return (
    <StoreProvider>
      <main className="px-10 py-5 relative">
        <TitleAdmin>Створення фотозвіту</TitleAdmin>
        <ButtonBack path={"/uk/admin/photo-report"} className={"absolute top-8"} />
        <AdminBaseSection>
          <NewsForm part={"photo"} />
        </AdminBaseSection>
      </main>
    </StoreProvider>
  );
}
