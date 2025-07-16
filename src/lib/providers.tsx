/**
 * Providers component that wraps the application with context providers.
 *
 * Currently includes:
 * - `SessionProvider` from `next-auth/react` for authentication session management.
 *
 * Add additional providers here as needed.
 */

"use client";

import { SessionProvider } from "next-auth/react";

export interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return <SessionProvider>{children}</SessionProvider>;
}