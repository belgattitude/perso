[@belgattitude/errorh - v0.1.0](../README.md) / [server](../modules/server.md) / HttpVariantAlsoNegociates

# Class: HttpVariantAlsoNegociates

[server](../modules/server.md).HttpVariantAlsoNegociates

## Hierarchy

- [`HttpServerException`](base.HttpServerException.md)

  ↳ **`HttpVariantAlsoNegociates`**

## Table of contents

### Constructors

- [constructor](server.HttpVariantAlsoNegociates.md#constructor)

### Properties

- [statusCode](server.HttpVariantAlsoNegociates.md#statuscode)
- [url](server.HttpVariantAlsoNegociates.md#url)
- [STATUS](server.HttpVariantAlsoNegociates.md#status)

## Constructors

### constructor

• **new HttpVariantAlsoNegociates**(`params?`)

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

▪ `Static` `Readonly` **STATUS**: `506`
