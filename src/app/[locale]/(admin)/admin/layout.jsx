import NavAdmin from "@/components/sections/admin/NavAdmin";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "Admin",
  description: "Admin",
};

export default function AdminLayout({ children }) {
  return (
    <AuthProvider>
      <div className="w-screen h-full flex ">
        <NavAdmin />
        {children}
      </div>
    </AuthProvider>
  );
}
