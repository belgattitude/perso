import type { LoggerInterface, LogLevel } from './LoggerInterface';

export class ConsoleLogger implements LoggerInterface {
  log(level: LogLevel, message: string, payload?: unknown) {
    console.log(level, message, payload);
  }
}
