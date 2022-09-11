[@belgattitude/errorh - v0.1.0](../README.md) / [client](../modules/client.md) / HttpPreconditionRequired

# Class: HttpPreconditionRequired

[client](../modules/client.md).HttpPreconditionRequired

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpPreconditionRequired`**

## Table of contents

### Constructors

- [constructor](client.HttpPreconditionRequired.md#constructor)

### Properties

- [statusCode](client.HttpPreconditionRequired.md#statuscode)
- [url](client.HttpPreconditionRequired.md#url)
- [STATUS](client.HttpPreconditionRequired.md#status)

## Constructors

### constructor

• **new HttpPreconditionRequired**(`params?`)

#### Parameters

| Name      | Type                                                                 |
| :-------- | :------------------------------------------------------------------- |
| `params?` | `string` \| [`HttpErrorParams`](../modules/types.md#httperrorparams) |

#### Overrides

[HttpClientException](base.HttpClientException.md).[constructor](base.HttpClientException.md#constructor)

## Properties

### statusCode

• `Readonly` **statusCode**: `number`

Http error status code

#### Inherited from

[HttpClientException](base.HttpClientException.md).[statusCode](base.HttpClientException.md#statuscode)

---

### url

• `Readonly` **url**: `undefined` \| `string`

Optional url that caused the error

#### Inherited from

[HttpClientException](base.HttpClientException.md).[url](base.HttpClientException.md#url)

---

### STATUS

▪ `Static` `Readonly` **STATUS**: `428`
