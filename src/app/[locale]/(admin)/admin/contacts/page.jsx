import AdminBaseSection from "@/components/sections/admin/AdminBaseSection";
import TitleAdmin from "@/components/sections/admin/TitleAdmin";
import AdminContactsForm from "@/components/sections/contacts/AdminContactsForm";
import { BaseURL } from "@/constants/BaseUrl";

async function fetchContacts() {
  const res = await fetch(`${BaseURL}contacts`, { method: "GET", cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch contacts");
  }

  return res.json();
}

export default async function AdminContactsPage() {
  const contacts = await fetchContacts();
  const [{ _id, __v, ...initialContacts }] = contacts;

  return (
    <main className="px-10 py-5">
      <TitleAdmin>Контакти та соціальні мережі</TitleAdmin>
      <AdminBaseSection styles={"p-10"}>
        {initialContacts ? (
          <AdminContactsForm initialContacts={initialContacts} />
        ) : (
          <h2 className="text-center text-2xl">
            Вибачте, сталася помилка. Спробуйте повторити запит ще раз
          </h2>
        )}
      </AdminBaseSection>
    </main>
  );
}
