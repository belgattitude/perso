[@belgattitude/errorh - v0.1.0](../README.md) / [client](../modules/client.md) / HttpMethodNotAllowed

# Class: HttpMethodNotAllowed

[client](../modules/client.md).HttpMethodNotAllowed

## Hierarchy

- [`HttpServerException`](base.HttpServerException.md)

  ↳ **`HttpMethodNotAllowed`**

## Table of contents

### Constructors

- [constructor](client.HttpMethodNotAllowed.md#constructor)

### Properties

- [statusCode](client.HttpMethodNotAllowed.md#statuscode)
- [url](client.HttpMethodNotAllowed.md#url)
- [STATUS](client.HttpMethodNotAllowed.md#status)

## Constructors

### constructor

• **new HttpMethodNotAllowed**(`params?`)

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

▪ `Static` `Readonly` **STATUS**: `405`
