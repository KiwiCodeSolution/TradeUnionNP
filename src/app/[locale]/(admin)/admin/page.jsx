"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminPage({ params }) {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      router.push(`/${params.locale}/login`);
    } else {
      router.push(`/${params.locale}/admin/news`);
    }
  }, [router]);

  return <main className="w-4/5">AdminPage</main>;
}
