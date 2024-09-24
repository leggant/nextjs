// import { NextResponse } from 'next/server';
// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// const isDashboardRoute = createRouteMatcher(['/dashboard']);
// const isProtectedBannedUserRoute = createRouteMatcher(['/dashboard/banned']);
// const isProtectedSpamUserRoute = createRouteMatcher(['/dashboard/spam']);
// const isProtectedAdminRoute = createRouteMatcher(['/dashboard/admin(.*)']);
// const isProtectedUserRoute = createRouteMatcher([
//   '/dashboard/user(.*)',
//   '/adopt/apply(.*)',
// ]);

// export default clerkMiddleware((auth, req) => {
//   const claim = auth().sessionClaims?.metadata.role;
//   const { userId } = auth();
//   if (isDashboardRoute(req)) {
//     if (userId && claim) {
//       switch (claim) {
//         case 'ADMIN':
//           return NextResponse.rewrite(new URL('/dashboard/admin', req.url));
//         case 'USER':
//           return NextResponse.rewrite(new URL('/dashboard/user', req.url));
//         case 'SPAM':
//           return NextResponse.rewrite(new URL('/dashboard/spam', req.url));
//         case 'BLOCKED':
//           return NextResponse.rewrite(new URL('/dashboard/banned', req.url));
//       }
//     }
//     return NextResponse.redirect(new URL('/', req.url));
//   }
//   if (isProtectedAdminRoute(req)) {
//     if (claim !== 'ADMIN') {
//       return NextResponse.redirect(new URL('/dashboard', req.url));
//     }
//     auth().protect();
//   }
//   if (isProtectedUserRoute(req)) {
//     if (claim !== 'USER') {
//       return NextResponse.redirect(new URL('/dashboard', req.url));
//     }
//     auth().protect();
//   }
//   if (isProtectedBannedUserRoute(req)) {
//     if (claim !== 'BLOCKED') {
//       return NextResponse.redirect(new URL('/dashboard', req.url));
//     }
//     auth().protect();
//   }
//   if (isProtectedSpamUserRoute(req)) {
//     if (claim !== 'SPAM') {
//       return NextResponse.redirect(new URL('/dashboard', req.url));
//     }
//     auth().protect();
//   }
// });

export default function middleware() {}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
