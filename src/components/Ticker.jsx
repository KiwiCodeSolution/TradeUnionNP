import { StoreProvider } from "@/store/StoreProvider";
import TickerTelegram from "./TickerTelegram";
import TickerViber from "./TickerViber";

export default function Ticker({ tgMessages, vbMessages, contacts }) {
  return (
    <StoreProvider>
      <TickerTelegram messages={tgMessages} link={contacts.telegrambot} />
      <TickerViber messages={vbMessages} link={contacts.viberbot} />
    </StoreProvider>
  );
}
