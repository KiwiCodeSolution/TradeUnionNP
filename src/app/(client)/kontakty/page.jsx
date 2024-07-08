import Management from "@/components/sections/contacts/Management";
import Map from "@/components/sections/contacts/Map";
import RegionalOffices from "@/components/sections/contacts/RegionalOffices";
import TitleContactsPage from "@/components/sections/contacts/TitleContactsPage";

export default function ContactsPage() {
  return (
    <main className="w-full bg-bgGrey">
      <TitleContactsPage />
      <Map />
      <Management />
      <RegionalOffices />
    </main>
  );
}
