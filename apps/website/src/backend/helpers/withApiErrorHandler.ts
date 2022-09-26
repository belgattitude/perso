import { loggerConfig } from '@/backend/config';
import { BetterNextErrorFactory } from '@/backend/lib';

const errorHandler = new BetterNextErrorFactory(loggerConfig.logger);

export const withApiErrorHandler = errorHandler.createWithApiErrorHandler();
