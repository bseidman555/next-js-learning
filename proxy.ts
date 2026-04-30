import { withAuth } from "next-auth/middleware";

// Rename the default export function if you aren't using the shorthand
export default withAuth({
    pages: {
        signIn: "/",
    },
});

export const config = {
    matcher: ["/dashboard/:path*"],
};