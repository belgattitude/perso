[@belgattitude/errorh - v0.1.0](../README.md) / [client](../modules/client.md) / HttpBadRequest

# Class: HttpBadRequest

[client](../modules/client.md).HttpBadRequest

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpBadRequest`**

## Table of contents

### Constructors

- [constructor](client.HttpBadRequest.md#constructor)

### Properties

- [statusCode](client.HttpBadRequest.md#statuscode)
- [url](client.HttpBadRequest.md#url)
- [STATUS](client.HttpBadRequest.md#status)

## Constructors

### constructor

• **new HttpBadRequest**(`params?`)

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

▪ `Static` `Readonly` **STATUS**: `400`
