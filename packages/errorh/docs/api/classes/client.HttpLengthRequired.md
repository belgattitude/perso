[@belgattitude/errorh - v0.1.0](../README.md) / [client](../modules/client.md) / HttpLengthRequired

# Class: HttpLengthRequired

[client](../modules/client.md).HttpLengthRequired

## Hierarchy

- [`HttpServerException`](base.HttpServerException.md)

  ↳ **`HttpLengthRequired`**

## Table of contents

### Constructors

- [constructor](client.HttpLengthRequired.md#constructor)

### Properties

- [statusCode](client.HttpLengthRequired.md#statuscode)
- [url](client.HttpLengthRequired.md#url)
- [STATUS](client.HttpLengthRequired.md#status)

## Constructors

### constructor

• **new HttpLengthRequired**(`params?`)

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

▪ `Static` `Readonly` **STATUS**: `411`
