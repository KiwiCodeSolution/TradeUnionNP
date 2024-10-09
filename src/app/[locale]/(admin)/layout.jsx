import { roboto } from "../(client)/fonts";
import "../(client)/globals.css";

export default async function RootLayout({ children }) {
  return (
    <html className="min-h-screen">
      <body className={`${roboto.className} min-h-screen`}>
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
