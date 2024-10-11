import ButtonBack from "@/components/sections/admin/ButtonBack";
import TitleAdmin from "@/components/sections/admin/TitleAdmin";
import PhotoReportForm from "@/components/sections/photo/PhotoReportForm";

export default function CreatePhotoReportPage() {
  return (
    <main className="px-10 py-5 relative">
      <TitleAdmin>Створення фотозвіту</TitleAdmin>
      <ButtonBack path={"/uk/admin/photo-report"} className={"absolute top-8"} />
      <section className="flex-grow overflow-y-auto" style={{ maxHeight: "calc(100vh - 120px)" }}>
        <PhotoReportForm />
      </section>
    </main>
  );
}
