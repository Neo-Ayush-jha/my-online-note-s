import { NextResponse } from "next/server";
export function middleware(request) {
    const path = request.nextUrl.pathname;
    const isPublicPath = path === "/login" || path === "/singup"
    const token = request.cookies.get("token")?.value || ''
    if (isPublicPath && token){
        return NextResponse.redirect(new URL("/content/insert", request.nextUrl))
    }
    if (!isPublicPath && !token){
        return NextResponse.redirect(new URL("/login", request.nextUrl))
    }
}
export const config = {
    matcher: ['/content/insert', '/login', '/singup']
}