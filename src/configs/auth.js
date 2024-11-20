import Credentials from "next-auth/providers/credentials";
import axios from "axios";
import { BaseURL } from "@/constants/BaseUrl";
import toast from "react-hot-toast";

export const authConfig = {
  providers: [
    Credentials({
      credentials: {
        username: { label: "username", type: "text", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.username || !credentials.password) return null;

          const response = await axios.post(`${BaseURL}auth/login`, {
            username: credentials.username,
            password: credentials.password,
          });

          if (response.status === 200) {
            return {
              username: credentials.username,
              token: response.data.access_token,
            };
          }

          return null;
        } catch (error) {
          toast.error(`Помилка авторизації.`);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    // Callback для сесії
    async session({ session, token }) {
      session.user = token.user; // Додаємо дані користувача у сесію
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
};
