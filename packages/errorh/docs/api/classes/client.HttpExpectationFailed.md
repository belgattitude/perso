[@belgattitude/errorh - v0.1.0](../README.md) / [client](../modules/client.md) / HttpExpectationFailed

# Class: HttpExpectationFailed

[client](../modules/client.md).HttpExpectationFailed

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpExpectationFailed`**

## Table of contents

### Constructors

- [constructor](client.HttpExpectationFailed.md#constructor)

### Properties

- [statusCode](client.HttpExpectationFailed.md#statuscode)
- [url](client.HttpExpectationFailed.md#url)
- [STATUS](client.HttpExpectationFailed.md#status)

## Constructors

### constructor

• **new HttpExpectationFailed**(`params?`)

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

▪ `Static` `Readonly` **STATUS**: `417`
