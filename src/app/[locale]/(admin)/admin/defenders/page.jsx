import DefendersSection from "@/components/sections/admin/DefendersSection";
import TitleAdmin from "@/components/sections/admin/TitleAdmin";
import { BaseURL } from "@/constants/BaseUrl";

export async function getDefendersData() {
  const res = await fetch(`${BaseURL}defenders`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    return [];
  }

  return res.json();
}

export default async function DefendersPage() {
  const data = await getDefendersData();

  return (
    <main className="flex flex-col justify-center relative max-h-screen px-10 py-5 min-w-[80%] admin">
      <TitleAdmin>Перелік активних проектів</TitleAdmin>

      <DefendersSection items={data} />
    </main>
  );
}
