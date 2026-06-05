import { StoreProvider } from "@/store/StoreProvider";
import TickerTelegram from "./TickerTelegram";
import TickerViber from "./TickerViber";

export default function Ticker({ tgMessages, vbMessages }) {
  return (
    <StoreProvider>
      <TickerTelegram messages={tgMessages} />
      <TickerViber messages={vbMessages} />
    </StoreProvider>
  );
}
