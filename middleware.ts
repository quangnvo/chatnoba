import { withAuth } from "next-auth/middleware";

export default withAuth;

// The config is used to tell NextAuth which routes to protect. For example, when you go to the /chat, /chat/:id, or /register routes, NextAuth will check if you are authenticated (Nghĩa là có "session" hay không). If you are not, it will redirect you to the login page (Login page này là LOGIN PAGE CỦA NEXTAUTH).
export const config = {
  matcher: ["/chat", "/chat/:id*", "/register"],
};
