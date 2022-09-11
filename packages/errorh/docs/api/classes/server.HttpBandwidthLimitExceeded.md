[@belgattitude/errorh - v0.1.0](../README.md) / [server](../modules/server.md) / HttpBandwidthLimitExceeded

# Class: HttpBandwidthLimitExceeded

[server](../modules/server.md).HttpBandwidthLimitExceeded

## Hierarchy

- [`HttpServerException`](base.HttpServerException.md)

  ↳ **`HttpBandwidthLimitExceeded`**

## Table of contents

### Constructors

- [constructor](server.HttpBandwidthLimitExceeded.md#constructor)

### Properties

- [statusCode](server.HttpBandwidthLimitExceeded.md#statuscode)
- [url](server.HttpBandwidthLimitExceeded.md#url)
- [STATUS](server.HttpBandwidthLimitExceeded.md#status)

## Constructors

### constructor

• **new HttpBandwidthLimitExceeded**(`params?`)

#### Parameters

| Name      | Type                                                                 |
| :-------- | :------------------------------------------------------------------- |
| `params?` | `string` \| [`HttpErrorParams`](../modules/types.md#httperrorparams) |

#### Overrides

[HttpServerException](base.HttpServerException.md).[constructor](base.HttpServerException.md#constructor)

## Properties

### statusCode

• `Readonly` **statusCode**: `number`

Http error status code

#### Inherited from

[HttpServerException](base.HttpServerException.md).[statusCode](base.HttpServerException.md#statuscode)

---

### url

• `Readonly` **url**: `undefined` \| `string`

Optional url that caused the error

#### Inherited from

[HttpServerException](base.HttpServerException.md).[url](base.HttpServerException.md#url)

---

### STATUS

▪ `Static` `Readonly` **STATUS**: `509`
