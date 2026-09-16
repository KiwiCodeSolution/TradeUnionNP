"use client";

import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import { StoreProvider, useStore } from "@/store/StoreProvider";

const SupportEmailLinkComponent = observer(({ className }) => {
  const { contactsStore } = useStore();
  const allContacts = toJS(contactsStore.contacts);
  const email = allContacts?.[0]?.mail;

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!contactsStore.isLoading && !contactsStore.contacts?.length) {
      contactsStore.fetchContacts();
    }
  }, [contactsStore]);

  if (!isClient || !email) return null;

  return (
    <a className={className} href={`mailto:${email}`}>
      {email}
    </a>
  );
});

export default function SupportEmailLink({ className }) {
  return (
    <StoreProvider>
      <SupportEmailLinkComponent className={className} />
    </StoreProvider>
  );
}
