import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import axios from "axios";
import { BaseURL } from "@/constants/BaseUrl";
import toast from "react-hot-toast";

import { jwtDecode } from "jwt-decode";

// Не довше за життя бекового JWT (8 год), щоб сесія не переживала токен
const SESSION_MAX_AGE = 8 * 60 * 60;

export const authConfig: NextAuthOptions = {
  session: { strategy: "jwt", maxAge: SESSION_MAX_AGE },
  providers: [
    Credentials({
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.username || !credentials.password) return null;

          const response = await axios.post(`${BaseURL}auth/login`, {
            username: credentials.username,
            password: credentials.password,
          });

          if (response.status === 200) {
            const decoded = jwtDecode(response.data.access_token);
            return {
              id: decoded.sub ?? credentials.username,
              username: credentials.username,
              token: response.data.access_token,
              exp: decoded.exp,
              iat: decoded.iat,
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
        token.user = {
          username: user.username,
          token: user.token,
        };
        // `token.exp` next-auth перезаписує за maxAge, тому exp бекового токена тримаємо окремо
        token.accessExp = user.exp;
        token.iat = user.iat;
        token.sub = user.id;
      }
      return token;
    },
    // Callback для сесії
    async session({ session, token }) {
      session.user = token.user as typeof session.user;
      session.tokenExp = token.accessExp;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
};
