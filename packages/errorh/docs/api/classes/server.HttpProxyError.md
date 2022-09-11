[@belgattitude/errorh - v0.1.0](../README.md) / [server](../modules/server.md) / HttpProxyError

# Class: HttpProxyError

[server](../modules/server.md).HttpProxyError

## Hierarchy

- [`HttpServerException`](base.HttpServerException.md)

  ↳ **`HttpProxyError`**

## Table of contents

### Constructors

- [constructor](server.HttpProxyError.md#constructor)

### Properties

- [statusCode](server.HttpProxyError.md#statuscode)
- [url](server.HttpProxyError.md#url)
- [STATUS](server.HttpProxyError.md#status)

## Constructors

### constructor

• **new HttpProxyError**(`params?`)

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
