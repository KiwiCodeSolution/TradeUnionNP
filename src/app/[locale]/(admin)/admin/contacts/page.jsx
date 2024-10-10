import TitleAdmin from "@/components/sections/admin/TitleAdmin";
import AdminContactsForm from "@/components/sections/contacts/AdminContactsForm";

export default async function AdminContactsPage() {
  // Тут робимо запит на сервер для отримання початкових даних
  // const response = await fetch("https://api.example.com/contacts");
  // const initialContacts = await response.json();

  const initialContacts = {
    mail: "help@profspilka.org",
    telegram: "https://t.me/profspilka_np",
    viber:
      "https://invite.viber.com/?g2=AQB5jyDD9hRH2E4T1sgP3mF5DLFT3M6rGUUWfv2%2FHB1AddnNt8Vy6o2DXH793wQk",
    messenger: "https://www.messenger.com/",
    instagram: "https://www.instagram.com/profspilka.np/",
    youtube: "https://www.youtube.com/channel/UC7Q1wWqpmQzpCcHcvIy-13A",
    facebook: "https://www.facebook.com/profspilka.novaposhta",
  };

  return (
    <main className="px-10 py-5">
      <TitleAdmin>Контакти та соціальні мережі</TitleAdmin>
      {/* Передаємо отримані дані у компонент через пропси */}
      <AdminContactsForm initialContacts={initialContacts} />
    </main>
  );
}
