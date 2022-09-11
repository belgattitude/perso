[@belgattitude/errorh - v0.1.0](../README.md) / [base](../modules/base.md) / HttpServerException

# Class: HttpServerException

[base](../modules/base.md).HttpServerException

## Hierarchy

- [`HttpException`](base.HttpException.md)

  ↳ **`HttpServerException`**

  ↳↳ [`HttpBadGateway`](server.HttpBadGateway.md)

  ↳↳ [`HttpBandwidthLimitExceeded`](server.HttpBandwidthLimitExceeded.md)

  ↳↳ [`HttpVersionNotSupported`](server.HttpVersionNotSupported.md)

  ↳↳ [`HttpGatewayTimeout`](server.HttpGatewayTimeout.md)

  ↳↳ [`HttpInternalServerError`](server.HttpInternalServerError.md)

  ↳↳ [`HttpNetworkAuthenticationRequired`](server.HttpNetworkAuthenticationRequired.md)

  ↳↳ [`HttpNotExtended`](server.HttpNotExtended.md)

  ↳↳ [`HttpNotImplemented`](server.HttpNotImplemented.md)

  ↳↳ [`HttpServiceUnavailable`](server.HttpServiceUnavailable.md)

  ↳↳ [`HttpInsufficientStorage`](server.HttpInsufficientStorage.md)

  ↳↳ [`HttpLoopDetected`](server.HttpLoopDetected.md)

  ↳↳ [`HttpVariantAlsoNegociates`](server.HttpVariantAlsoNegociates.md)

## Table of contents

### Constructors

- [constructor](base.HttpServerException.md#constructor)

### Properties

- [statusCode](base.HttpServerException.md#statuscode)
- [url](base.HttpServerException.md#url)

## Constructors

### constructor

• **new HttpServerException**(`params`)

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
