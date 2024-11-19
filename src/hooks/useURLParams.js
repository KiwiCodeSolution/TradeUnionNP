import { useRouter, useSearchParams, usePathname } from "next/navigation";

export const useURLParams = ({ locale, section, isArchive, part }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const getSectionParams = searchParams.get("section") || "vse";
  const currentPageFromURL = parseInt(searchParams.get("page")) || 1;

  const updatePageURL = selectedPage => {
    if (pathname.includes("admin")) {
      const basePath = part === "news" ? `/uk/admin/news` : `/uk/admin/photo-report`;
      router.push(
        `${basePath}?page=${selectedPage}&archive=${isArchive ? "true" : "false"}`,
        undefined,
        { shallow: true }
      );
    } else {
      const newURL = `/${locale}/${
        section === "photo" ? "foto" : `novyny?section=${getSectionParams}`
      }&page=${selectedPage}`;
      router.push(newURL, undefined, { shallow: true });
    }
  };

  return { getSectionParams, currentPageFromURL, updatePageURL };
};
