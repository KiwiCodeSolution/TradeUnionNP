import axios from "axios";
import { signOut } from "next-auth/react";
import { BaseURL } from "@/constants/BaseUrl";

let installed = false;
let signingOut = false;

// Єдина обробка 401 для адмін-запитів: бековий JWT сплив або недійсний → вихід на /signin.
// Спрацьовує лише на запити до нашого бека, які несли Authorization (публічні форми не чіпаємо).
export function installUnauthorizedHandler() {
  if (installed || typeof window === "undefined") return;
  installed = true;

  axios.interceptors.response.use(
    response => response,
    error => {
      const config = error?.config;
      const isOurApi = typeof config?.url === "string" && config.url.startsWith(BaseURL);
      const hadAuth = Boolean(config?.headers?.Authorization);

      if (error?.response?.status === 401 && isOurApi && hadAuth && !signingOut) {
        signingOut = true;
        signOut({ callbackUrl: "/signin" });
      }

      return Promise.reject(error);
    }
  );
}
