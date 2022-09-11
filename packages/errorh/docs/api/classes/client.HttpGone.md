[@belgattitude/errorh - v0.1.0](../README.md) / [client](../modules/client.md) / HttpGone

# Class: HttpGone

[client](../modules/client.md).HttpGone

## Hierarchy

- [`HttpServerException`](base.HttpServerException.md)

  ↳ **`HttpGone`**

## Table of contents

### Constructors

- [constructor](client.HttpGone.md#constructor)

### Properties

- [statusCode](client.HttpGone.md#statuscode)
- [url](client.HttpGone.md#url)
- [STATUS](client.HttpGone.md#status)

## Constructors

### constructor

• **new HttpGone**(`params?`)

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

▪ `Static` `Readonly` **STATUS**: `410`
