import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the pathname of the request (e.g. /, /dashboard)
  const { pathname } = request.nextUrl;

  // Define protected routes
  const protectedRoutes = ['/dashboard'];

  // Check if the current path is protected
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    // In a real app, you'd validate the token here
    // For demo purposes, we'll let the client-side handle auth
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};