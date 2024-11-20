import AdminBaseSection from "@/components/sections/admin/AdminBaseSection";
import ButtonBack from "@/components/sections/admin/ButtonBack";
import TitleAdmin from "@/components/sections/admin/TitleAdmin";
import NewsForm from "@/components/sections/news/NewsForm";
import { getServerSession } from "next-auth";

export default async function CreatePhotoReportPage() {
  const session = await getServerSession(authConfig);
  const token = session.user.token;
  return (
    <main className="px-10 py-5 relative">
      <TitleAdmin>Створення фотозвіту</TitleAdmin>
      <ButtonBack path={"/uk/admin/photo-report"} className={"absolute top-8"} />
      <AdminBaseSection>
        <NewsForm part={"photo"} token={token} />
      </AdminBaseSection>
    </main>
  );
}
