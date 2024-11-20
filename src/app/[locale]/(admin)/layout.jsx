import { roboto } from "../(client)/fonts";
import { Toaster } from "react-hot-toast";
import "../(client)/globals.css";
import { Providers } from "@/components/Providers";

export default async function RootLayout({ children }) {
  return (
    <html className="min-h-screen">
      <body className={`${roboto.className} min-h-screen`}>
        <Providers>
          <div className="min-h-screen">{children}</div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
