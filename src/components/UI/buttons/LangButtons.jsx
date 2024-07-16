"use client";

import i18nConfig from "../../../../i18nConfig";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

const LangButtons = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = value => {
    const newLocale = value;
    // i18n.changeLanguage(value);
    console.log(i18nConfig.defaultLocale);

    if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
    }

    router.refresh();
  };

  return (
    <div className="flex gap-x-1">
      <button className="text-red uppercase" onClick={() => handleChange("uk")}>
        ua
      </button>
      <button className="text-red uppercase" onClick={() => handleChange("en")}>
        en
      </button>
    </div>
  );
};

export default LangButtons;
