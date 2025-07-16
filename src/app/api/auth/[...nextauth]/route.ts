/**
 * Exports GET and POST authentication handlers for the NextAuth API route.
 * Handlers are imported from the "@/auth" module.
 */

import { handlers } from "@/auth";

export const { GET, POST } = handlers;
