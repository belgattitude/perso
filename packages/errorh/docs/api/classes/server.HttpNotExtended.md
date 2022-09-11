[@belgattitude/errorh - v0.1.0](../README.md) / [server](../modules/server.md) / HttpNotExtended

# Class: HttpNotExtended

[server](../modules/server.md).HttpNotExtended

## Hierarchy

- [`HttpServerException`](base.HttpServerException.md)

  ↳ **`HttpNotExtended`**

## Table of contents

### Constructors

- [constructor](server.HttpNotExtended.md#constructor)

### Properties

- [statusCode](server.HttpNotExtended.md#statuscode)
- [url](server.HttpNotExtended.md#url)
- [STATUS](server.HttpNotExtended.md#status)

## Constructors

### constructor

• **new HttpNotExtended**(`params?`)

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

▪ `Static` `Readonly` **STATUS**: `510`
