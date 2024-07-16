import Header from "@/components/Header.jsx";

import Footer from "@/components/sections/footer/Footer";
import UpButton from "@/components/UI/buttons/UpButton";

export const metadata = {
  title: "Профспілка ТОВ «Нова Пошта» | ВПСП ТОВ «Нова Пошта»",
  description:
    "Офіційний сайт Профспілки групи компаній «Нова Пошта» | Всеукраїнська професійна спілка працівників ТОВ «Нова Пошта» | ВПСП ТОВ «Нова Пошта»",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function ClientLayout({ children }) {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
      <Footer />
      <UpButton />
    </div>
  );
}
