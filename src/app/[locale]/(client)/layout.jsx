import Header from "@/components/Header.jsx";

import Footer from "@/components/sections/footer/Footer";
import UpButton from "@/components/UI/buttons/UpButton";

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
