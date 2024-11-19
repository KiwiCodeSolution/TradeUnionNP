import AdminBaseSection from "@/components/sections/admin/AdminBaseSection";
import ButtonBack from "@/components/sections/admin/ButtonBack";
import TitleAdmin from "@/components/sections/admin/TitleAdmin";
import NewsForm from "@/components/sections/news/NewsForm";

export default function CreatePhotoReportPage() {
  return (
    <main className="px-10 py-5 relative">
      <TitleAdmin>Створення фотозвіту</TitleAdmin>
      <ButtonBack path={"/uk/admin/photo-report"} className={"absolute top-8"} />
      <AdminBaseSection>
        <NewsForm part={"photo"} />
      </AdminBaseSection>
    </main>
  );
}
