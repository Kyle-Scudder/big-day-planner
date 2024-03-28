import { authMiddleware } from '@clerk/nextjs'

// See https://clerk.com/docs/references/nextjs/auth-middleware
// for more information about configuring your Middleware

export default authMiddleware({
  // An array of public routes that don't require authentication.
  publicRoutes: ['/api/webhook/clerk', '/'],

  // An array of routes to be ignored by the authentication middleware.
  ignoredRoutes: ['/api/webhook/clerk'],
  debug: false
})

export const config = {
  matcher: [
    // Exclude files with a "." followed by an extension, which are typically static files.
    // Exclude files in the _next directory, which are Next.js internals.

    '/((?!.+\\.[\\w]+$|_next).*)',
    // Re-include any files in the api or trpc folders that might have an extension
    '/(api|trpc)(.*)'
  ]
}
