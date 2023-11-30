export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard",
    "/appointment",
    "/blog",
    "/message",
    "/patient",
    "/payments",
    "/scheduleTiming",
    "/settings",
  ],
};
