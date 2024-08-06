"use client";

import { useSearchParams } from "next/navigation";

export default function SearchPageComponent({ text, warning }) {
  const searchParams = useSearchParams();

  const search = searchParams.get("query");

  return (
    <>
      <p>
        {text} {search}
      </p>

      <p className="mt-10">
        <strong> {warning[0]}:</strong> {warning[1]}
      </p>
    </>
  );
}
