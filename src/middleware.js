import { withAuth } from "next-auth/middleware";
import createIntlMiddleware from "next-intl/middleware";
import { getToken } from "next-auth/jwt";

const locales = ["uk", "en"];

const intlMiddleware = createIntlMiddleware({
  locales: ["uk", "en"],
  defaultLocale: "uk",
  prefixDefault: true,
});

// шляхи, які потребують авторизації
const protectedRoutes = ["/uk/admin", "/uk/admin/*", "/en/admin", "/en/admin/*"];

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

      if (token.exp && token.exp < currentTime) {
        return false;
      }

      return true;
    },
  },
  pages: {
    signIn: "/signin",
  },
});

export default function middleware(req) {
  const protectedPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${protectedRoutes
      .flatMap(p => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i"
  );
  const isProtectedPage = protectedPathnameRegex.test(req.nextUrl.pathname);

  if (isProtectedPage) {
    return authMiddleware(req);
  } else {
    return intlMiddleware(req);
  }
}

export const config = {
  matcher: [
    "/((?!api|_next|favicon.ico|.*\\.(?:png|jpg|svg|webp)$|robots.txt|sitemap.xml|\\.well-known).*)",
  ],
};
