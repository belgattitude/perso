import pino from 'pino';

export const logger = pino({
  browser: {
    asObject: true,
  },
  level: process.env.PINO_LOG_LEVEL || 'info',
  transport: {
    target: 'pino-pretty',
  },
});
