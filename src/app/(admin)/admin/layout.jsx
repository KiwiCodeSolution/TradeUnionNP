import NavAdmin from "@/components/sections/admin/NavAdmin";

export const metadata = {
  title: "Admin",
  description: "Admin",
};

export default function AdminLayout({ children }) {
  return (
    <div className="w-screen h-full flex ">
      <NavAdmin />
      {children}
    </div>
  );
}
