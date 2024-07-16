"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      router.push("/login");
    } else {
      router.push("/admin/news");
    }
  }, [router]);

  return <main className="w-4/5">AdminPage</main>;
}
