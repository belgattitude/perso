[@belgattitude/errorh - v0.1.0](../README.md) / [server](../modules/server.md) / HttpVersionNotSupported

# Class: HttpVersionNotSupported

[server](../modules/server.md).HttpVersionNotSupported

## Hierarchy

- [`HttpServerException`](base.HttpServerException.md)

  ↳ **`HttpVersionNotSupported`**

## Table of contents

### Constructors

- [constructor](server.HttpVersionNotSupported.md#constructor)

### Properties

- [statusCode](server.HttpVersionNotSupported.md#statuscode)
- [url](server.HttpVersionNotSupported.md#url)
- [STATUS](server.HttpVersionNotSupported.md#status)

## Constructors

### constructor

• **new HttpVersionNotSupported**(`params?`)

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

▪ `Static` `Readonly` **STATUS**: `505`
