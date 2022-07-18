import { z } from 'zod';

export const envSchema = z.object({
  // Nextjs custom build env
  NEXTJS_DISABLE_SENTRY: z.string().optional(),
  NEXTJS_SENTRY_UPLOAD_DRY_RUN: z.string().optional(),
  // Server side env
  PRISMA_DATABASE_URL: z.string(),
  SENTRY_AUTH_TOKEN: z.string(),
  SENTRY_ORG: z.string(),
  SENTRY_PROJECT: z.string(),
  GITHUB_GRAPHQL_TOKEN: z.string(),
  APP_CACHE_DSN: z.string().optional(),
  JITSI_APP_ID: z.string(),
  PUSHER_APP_ID: z.string(),
  PUSHER_SECRET: z.string(),
  NEXTAUTH_URL: z.string(),
  NEXTAUTH_SECRET: z.string().min(60),
  // Public env
  NEXT_PUBLIC_SENTRY_RELEASE: z.string(),
  NEXT_PUBLIC_SENTRY_DSN: z.string(),
  NEXT_PUBLIC_PUSHER_CLUSTER: z.string(),
  NEXT_PUBLIC_PUSHER_KEY: z.string(),
});

export type EnvSchema = z.infer<typeof envSchema>;
