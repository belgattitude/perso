[@belgattitude/errorh - v0.1.0](../README.md) / [client](../modules/client.md) / HttpPaymentRequired

# Class: HttpPaymentRequired

[client](../modules/client.md).HttpPaymentRequired

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpPaymentRequired`**

## Table of contents

### Constructors

- [constructor](client.HttpPaymentRequired.md#constructor)

### Properties

- [statusCode](client.HttpPaymentRequired.md#statuscode)
- [url](client.HttpPaymentRequired.md#url)
- [STATUS](client.HttpPaymentRequired.md#status)

## Constructors

### constructor

• **new HttpPaymentRequired**(`params?`)

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

▪ `Static` `Readonly` **STATUS**: `402`
