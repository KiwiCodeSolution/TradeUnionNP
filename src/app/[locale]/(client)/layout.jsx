import Header from "@/components/Header.jsx";

import Footer from "@/components/sections/footer/Footer";
import UpButton from "@/components/UI/buttons/UpButton";

export async function generateMetadata({ params: { locale } }) {
  return {
    title:
      locale === "uk"
        ? "Профспілка ТОВ «Нова Пошта» | ВПСП ТОВ «Нова Пошта»"
        : "Trade union LLC 'Nova Poshta' | VPSP 'Nova Poshta' LLC",
    description:
      locale === "uk"
        ? "Офіційний сайт Профспілки групи компаній «Нова Пошта» | Всеукраїнська професійна спілка працівників ТОВ «Нова Пошта» | ВПСП ТОВ «Нова Пошта»"
        : "Official site of the Trade Union of the Nova Poshta group of companies | All-Ukrainian Professional Union of Employees of Nova Poshta LLC | VPSP 'Nova Poshta' LLC",
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default function ClientLayout({ children, params: { locale } }) {
  return (
    <div className="min-h-screen">
      <Header locale={locale} />
      {children}
      <Footer locale={locale} />
      <UpButton />
    </div>
  );
}
