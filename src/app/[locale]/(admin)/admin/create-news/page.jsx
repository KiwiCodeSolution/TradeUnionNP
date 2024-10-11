import TitleAdmin from "@/components/sections/admin/TitleAdmin";
import CreateNews from "@/components/sections/news/CreateNews";

export default function CreateNewsPage() {
  return (
    <main className="px-10 py-5">
      <TitleAdmin>Створення новини</TitleAdmin>
      {/* <ButtonBack path={"/uk/admin/news"} className={"mt-5"} /> */}

      <section className="flex-grow overflow-y-auto" style={{ maxHeight: "calc(100vh - 120px)" }}>
        <CreateNews />
      </section>
    </main>
  );
}
