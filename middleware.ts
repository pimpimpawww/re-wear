import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if user has seen onboarding
  const hasSeenOnboarding = request.cookies.get('hasSeenOnboarding');
  
  // If accessing root and hasn't seen onboarding, redirect to onboarding
  if (pathname === '/' && !hasSeenOnboarding) {
    return NextResponse.redirect(new URL('/onboarding', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/home'],
};
