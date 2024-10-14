import NavAdmin from "@/components/sections/admin/NavAdmin";
import { AuthProvider } from "@/context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";

export const metadata = {
  title: "Admin",
  description: "Admin",
};

export default function AdminLayout({ children }) {
  return (
    <AuthProvider>
      <div className="w-screen h-full flex">
        <NavAdmin />
        {children} <ToastContainer transition={Bounce} />
      </div>
    </AuthProvider>
  );
}
