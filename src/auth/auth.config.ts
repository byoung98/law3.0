/**
 * @file auth.config.ts
 * @description NextAuth configuration for OIDC/OAuth2.0 authentication using TI Ping as the identity provider.
 *
 * This file configures authentication with OpenID Connect (OIDC) and OAuth2.0, session management, JWT handling,
 * and user profile transformation for use in a Next.js application.
 *
 * @module authConfig
 *
 * @requires next-auth
 *
 * @constant {boolean} ADD_JWT_TO_SESSION - If true, adds the JWT to the session object.
 * @constant {number} SESSION_TIMEOUT_SECONDS - Session idle timeout in seconds.
 * @constant {string} BASE_PATH - Base path for authentication API routes.
 *
 * @typedef {import("next-auth").NextAuthConfig} NextAuthConfig
 *
 * @property {string} basePath - Base path for authentication API.
 * @property {Array} providers - Array of authentication providers.
 * @property {Object} session - Session management configuration.
 * @property {Object} callbacks - Callback functions for JWT and session handling.
 *
 * @callback jwt
 * @param {Object} params - Parameters containing token and user.
 * @param {Object} params.token - JWT token object.
 * @param {Object} params.user - User object.
 * @returns {Promise<Object>} Updated token object.
 *
 * @callback session
 * @param {Object} params - Parameters containing session and token.
 * @param {Object} params.session - Session object.
 * @param {Object} params.token - JWT token object.
 * @returns {Promise<Object>} Updated session object.
 *
 * @example
 * import authConfig from './auth.config';
 * export default NextAuth(authConfig);
 */

import { NextAuthConfig } from "next-auth";
export const RolePrefixKeys = { rs: "rs|", ad: "ad|", ldap: "ldap|" } as const;

// 💡Hint! If you want to add JWT to session object, set to true.
const ADD_JWT_TO_SESSION = false;

// 💡Hint! Set session timeout.
const SESSION_TIMEOUT_SECONDS = 60 * 60; // 1 hour idle-timeout

export const BASE_PATH = "/api/auth";

const authConfig = {
  basePath: BASE_PATH,
  providers: [
    {
      wellKnown: process.env.OIDC_WELL_KNOWN_URL,
      id: "ti",
      name: "TI SSO",
      type: "oidc",
      issuer: process.env.OIDC_ISSUER,
      clientId: process.env.OIDC_CLIENT_ID,
      clientSecret: process.env.OIDC_CLIENT_SECRET,
      authorization: {
        params: {
          scope: `${process.env.OIDC_SCOPE}`,
        },
      },
      idToken: true,
      profile(profile, tokens) {
        const roleComposite: string[] = [
          ...(profile?.role_info
            ? profile.role_info.map(
                (role: string) => `${RolePrefixKeys.rs}${role}`
              )
            : []),
          ...(profile?.ADGroups
            ? profile.ADGroups.map(
                (role: string) => `${RolePrefixKeys.ad}${role}`
              )
            : []),
          ...(profile?.LDAPGroups
            ? profile.LDAPGroups.map(
                (role: string) => `${RolePrefixKeys.ldap}${role}`
              )
            : []),
        ];

        return {
          ...profile,
          idToken: tokens.id_token,
          roles: roleComposite,
          name:
            profile?.given_name !== undefined
              ? profile.given_name
              : profile?.cn,
        };
      },
    },
  ],
  session: {
    strategy: "jwt",
    maxAge: SESSION_TIMEOUT_SECONDS,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        if (ADD_JWT_TO_SESSION) {
          token.idToken = user.idToken;
        }
        token.roles = [];
        token.roles.push(...user.roles);

        if ("sub" in user) {
          token.sub = user.sub as string;
        }
      }
      return token;
    },
    async session({ session, token }) {
      session.user.roles = token.roles;
      session.user.id = token.sub ?? "";
      session.user.idToken = token.idToken; // uncomment to add JWT to session
      return session;
    },
  },
} satisfies NextAuthConfig;

export default authConfig;
