import type { EnvSchema } from '@/config/env-schema';

declare global {
  declare namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface ProcessEnv extends EnvSchema {}
  }
}
