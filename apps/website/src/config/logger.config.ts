import { pino } from 'pino';
import pretty from 'pino-pretty';
import packageJson from '../../package.json';

export const logger = pino({
  name: 'website-log',
  browser: {
    asObject: true,
  },
  level: process.env.PINO_LOG_LEVEL || 'info',
  stream: pretty({
    colorize: process.env.NODE_ENV === 'development',
  }),
  base: {
    app: `${packageJson.name}`,
    release: `${packageJson.version}`,
  },
});
