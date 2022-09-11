[@belgattitude/errorh - v0.1.0](../README.md) / [client](../modules/client.md) / HttpUriTooLong

# Class: HttpUriTooLong

[client](../modules/client.md).HttpUriTooLong

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpUriTooLong`**

## Table of contents

### Constructors

- [constructor](client.HttpUriTooLong.md#constructor)

### Properties

- [statusCode](client.HttpUriTooLong.md#statuscode)
- [url](client.HttpUriTooLong.md#url)
- [STATUS](client.HttpUriTooLong.md#status)

## Constructors

### constructor

• **new HttpUriTooLong**(`params?`)

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

▪ `Static` `Readonly` **STATUS**: `414`
