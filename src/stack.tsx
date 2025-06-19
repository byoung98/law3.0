import "server-only";

import { StackServerApp } from "@stackframe/stack";

// Extend the StackServerApp class to add the sendMagicLink method
class CustomStackServerApp extends StackServerApp {
  async sendMagicLink({
    email,
   redirectUrl,
  }: {
    email: string;
    password: string;
    redirectUrl: string;
  }) {
    try {
      // Replace this with the actual implementation for sending a magic link
      console.log(`Sending magic link to ${email} with redirect URL: $/law3/dataHome`);
      // Simulate success response
      return { success: true };
    } catch (error) {
      console.error("Error sending magic link:", error);
      return { success: false, error };
    }
  }
}

// Initialize the CustomStackServerApp instance
export const stackServerApp = new CustomStackServerApp({
  tokenStore: "nextjs-cookie", // Store tokens in cookies for Next.js
});

// Add a custom method to send a magic link
stackServerApp.sendMagicLink = async function ({
  email,
  redirectUrl,
}: {
  email: string;
  redirectUrl: string;
}) {
  try {
    // Replace this with the actual implementation for sending a magic link
    console.log(`Sending magic link to ${email} with redirect URL: $/law3/dataHome`);
    // Simulate success response
    return { success: true };
  } catch (error) {
    console.error("Error sending magic link:", error);
    return { success: false, error };
  }
};