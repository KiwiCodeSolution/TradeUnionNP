import NavAdmin from "@/components/sections/admin/NavAdmin";
import { AuthProvider } from "@/context/AuthContext";
import { getServerSession } from "next-auth";
import { authConfig } from "@/configs/auth";

export const metadata = {
  title: "Admin",
  description: "Admin",
};

export default async function AdminLayout({ children }) {
  const session = await getServerSession(authConfig);

  return (
    // <AuthProvider>
    <div className="w-screen h-full flex ">
      <NavAdmin username={session.user.username} />
      {children}
    </div>
    // </AuthProvider>
  );
}
