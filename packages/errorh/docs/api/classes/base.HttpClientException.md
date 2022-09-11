[@belgattitude/errorh - v0.1.0](../README.md) / [base](../modules/base.md) / HttpClientException

# Class: HttpClientException

[base](../modules/base.md).HttpClientException

## Hierarchy

- [`HttpException`](base.HttpException.md)

  ↳ **`HttpClientException`**

  ↳↳ [`HttpBadRequest`](client.HttpBadRequest.md)

  ↳↳ [`HttpConflict`](client.HttpConflict.md)

  ↳↳ [`HttpExpectationFailed`](client.HttpExpectationFailed.md)

  ↳↳ [`HttpFailedDependency`](client.HttpFailedDependency.md)

  ↳↳ [`HttpForbidden`](client.HttpForbidden.md)

  ↳↳ [`HttpGone`](client.HttpGone.md)

  ↳↳ [`HttpImATeapot`](client.HttpImATeapot.md)

  ↳↳ [`HttpLengthRequired`](client.HttpLengthRequired.md)

  ↳↳ [`HttpLocked`](client.HttpLocked.md)

  ↳↳ [`HttpMisredirectedRequest`](client.HttpMisredirectedRequest.md)

  ↳↳ [`HttpMethodNotAllowed`](client.HttpMethodNotAllowed.md)

  ↳↳ [`HttpNotAcceptable`](client.HttpNotAcceptable.md)

  ↳↳ [`HttpNotFound`](client.HttpNotFound.md)

  ↳↳ [`HttpPayloadTooLarge`](client.HttpPayloadTooLarge.md)

  ↳↳ [`HttpPaymentRequired`](client.HttpPaymentRequired.md)

  ↳↳ [`HttpPreconditionFailed`](client.HttpPreconditionFailed.md)

  ↳↳ [`HttpPreconditionRequired`](client.HttpPreconditionRequired.md)

  ↳↳ [`HttpProxyAuthenticationRequired`](client.HttpProxyAuthenticationRequired.md)

  ↳↳ [`HttpRangeNotSatisfiable`](client.HttpRangeNotSatisfiable.md)

  ↳↳ [`HttpRequestHeaderFieldsTooLarge`](client.HttpRequestHeaderFieldsTooLarge.md)

  ↳↳ [`HttpRequestTimeout`](client.HttpRequestTimeout.md)

  ↳↳ [`HttpTooEarly`](client.HttpTooEarly.md)

  ↳↳ [`HttpTooManyRequests`](client.HttpTooManyRequests.md)

  ↳↳ [`HttpUnauthorized`](client.HttpUnauthorized.md)

  ↳↳ [`HttpUnavailableForLegalReasons`](client.HttpUnavailableForLegalReasons.md)

  ↳↳ [`HttpUnprocessableEntity`](client.HttpUnprocessableEntity.md)

  ↳↳ [`HttpUnsupportedMediaType`](client.HttpUnsupportedMediaType.md)

  ↳↳ [`HttpUpgradeRequired`](client.HttpUpgradeRequired.md)

  ↳↳ [`HttpUriTooLong`](client.HttpUriTooLong.md)

## Table of contents

### Constructors

- [constructor](base.HttpClientException.md#constructor)

### Properties

- [statusCode](base.HttpClientException.md#statuscode)
- [url](base.HttpClientException.md#url)

## Constructors

### constructor

• **new HttpClientException**(`params`)

#### Parameters

| Name     | Type                  |
| :------- | :-------------------- |
| `params` | `HttpExceptionParams` |

#### Overrides

[HttpException](base.HttpException.md).[constructor](base.HttpException.md#constructor)

## Properties

### statusCode

• `Readonly` **statusCode**: `number`

Http error status code

#### Inherited from

[HttpException](base.HttpException.md).[statusCode](base.HttpException.md#statuscode)

---

### url

• `Readonly` **url**: `undefined` \| `string`

Optional url that caused the error

#### Inherited from

[HttpException](base.HttpException.md).[url](base.HttpException.md#url)
