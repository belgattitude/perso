[@belgattitude/errorh - v1.0.0](../README.md) / HttpError

# Class: HttpError

## Hierarchy

- `Error`

  ↳ **`HttpError`**

  ↳↳ [`HttpBadMapping`](HttpBadMapping.md)

  ↳↳ [`HttpBadRequest`](HttpBadRequest.md)

  ↳↳ [`HttpConflict`](HttpConflict.md)

  ↳↳ [`HttpExpectationFailed`](HttpExpectationFailed.md)

  ↳↳ [`HttpForbidden`](HttpForbidden.md)

  ↳↳ [`HttpGone`](HttpGone.md)

  ↳↳ [`HttpImATeapot`](HttpImATeapot.md)

  ↳↳ [`HttpLengthRequired`](HttpLengthRequired.md)

  ↳↳ [`HttpMethodNotAllowed`](HttpMethodNotAllowed.md)

  ↳↳ [`HttpMisdirectedRequest`](HttpMisdirectedRequest.md)

  ↳↳ [`HttpNotAcceptable`](HttpNotAcceptable.md)

  ↳↳ [`HttpNotFound`](HttpNotFound.md)

  ↳↳ [`HttpPayloadTooLarge`](HttpPayloadTooLarge.md)

  ↳↳ [`HttpPaymentRequired`](HttpPaymentRequired.md)

  ↳↳ [`HttpPreconditionFailed`](HttpPreconditionFailed.md)

  ↳↳ [`HttpPreconditionRequired`](HttpPreconditionRequired.md)

  ↳↳ [`HttpProxyAuthentificationRequired`](HttpProxyAuthentificationRequired.md)

  ↳↳ [`HttpRangeNotSatisfiable`](HttpRangeNotSatisfiable.md)

  ↳↳ [`HttpRequestHeaderFieldsTooLarge`](HttpRequestHeaderFieldsTooLarge.md)

  ↳↳ [`HttpRequestTimeout`](HttpRequestTimeout.md)

  ↳↳ [`HttpTooManyRequests`](HttpTooManyRequests.md)

  ↳↳ [`HttpUnauthorized`](HttpUnauthorized.md)

  ↳↳ [`HttpUnavailableForLegalReasons`](HttpUnavailableForLegalReasons.md)

  ↳↳ [`HttpUnprocessableEntity`](HttpUnprocessableEntity.md)

  ↳↳ [`HttpUnsupportedMediaType`](HttpUnsupportedMediaType.md)

  ↳↳ [`HttpUpgradeRequired`](HttpUpgradeRequired.md)

  ↳↳ [`HttpUriTooLong`](HttpUriTooLong.md)

  ↳↳ [`HttpBadGateway`](HttpBadGateway.md)

  ↳↳ [`HttpBandwidthLimitExceeded`](HttpBandwidthLimitExceeded.md)

  ↳↳ [`HttpGatewayTimeout`](HttpGatewayTimeout.md)

  ↳↳ [`HttpInternalServerError`](HttpInternalServerError.md)

  ↳↳ [`HttpNetworkAuthenticationRequired`](HttpNetworkAuthenticationRequired.md)

  ↳↳ [`HttpNotExtended`](HttpNotExtended.md)

  ↳↳ [`HttpNotImplemented`](HttpNotImplemented.md)

  ↳↳ [`HttpProxyError`](HttpProxyError.md)

  ↳↳ [`HttpServiceUnavailable`](HttpServiceUnavailable.md)

  ↳↳ [`HttpVariantAlsoNegociates`](HttpVariantAlsoNegociates.md)

## Table of contents

### Constructors

- [constructor](HttpError.md#constructor)

### Properties

- [statusCode](HttpError.md#statuscode)

### Methods

- [getStatusCode](HttpError.md#getstatuscode)

## Constructors

### constructor

• **new HttpError**(`message`, `options`)

#### Parameters

| Name      | Type                                                |
| :-------- | :-------------------------------------------------- |
| `message` | `string`                                            |
| `options` | [`HttpErrorOptions`](../README.md#httperroroptions) |

#### Overrides

Error.constructor

## Properties

### statusCode

• `Readonly` **statusCode**: `number`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`
