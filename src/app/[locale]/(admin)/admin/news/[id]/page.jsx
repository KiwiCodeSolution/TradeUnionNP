import TitleAdmin from "@/components/sections/admin/TitleAdmin";
import CreateNews from "@/components/sections/news/CreateNews";

export default function AdminNewsPageWithId({ params: { id } }) {
  return (
    <main className="px-10 py-5">
      <TitleAdmin>Редагування новини</TitleAdmin>
      <section className="flex-grow overflow-y-auto" style={{ maxHeight: "calc(100vh - 120px)" }}>
        <CreateNews news={id}/>
      </section>
    </main>
  );
}
