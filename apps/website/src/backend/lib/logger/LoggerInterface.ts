export type LogLevel = 'log' | 'debug' | 'error' | 'warn';
export type LogReturn = void | boolean;
export interface LoggerInterface {
  log<T = unknown>(
    level: LogLevel,
    message: string,
    payload?: T
  ): Promise<LogReturn> | LogReturn;
}
