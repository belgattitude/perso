import Cors from 'cors';
import {
  corsDefaultOptions,
  corsWhilelistedOriginsRegexp,
} from '@/backend/config/cors.config';
import { isCorsAllowed } from './isCorsAllowed';

export const getCorsMiddleware = () => {
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
    maxAge: corsDefaultOptions.maxAge,
    credentials: true,
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
    // Do not let preflight continue cause otherwise you need to
    // change the options into a GET in next-connect api routes
    preflightContinue: true,
  });
};
