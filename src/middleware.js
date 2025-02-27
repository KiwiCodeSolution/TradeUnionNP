import { withAuth } from "next-auth/middleware";
import createMiddleware from "next-intl/middleware";
import { getToken } from "next-auth/jwt";

const publicPages = [
  "/",
  "/pro-nas",
  "/blanky",
  "/novyny",
  "/foto",
  "/kontakty",
  "/poshuk-po-saytu",
  "/kolektyvnyy-dohovir",
  "/ppo",
  "/zakhyst-trudovykh-prav",
  "/materialna-dopomoga",
  "/dozvillya-ta-sport",
  "/ya-profspilka",
  "/zvernennya",
  "/subscription",
  "/signin",
  "/ozdorovlennya",
  "/yak-vstupyty",
];
const locales = ["uk", "en"];

const intlMiddleware = createMiddleware({
  locales: ["uk", "en"],
  defaultLocale: "uk",
  prefixDefault: true,
});

const authMiddleware = withAuth(
  function onSuccess(req) {
    return intlMiddleware(req);
  },
  {
    callbacks: {
      authorized: async ({ req }) => {
        const res = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

        if (res?.user) {
          const currentTime = Math.floor(Date.now() / 1000);
          if (res.exp < currentTime) {
            return false;
          }

          return true;
        } else {
          return false;
        }
      },
    },

    pages: {
      signIn: "/signin",
    },
  }
);

export default function middleware(req) {
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${publicPages
      .flatMap(p => (p === "/" ? ["", "/"] : [`${p}(?:/.*)?`]))
      .join("|")})/?$`,
    "i"
  );

  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  if (isPublicPage) {
    return intlMiddleware(req);
  } else {
    return authMiddleware(req);
  }
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
