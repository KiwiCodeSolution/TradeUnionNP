import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = localStorage.getItem("token"); // Отримуємо токен з локального сховища
  const { pathname } = req.nextUrl;

  if (!token && pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
