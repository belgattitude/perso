[@belgattitude/errorh - v0.1.0](../README.md) / [client](../modules/client.md) / HttpRequestHeaderFieldsTooLarge

# Class: HttpRequestHeaderFieldsTooLarge

[client](../modules/client.md).HttpRequestHeaderFieldsTooLarge

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpRequestHeaderFieldsTooLarge`**

## Table of contents

### Constructors

- [constructor](client.HttpRequestHeaderFieldsTooLarge.md#constructor)

### Properties

- [statusCode](client.HttpRequestHeaderFieldsTooLarge.md#statuscode)
- [url](client.HttpRequestHeaderFieldsTooLarge.md#url)
- [STATUS](client.HttpRequestHeaderFieldsTooLarge.md#status)

## Constructors

### constructor

• **new HttpRequestHeaderFieldsTooLarge**(`params?`)

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

▪ `Static` `Readonly` **STATUS**: `431`
