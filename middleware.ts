import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect the main analytics path
  if (pathname.startsWith('/admin/analytics')) {
    const sessionCookie = request.cookies.get('admin_session')?.value;
    const adminPassphrase = process.env.ADMIN_PASSPHRASE || 'admin123';

    if (sessionCookie !== adminPassphrase) {
      // Clear cookie if it's invalid and redirect
      const response = NextResponse.redirect(new URL('/admin/login', request.url));
      response.cookies.delete('admin_session');
      return response;
    }
  }

  return NextResponse.next();
}

// Matching paths starting with /admin/analytics
export const config = {
  matcher: ['/admin/analytics/:path*'],
};
