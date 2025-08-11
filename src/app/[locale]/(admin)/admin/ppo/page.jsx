import { BaseURL } from "@/constants/BaseUrl";
import AdminBaseSection from "@/components/sections/admin/AdminBaseSection";
import TitleAdmin from "@/components/sections/admin/TitleAdmin";
import RegionalOffice from "@/components/sections/regional_offices/RegionalOffice";
import useAuth from "@/hooks/useAuth";

export async function getRegionalOfficesData() {
  const res = await fetch(`${BaseURL}ppo`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function UpdatePPOPage() {
  const officesData = await getRegionalOfficesData();

  return (
    <main className="flex flex-col min-h-screen px-10 py-5 bg-bgGrey">
      <TitleAdmin>Оновлення даних ППО</TitleAdmin>
      <AdminBaseSection styles={"w-full pt-5"}>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-8 xl:gap-10 pr-4">
          {officesData &&
            officesData.map(el => (
              <RegionalOffice key={el._id} item={el} locale={"uk"} section="admin" />
            ))}
        </div>
      </AdminBaseSection>
    </main>
  );
}
