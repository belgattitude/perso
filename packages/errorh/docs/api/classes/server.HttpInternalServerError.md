[@belgattitude/errorh - v0.1.0](../README.md) / [server](../modules/server.md) / HttpInternalServerError

# Class: HttpInternalServerError

[server](../modules/server.md).HttpInternalServerError

## Hierarchy

- [`HttpServerException`](base.HttpServerException.md)

  ↳ **`HttpInternalServerError`**

## Table of contents

### Constructors

- [constructor](server.HttpInternalServerError.md#constructor)

### Properties

- [statusCode](server.HttpInternalServerError.md#statuscode)
- [url](server.HttpInternalServerError.md#url)
- [STATUS](server.HttpInternalServerError.md#status)

## Constructors

### constructor

• **new HttpInternalServerError**(`params?`)

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

▪ `Static` `Readonly` **STATUS**: `500`
