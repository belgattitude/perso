[@belgattitude/errorh - v0.1.0](../README.md) / [client](../modules/client.md) / HttpImATeapot

# Class: HttpImATeapot

[client](../modules/client.md).HttpImATeapot

## Hierarchy

- [`HttpServerException`](base.HttpServerException.md)

  ↳ **`HttpImATeapot`**

## Table of contents

### Constructors

- [constructor](client.HttpImATeapot.md#constructor)

### Properties

- [statusCode](client.HttpImATeapot.md#statuscode)
- [url](client.HttpImATeapot.md#url)
- [STATUS](client.HttpImATeapot.md#status)

## Constructors

### constructor

• **new HttpImATeapot**(`params?`)

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

▪ `Static` `Readonly` **STATUS**: `418`
