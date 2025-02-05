import NavAdmin from "@/components/sections/admin/NavAdmin";
import { getServerSession } from "next-auth";
import { authConfig } from "@/configs/auth";

export const metadata = {
  title: "АдмінПанель | Головна сторінка",
  description: "АдмінПанель | Головна сторінка",
};

export default async function AdminLayout({ children }) {
  const session = await getServerSession(authConfig);

  return (
    <div className="w-screen h-full flex ">
      <NavAdmin username={session.user.username} />
      {children}
    </div>
  );
}
