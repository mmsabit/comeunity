import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./lib/auth";

export async function proxy(request: NextRequest) {
    const session = await auth.api.getSession({
        headers: request.headers,
    });

    const user = session?.user;
    const { pathname } = request.nextUrl;

    const protectedRoutes = [
        "/new_event",
        "/newevent",
        "/myevent",
        "/myevents",
        "/joined_event",
        "/joined-events",
    ];

    const authRoutes = ["/signin", "/signup"];

    const isEventDetails = /^\/event\/.+/.test(pathname);

    const isProtectedRoute =
        protectedRoutes.some(
            (route) => pathname === route || pathname.startsWith(`${route}/`)
        ) || isEventDetails;

    const isAuthRoute = authRoutes.some(
        (route) => pathname === route || pathname.startsWith(`${route}/`)
    );

    if (!user && isProtectedRoute) {
        return NextResponse.redirect(new URL("/signin", request.url));
    }

    if (user && isAuthRoute) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/new_event",
        "/newevent",
        "/myevent",
        "/myevents",
        "/joined_event",
        "/joined-events",
        "/event/:path+",
        "/signin",
        "/signup",
    ],
};
