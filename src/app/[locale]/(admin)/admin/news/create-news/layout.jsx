import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth";

export const metadata = {
  title: "АдмінПанель | Створення новини",
  description: "АдмінПанель | Створення новини",
};

export default async function CreateNewsLayout({ children }) {
  const session = await getServerSession(authConfig);
  return (
    <div className="w-full h-full" username={session.user.username}>
      {children}
    </div>
  );
}
