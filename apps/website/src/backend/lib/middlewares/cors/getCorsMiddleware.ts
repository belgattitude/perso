import Cors from 'cors';
import {
  corsDefaultOptions,
  corsWhilelistedOriginsRegexp,
} from '@/backend/config/cors.config';
import { isCorsAllowed } from './isCorsAllowed';

type CorsMiddlewareParams = {
  credentials: boolean;
};

const defaultParams = {
  credentials: true,
};

export const getCorsMiddleware = (params?: CorsMiddlewareParams) => {
  const { credentials } = { ...defaultParams, ...(params ?? {}) };

  return Cors({
    origin: (origin, callback) => {
      if (
        isCorsAllowed({
          origin: origin ?? null,
          whitelistRegExp: corsWhilelistedOriginsRegexp,
        })
      ) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    // Will set Access-Control-Max-Age
    // @link https://httptoolkit.tech/blog/cache-your-cors/#cors-caching-for-browsers
    // @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age
    maxAge: corsDefaultOptions.maxAge,
    credentials: credentials,
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH'],
    /**
     * Configures the Access-Control-Allow-Headers CORS header.
     * Expects a comma-delimited string (ex: ‘Content-Type,Authorization,x-xsrf-token’)
     * or an array (ex: ['Content-Type', 'Authorization']).
     * If not specified, defaults to reflecting the headers specified in the
     * request’s Access-Control-Request-Headers header.
     * @link https://expressjs.com/en/resources/middleware/cors.html
     */
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'X-XSRF-Token',
      'Cache-Control',
      'Pragma',
      'Range',
    ],
    exposedHeaders: ['Content-Length'],
    preflightContinue: false,
  });
};
