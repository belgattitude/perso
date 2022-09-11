[@belgattitude/errorh - v0.1.0](../README.md) / [client](../modules/client.md) / HttpUnauthorized

# Class: HttpUnauthorized

[client](../modules/client.md).HttpUnauthorized

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpUnauthorized`**

## Table of contents

### Constructors

- [constructor](client.HttpUnauthorized.md#constructor)

### Properties

- [statusCode](client.HttpUnauthorized.md#statuscode)
- [url](client.HttpUnauthorized.md#url)
- [STATUS](client.HttpUnauthorized.md#status)

## Constructors

### constructor

• **new HttpUnauthorized**(`params?`)

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

▪ `Static` `Readonly` **STATUS**: `401`
