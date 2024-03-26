import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/app", "/app/api/webhooks/clerk", "/app/api/webhooks/stripe"],
  ignoredRoutes: ["/no-auth-in-this-route"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
