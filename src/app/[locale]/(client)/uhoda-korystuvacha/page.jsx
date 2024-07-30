import UserAgreement from "@/components/sections/userAgreement/UserAgreement";

export default function UserAgreementPage({ params }) {
  return (
    <main className="w-full">
      <UserAgreement locale={params.locale} />
    </main>
  );
}
