import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    username: string;
    token: string;
    // exp/iat бекового JWT (секунди)
    exp?: number;
    iat?: number;
  }

  interface Session {
    user: {
      username: string;
      token: string;
    } & DefaultSession["user"];
    // коли спливає бековий JWT (секунди)
    tokenExp?: number;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user?: {
      username: string;
      token: string;
    };
    // exp бекового JWT; власне `exp` токена next-auth перезаписує сам
    accessExp?: number;
  }
}
