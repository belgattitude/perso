import * as Client from '../client';
import * as Server from '../server';
import type { HttpErrorParams } from '../types';

type Params = HttpErrorParams | string;

export const httpException = {
  client: {
    /**
     * Client status 400
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400
     */
    badRequest: (msgOrParams?: Params) => {
      return new Client.HttpBadRequest(msgOrParams);
    },
    /**
     * Client status 401
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401
     */
    unauthorized: (msgOrParams?: Params) => {
      return new Client.HttpUnauthorized(msgOrParams);
    },
    /**
     * Client status 402
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402
     */
    paymentRequired: (msgOrParams?: Params) => {
      return new Client.HttpPaymentRequired(msgOrParams);
    },
    /**
     * Client status 403
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403
     */
    forbidden: (msgOrParams?: Params) => {
      return new Client.HttpForbidden(msgOrParams);
    },
    /**
     * Client status 404
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404
     */
    notFound: (msgOrParams?: Params) => {
      return new Client.HttpNotFound(msgOrParams);
    },
    /**
     * Client status 405
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
     */
    methodNotAllowed: (msgOrParams?: Params) => {
      return new Client.HttpMethodNotAllowed(msgOrParams);
    },
    /**
     * Client status 406
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406
     */
    notAcceptable: (msgOrParams?: Params) => {
      return new Client.HttpNotAcceptable(msgOrParams);
    },
    /**
     * Client status 407
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407
     */
    proxyAuthenticationRequired: (msgOrParams?: Params) => {
      return new Client.HttpProxyAuthenticationRequired(msgOrParams);
    },
    /**
     * Client status 408
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408
     */
    requestTimeout: (msgOrParams?: Params) => {
      return new Client.HttpRequestTimeout(msgOrParams);
    },
    /**
     * Client status 409
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409
     */
    conflict: (msgOrParams?: Params) => {
      return new Client.HttpConflict(msgOrParams);
    },
    /**
     * Client status 410
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410
     */
    gone: (msgOrParams?: Params) => {
      return new Client.HttpGone(msgOrParams);
    },
    /**
     * Client status 411
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411
     */
    lengthRequired: (msgOrParams?: Params) => {
      return new Client.HttpLengthRequired(msgOrParams);
    },
    /**
     * Client status 412
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412
     */
    preconditionFailed: (msgOrParams?: Params) => {
      return new Client.HttpPreconditionFailed(msgOrParams);
    },
    /**
     * Client status 413
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413
     */
    payloadTooLarge: (msgOrParams?: Params) => {
      return new Client.HttpPayloadTooLarge(msgOrParams);
    },
    /**
     * Client status 414
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414
     */
    uriTooLong: (msgOrParams?: Params) => {
      return new Client.HttpUriTooLong(msgOrParams);
    },
    /**
     * Client status 415
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415
     */
    unsupportedMediaType: (msgOrParams?: Params) => {
      return new Client.HttpUnsupportedMediaType(msgOrParams);
    },
    /**
     * Client status 416
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416
     */
    rangeNotSatisfiable: (msgOrParams?: Params) => {
      return new Client.HttpRangeNotSatisfiable(msgOrParams);
    },
    /**
     * Client status 417
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417
     */
    expectationFailed: (msgOrParams?: Params) => {
      return new Client.HttpExpectationFailed(msgOrParams);
    },
    /**
     * Client status 418
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418
     */
    imATeapot: (msgOrParams?: Params) => {
      return new Client.HttpImATeapot(msgOrParams);
    },
    /**
     * Client status 421
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/421
     */
    misredirectedRequest: (msgOrParams?: Params) => {
      return new Client.HttpMisredirectedRequest(msgOrParams);
    },
    /**
     * Client status 422
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422
     */
    unprocessableEntity: (msgOrParams?: Params) => {
      return new Client.HttpUnprocessableEntity(msgOrParams);
    },
    /**
     * Client status 423
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/423
     */
    locked: (msgOrParams?: Params) => {
      return new Client.HttpLocked(msgOrParams);
    },
    /**
     * Client status 424
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/424
     */
    failedDependency: (msgOrParams?: Params) => {
      return new Client.HttpFailedDependency(msgOrParams);
    },
    /**
     * Client status 425
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/425
     */
    tooEarly: (msgOrParams?: Params) => {
      return new Client.HttpTooEarly(msgOrParams);
    },
    /**
     * Client status 426
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426
     */
    upgradeRequired: (msgOrParams?: Params) => {
      return new Client.HttpUpgradeRequired(msgOrParams);
    },
    /**
     * Client status 428
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428
     */
    preconditionRequired: (msgOrParams?: Params) => {
      return new Client.HttpPreconditionRequired(msgOrParams);
    },
    /**
     * Client status 429
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429
     */
    tooManyRequests: (msgOrParams?: Params) => {
      return new Client.HttpTooManyRequests(msgOrParams);
    },
    /**
     * Client status 431
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431
     */
    requestHeaderFieldsTooLarge: (msgOrParams?: Params) => {
      return new Client.HttpRequestHeaderFieldsTooLarge(msgOrParams);
    },
    /**
     * Client status 451
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451
     */
    unavailableForLegalReasons: (msgOrParams?: Params) => {
      return new Client.HttpUnavailableForLegalReasons(msgOrParams);
    },
  } as const,
  server: {
    /**
     * Server status 500
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500
     */
    internalServerError: (msgOrParams?: Params) => {
      return new Server.HttpInternalServerError(msgOrParams);
    },
    /**
     * Server status 501
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501
     */
    notImplemented: (msgOrParams?: Params) => {
      return new Server.HttpNotImplemented(msgOrParams);
    },
    /**
     * Server status 502
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502
     */
    badGateway: (msgOrParams?: Params) => {
      return new Server.HttpBadGateway(msgOrParams);
    },
    /**
     * Server status 503
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503
     */
    serviceUnavailable: (msgOrParams?: Params) => {
      return new Server.HttpServiceUnavailable(msgOrParams);
    },
    /**
     * Server status 504
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504
     */
    gatewayTimeout: (msgOrParams?: Params) => {
      return new Server.HttpGatewayTimeout(msgOrParams);
    },
    /**
     * Server status 505
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505
     */
    versionNotSupported: (msgOrParams?: Params) => {
      return new Server.HttpVersionNotSupported(msgOrParams);
    },
    /**
     * Server status 506
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/506
     */
    variantAlsoNegociates: (msgOrParams?: Params) => {
      return new Server.HttpVariantAlsoNegociates(msgOrParams);
    },
    /**
     * Server status 507
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507
     */
    insufficientStorage: (msgOrParams?: Params) => {
      return new Server.HttpInsufficientStorage(msgOrParams);
    },
    /**
     * Server status 508
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/508
     */
    loopDetected: (msgOrParams?: Params) => {
      return new Server.HttpLoopDetected(msgOrParams);
    },
    /**
     * Server status 509
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/509
     */
    bandwidthLimitExceeded: (msgOrParams?: Params) => {
      return new Server.HttpBandwidthLimitExceeded(msgOrParams);
    },
    /**
     * Server status 510
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/510
     */
    notExtended: (msgOrParams?: Params) => {
      return new Server.HttpNotExtended(msgOrParams);
    },
    /**
     * Server status 511
     * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/511
     */
    networkAuthenticationRequired: (msgOrParams?: Params) => {
      return new Server.HttpNetworkAuthenticationRequired(msgOrParams);
    },
  } as const,
} as const;
