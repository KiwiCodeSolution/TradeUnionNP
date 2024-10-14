import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["uk", "en"],
  defaultLocale: "uk",
  prefixDefault: true,
});

export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)", "/admin/:path*"],
};
