import { isHttpException } from '@belgattitude/http-exception';
import type { LoggerInterface, LogLevel } from './LoggerInterface';

export class ConsoleLogger implements LoggerInterface {
  log(level: LogLevel, message: string, payload?: unknown): void {
    if (isHttpException(payload)) {
      const { statusCode, url, name } = payload;
      console.error(message, { name, statusCode, url });
    } else {
      console.log(message);
    }
  }
}
