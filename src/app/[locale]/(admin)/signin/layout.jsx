import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "АдмінПанель | Вхід до АдмінПанелі",
  description: "АдмінПанель | Вхід до АдмінПанелі",
};

export default function LoginLayout({ children }) {
  return (
    <AuthProvider>
      <div className="w-4/5 h-full"> {children}</div>
    </AuthProvider>
  );
}
