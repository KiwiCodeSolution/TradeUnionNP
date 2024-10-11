import AdminBaseSection from "@/components/sections/admin/AdminBaseSection";
import TitleAdmin from "@/components/sections/admin/TitleAdmin";
import CreatePhotoReport from "@/components/sections/photo/CreatePhotoReport";

export default function CreatePhotoReportPage() {
  return (
    <main className="px-10 py-5">
      <TitleAdmin>Створення фотозвіту</TitleAdmin>
      <AdminBaseSection>
        <CreatePhotoReport />
      </AdminBaseSection>
    </main>
  );
}
