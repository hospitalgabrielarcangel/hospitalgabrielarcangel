import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
  },
  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_APP_URL: z.url(),
    NEXT_PUBLIC_PHONE_NUMBER_MALE: z.e164(),
    NEXT_PUBLIC_PHONE_NUMBER_FEMALE: z.e164(),
    NEXT_PUBLIC_CONTACT_EMAIL_MALE: z.email(),
    NEXT_PUBLIC_CONTACT_EMAIL_FEMALE: z.email(),
    NEXT_PUBLIC_ADDRESS_MALE: z.string(),
    NEXT_PUBLIC_ADDRESS_LINK_MALE: z.url(),
    NEXT_PUBLIC_ADDRESS_FEMALE: z.string(),
    NEXT_PUBLIC_ADDRESS_LINK_FEMALE: z.url(),
  },
  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_PHONE_NUMBER_MALE: process.env.NEXT_PUBLIC_PHONE_NUMBER_MALE,
    NEXT_PUBLIC_PHONE_NUMBER_FEMALE:
      process.env.NEXT_PUBLIC_PHONE_NUMBER_FEMALE,
    NEXT_PUBLIC_CONTACT_EMAIL_MALE: process.env.NEXT_PUBLIC_CONTACT_EMAIL_MALE,
    NEXT_PUBLIC_CONTACT_EMAIL_FEMALE:
      process.env.NEXT_PUBLIC_CONTACT_EMAIL_FEMALE,
    NEXT_PUBLIC_ADDRESS_MALE: process.env.NEXT_PUBLIC_ADDRESS_MALE,
    NEXT_PUBLIC_ADDRESS_LINK_MALE: process.env.NEXT_PUBLIC_ADDRESS_LINK_MALE,
    NEXT_PUBLIC_ADDRESS_FEMALE: process.env.NEXT_PUBLIC_ADDRESS_FEMALE,
    NEXT_PUBLIC_ADDRESS_LINK_FEMALE:
      process.env.NEXT_PUBLIC_ADDRESS_LINK_FEMALE,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
})
