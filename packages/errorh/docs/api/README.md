@belgattitude/errorh - v1.0.0

# @belgattitude/errorh - v1.0.0

## Table of contents

### Classes

- [HttpBadGateway](classes/HttpBadGateway.md)
- [HttpBadMapping](classes/HttpBadMapping.md)
- [HttpBadRequest](classes/HttpBadRequest.md)
- [HttpBandwidthLimitExceeded](classes/HttpBandwidthLimitExceeded.md)
- [HttpConflict](classes/HttpConflict.md)
- [HttpError](classes/HttpError.md)
- [HttpExpectationFailed](classes/HttpExpectationFailed.md)
- [HttpForbidden](classes/HttpForbidden.md)
- [HttpGatewayTimeout](classes/HttpGatewayTimeout.md)
- [HttpGone](classes/HttpGone.md)
- [HttpImATeapot](classes/HttpImATeapot.md)
- [HttpInternalServerError](classes/HttpInternalServerError.md)
- [HttpLengthRequired](classes/HttpLengthRequired.md)
- [HttpMethodNotAllowed](classes/HttpMethodNotAllowed.md)
- [HttpMisdirectedRequest](classes/HttpMisdirectedRequest.md)
- [HttpNetworkAuthenticationRequired](classes/HttpNetworkAuthenticationRequired.md)
- [HttpNotAcceptable](classes/HttpNotAcceptable.md)
- [HttpNotExtended](classes/HttpNotExtended.md)
- [HttpNotFound](classes/HttpNotFound.md)
- [HttpNotImplemented](classes/HttpNotImplemented.md)
- [HttpPayloadTooLarge](classes/HttpPayloadTooLarge.md)
- [HttpPaymentRequired](classes/HttpPaymentRequired.md)
- [HttpPreconditionFailed](classes/HttpPreconditionFailed.md)
- [HttpPreconditionRequired](classes/HttpPreconditionRequired.md)
- [HttpProxyAuthentificationRequired](classes/HttpProxyAuthentificationRequired.md)
- [HttpProxyError](classes/HttpProxyError.md)
- [HttpRangeNotSatisfiable](classes/HttpRangeNotSatisfiable.md)
- [HttpRequestHeaderFieldsTooLarge](classes/HttpRequestHeaderFieldsTooLarge.md)
- [HttpRequestTimeout](classes/HttpRequestTimeout.md)
- [HttpServiceUnavailable](classes/HttpServiceUnavailable.md)
- [HttpTooManyRequests](classes/HttpTooManyRequests.md)
- [HttpUnauthorized](classes/HttpUnauthorized.md)
- [HttpUnavailableForLegalReasons](classes/HttpUnavailableForLegalReasons.md)
- [HttpUnprocessableEntity](classes/HttpUnprocessableEntity.md)
- [HttpUnsupportedMediaType](classes/HttpUnsupportedMediaType.md)
- [HttpUpgradeRequired](classes/HttpUpgradeRequired.md)
- [HttpUriTooLong](classes/HttpUriTooLong.md)
- [HttpVariantAlsoNegociates](classes/HttpVariantAlsoNegociates.md)

### Type Aliases

- [HttpErrorOptions](README.md#httperroroptions)
- [HttpStatusCode](README.md#httpstatuscode)

### Functions

- [isHttpError](README.md#ishttperror)
- [isHttpStatusCode](README.md#ishttpstatuscode)

## Type Aliases

### HttpErrorOptions

Ƭ **HttpErrorOptions**: `Object`

#### Type declaration

| Name         | Type                                         |
| :----------- | :------------------------------------------- |
| `cause?`     | `Error`                                      |
| `statusCode` | [`HttpStatusCode`](README.md#httpstatuscode) |

---

### HttpStatusCode

Ƭ **HttpStatusCode**: `number`

## Functions

### isHttpError

▸ **isHttpError**(`error`): error is HttpError

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `error` | `unknown` |

#### Returns

error is HttpError

---

### isHttpStatusCode

▸ **isHttpStatusCode**(`statusCode`): statusCode is number

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `statusCode` | `number` |

#### Returns

statusCode is number
