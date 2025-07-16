/**
 * Initializes NextAuth with the provided authentication configuration.
 *
 * @module auth
 *
 * @requires next-auth
 * @requires ./auth.config
 *
 * @returns {Object} An object containing the authentication methods and handlers.
 * @property {Function} auth - The main authentication function.
 * @property {Object} handlers - The authentication handlers.
 * @property {Function} signOut - Function to sign out the user.
 * @property {Function} signIn - Function to sign in the user.
 */
import NextAuth from "next-auth";
import authConfig from "./auth.config";

export const { auth, handlers, signOut, signIn } = NextAuth(authConfig);
