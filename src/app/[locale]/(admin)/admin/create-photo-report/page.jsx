import TitleAdmin from "@/components/sections/admin/TitleAdmin";
import CreatePhotoReport from "@/components/sections/photo/CreatePhotoReport";

export default function CreatePhotoReportPage() {
  return (
    <main className="px-10 py-5">
      <TitleAdmin>Створення фотозвіту</TitleAdmin>
      <section className="flex-grow overflow-y-auto" style={{ maxHeight: "calc(100vh - 120px)" }}>
        <CreatePhotoReport />
      </section>
    </main>
  );
}
