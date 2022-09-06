/* eslint-disable @typescript-eslint/naming-convention */
import {
  HttpBadGateway,
  HttpBandwidthLimitExceeded,
  HttpGatewayTimeout,
  HttpInsufficientStorage,
  HttpInternalServerError,
  HttpLoopDetected,
  HttpNetworkAuthenticationRequired,
  HttpNotExtended,
  HttpNotImplemented,
  HttpServiceUnavailable,
  HttpVariantAlsoNegociates,
  HttpVersionNotSupported,
} from '../server';

export const serverStatusCodes = {
  500: HttpInternalServerError,
  501: HttpNotImplemented,
  502: HttpBadGateway,
  503: HttpServiceUnavailable,
  504: HttpGatewayTimeout,
  505: HttpVersionNotSupported,
  506: HttpVariantAlsoNegociates,
  507: HttpInsufficientStorage, // webdav
  508: HttpLoopDetected, // webdav
  509: HttpBandwidthLimitExceeded,
  510: HttpNotExtended,
  511: HttpNetworkAuthenticationRequired,
  // Cloudflare related
  /*
  520: 'Unknown Error',
  521: 'Web Server Is Down',
  522: 'Connection Timed Out',
  523: 'Origin Is Unreachable',
  524: 'A Timeout Occurred',
  525: 'SSL Handshake Failed',
  526: 'Invalid SSL Certificate',
   */
} as const;

export type HttpServerStatusCode = keyof typeof serverStatusCodes;
