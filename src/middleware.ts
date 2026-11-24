import { withAuth } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";
import createIntlMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";

const locales = ["uk", "en"];

const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale: "uk",
});

// усі сторінки адмінки: /admin, /uk/admin, /en/admin/news/... (з локаллю або без)
const protectedPathnameRegex = new RegExp(`^(/(${locales.join("|")}))?/admin(/|$)`, "i");

const authMiddleware = withAuth(req => intlMiddleware(req), {
  callbacks: {
    authorized: async ({ req }) => {
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
        secureCookie: false,
      });

      if (!token || !token.user) return false;

      const currentTime = Math.floor(Date.now() / 1000);

      if (typeof token.exp === "number" && token.exp < currentTime) {
        return false;
      }

      return true;
    },
  },
  pages: {
    signIn: "/signin",
  },
});

export default function middleware(req: NextRequest) {
  if (protectedPathnameRegex.test(req.nextUrl.pathname)) {
    // withAuth очікує NextRequestWithAuth; сам додає токен під час виклику
    return (authMiddleware as unknown as (req: NextRequest) => Response | Promise<Response>)(req);
  }
  return intlMiddleware(req);
}

export const config = {
  matcher: [
    "/((?!api|_next|favicon.ico|.*\\.(?:png|jpg|svg|webp)$|robots.txt|sitemap.xml|\\.well-known).*)",
  ],
};
