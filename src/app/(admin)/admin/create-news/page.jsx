import ButtonBack from "@/components/sections/admin/ButtonBack";
import TitleAdmin from "@/components/sections/admin/TitleAdmin";

export default function CreateNewsPage() {
  return (
    <main className="px-10 py-5">
      <TitleAdmin>Створення новини</TitleAdmin>
      <ButtonBack path={"/admin/news"} className={"mt-5"} />
    </main>
  );
}
