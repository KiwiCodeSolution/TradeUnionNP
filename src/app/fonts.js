import { Inter, Roboto } from "next/font/google";

const inter = Inter({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin", "cyrillic"],
  style: "normal",
  preload: true,
});

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin", "cyrillic"],
  style: "normal",
  preload: true,
});

export { roboto, inter };
