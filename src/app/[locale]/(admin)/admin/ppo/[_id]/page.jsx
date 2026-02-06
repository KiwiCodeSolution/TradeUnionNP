import ButtonBack from "@/components/sections/admin/ButtonBack";
import TitleAdmin from "@/components/sections/admin/TitleAdmin";
import EditPpoForm from "@/components/sections/contacts/EditPpoForm";
import RegionalOfficePageItem from "@/components/sections/regional_offices/RegionalOfficePageItem";
// import PpoForm from "@/components/sections/contacts/PpoForm";
import { BaseURL } from "@/constants/BaseUrl";
import { StoreProvider } from "@/store/StoreProvider";

async function fetchPpoById(id) {
  const res = await fetch(`${BaseURL}ppo/${id}`, {
    method: "GET",
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch the ppo");
  }
  const data = await res.json();
  return data;
}

export async function generateMetadata({ params: { _id } }) {
  const currentPpo = await fetchPpoById(_id);

  return {
    title: `Редагування ППО: ${currentPpo.title}`,
    description: currentPpo.metaTags || "Дані ППО",
    keywords: currentPpo.metaTags,
  };
}

export default async function AdminPpoPageWithId({ params: { _id } }) {
  const currentPpo = await fetchPpoById(_id);

  console.log("currentPpo", currentPpo);

  return (
    <StoreProvider>
      <main className="w-full px-10 py-5 relative">
        <TitleAdmin>{currentPpo.region}</TitleAdmin>
        <ButtonBack path={"/uk/admin/ppo"} className={"absolute top-8"} />
        <section className="flex-grow overflow-y-auto" style={{ maxHeight: "calc(100vh - 120px)" }}>
          <EditPpoForm office={currentPpo} />
        </section>
      </main>
    </StoreProvider>
  );
}
