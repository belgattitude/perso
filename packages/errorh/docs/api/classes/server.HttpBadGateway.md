[@belgattitude/errorh - v0.1.0](../README.md) / [server](../modules/server.md) / HttpBadGateway

# Class: HttpBadGateway

[server](../modules/server.md).HttpBadGateway

## Hierarchy

- [`HttpServerException`](base.HttpServerException.md)

  ↳ **`HttpBadGateway`**

## Table of contents

### Constructors

- [constructor](server.HttpBadGateway.md#constructor)

### Properties

- [statusCode](server.HttpBadGateway.md#statuscode)
- [url](server.HttpBadGateway.md#url)
- [STATUS](server.HttpBadGateway.md#status)

## Constructors

### constructor

• **new HttpBadGateway**(`params?`)

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

▪ `Static` `Readonly` **STATUS**: `502`
