[@belgattitude/errorh - v0.1.0](../README.md) / [client](../modules/client.md) / HttpTooManyRequests

# Class: HttpTooManyRequests

[client](../modules/client.md).HttpTooManyRequests

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpTooManyRequests`**

## Table of contents

### Constructors

- [constructor](client.HttpTooManyRequests.md#constructor)

### Properties

- [statusCode](client.HttpTooManyRequests.md#statuscode)
- [url](client.HttpTooManyRequests.md#url)
- [STATUS](client.HttpTooManyRequests.md#status)

## Constructors

### constructor

• **new HttpTooManyRequests**(`params?`)

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

▪ `Static` `Readonly` **STATUS**: `429`
