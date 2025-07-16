/**
 * Extends the default NextAuth types to include custom properties for user, session, and JWT.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 *
 * @module next-auth
 */

/**
 * Extends the default Session interface to include additional properties.
 *
 * @interface Session
 * @property {string} user.id - The unique identifier for the user.
 * @property {string} user.name - The name of the user.
 * @property {string[]} [user.roles] - Optional roles assigned to the user.
 * @property {string} user.idToken - The ID token for the user.
 * @property {string} [user.email] - Optional email of the user.
 *
 * @extends DefaultSession
 */

/**
 * Extends the default User interface to include additional properties.
 *
 * @interface User
 * @property {string[]} [roles] - Roles assigned to the user.
 * @property {string} idToken - The ID token for the user.
 *
 * @extends DefaultUser
 */

/**
 * Extends the default JWT interface to include additional properties.
 *
 * @interface JWT
 * @property {string[]} [roles] - Optional roles assigned to the user.
 * @property {string} idToken - The ID token for the user.
 *
 * @extends DefaultJWT
 */
import NextAuth, { type DefaultSession } from "next-auth";
import { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      roles: string[];
      idToken: string;
      email?: string; // TODO: Determine if email is needed?
    } & DefaultSession;
  }

  interface User extends DefaultUser {
    roles: string[];
    idToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    roles: string[];
    idToken: string;
  }
}
