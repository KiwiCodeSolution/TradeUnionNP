import AdminBaseSection from "@/components/sections/admin/AdminBaseSection";
import ButtonBack from "@/components/sections/admin/ButtonBack";
import TitleAdmin from "@/components/sections/admin/TitleAdmin";
import ProjectForm from "@/components/sections/defenders/ProjectForm";
import { StoreProvider } from "@/store/StoreProvider";

export default async function CreateProjectPage({ username }) {
  return (
    <StoreProvider>
      <main className="px-10 py-5 relative w-full">
        <TitleAdmin>Створення проекту</TitleAdmin>
        <ButtonBack path={"/uk/admin/defenders"} className={"absolute top-8"} />
        <AdminBaseSection>
          <ProjectForm />
        </AdminBaseSection>
      </main>
    </StoreProvider>
  );
}
