import { useMemo } from "react";
import { toJS } from "mobx";
import { useStore } from "@/store/StoreProvider";

const DEFAULT_BOT_LINKS = {
  telegram: "https://t.me/PROFSPILKA_NP_BOT",
  viber: "https://viber.com/profspilka_np",
};

export function useBotLinks() {
  const { contactsStore } = useStore();
  const allContacts = toJS(contactsStore.contacts);

  return useMemo(() => {
    const contacts = allContacts?.[0];

    return {
      telegram: contacts?.telegrambot || DEFAULT_BOT_LINKS.telegram,
      viber: contacts?.viberbot || DEFAULT_BOT_LINKS.viber,
    };
  }, [allContacts]);
}
