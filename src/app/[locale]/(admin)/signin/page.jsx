import LoginForm from "@/components/sections/login/LoginForm";

export default function LoginPage() {
  return (
    <main className="w-screen h-screen flex items-center justify-center login">
      <div className="w-1/2 min-h-[450px] bg-white border border-red rounded-xl relative z-[1] shadow-redButton py-14 px-10 flex flex-col items-center gap-y-8">
        <h2 className="text-4xl text-center text-red font-semibold">Вхід до АдмінПанелі</h2>
        <LoginForm />
      </div>
    </main>
  );
}
