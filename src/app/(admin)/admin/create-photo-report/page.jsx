import ButtonBack from "@/components/sections/admin/ButtonBack";
import TitleAdmin from "@/components/sections/admin/TitleAdmin";

export default function CreatePhotoReportPage() {
  return (
    <main className="px-10 py-5">
      <TitleAdmin>Створення фотозвіту</TitleAdmin>{" "}
      <ButtonBack path={"/admin/photo-report"} className={"mt-5"} />
    </main>
  );
}
