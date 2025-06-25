import "server-only";

import { StackServerApp } from "@stackframe/stack";

export const stackServerApp = new StackServerApp({
  tokenStore: "nextjs-cookie",
  baseUrl: "https://api.stack-auth.com",

});

// Extend the StackServerApp class to add the sendMagicLink method
export async function sendMagicLink({
    email,
    redirectUrl,
  }: {
    email: string;
   // password_hash: string;
    redirectUrl: string;
  }) {
    try {
      console.log(`Sending magic link to ${email} with redirect URL: $/law3/dataHome`);
      // Simulate success response
      return { success: true };
    } catch (error) {
      console.error("Error sending magic link:", error);
      return { success: false, error };
    }
  }
  

