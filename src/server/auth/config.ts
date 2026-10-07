import { PrismaAdapter } from "@auth/prisma-adapter";
import { type DefaultSession, type NextAuthConfig } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

import { db } from "~/server/db";
import { env } from "~/env";

// Discord user IDs allowed to sign in. Empty list = open to anyone.
const ALLOWED_DISCORD_IDS = (env.AUTH_ALLOWED_DISCORD_IDS ?? "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authConfig = {
  providers: [
    // Discord enabled RFC 9207, so it now returns an `iss` on the OAuth
    // redirect. Auth.js validates it against the provider's issuer, which the
    // bare provider doesn't set (it falls back to the "https://authjs.dev"
    // placeholder and rejects every callback). Declaring Discord's real issuer
    // fixes sign-in. (Client id/secret are still inferred from AUTH_DISCORD_*.)
    DiscordProvider({ issuer: "https://discord.com" }),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
  adapter: PrismaAdapter(db),
  callbacks: {
    // Gate sign-in to the allowlist (by Discord user ID). If the allowlist is
    // empty, anyone with a Discord account may sign in.
    signIn: ({ account }) => {
      if (ALLOWED_DISCORD_IDS.length === 0) return true;
      if (account?.provider !== "discord") return false;
      return ALLOWED_DISCORD_IDS.includes(account.providerAccountId);
    },
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
} satisfies NextAuthConfig;
