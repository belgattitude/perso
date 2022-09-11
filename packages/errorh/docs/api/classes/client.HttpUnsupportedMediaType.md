[@belgattitude/errorh - v0.1.0](../README.md) / [client](../modules/client.md) / HttpUnsupportedMediaType

# Class: HttpUnsupportedMediaType

[client](../modules/client.md).HttpUnsupportedMediaType

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpUnsupportedMediaType`**

## Table of contents

### Constructors

- [constructor](client.HttpUnsupportedMediaType.md#constructor)

### Properties

- [statusCode](client.HttpUnsupportedMediaType.md#statuscode)
- [url](client.HttpUnsupportedMediaType.md#url)
- [STATUS](client.HttpUnsupportedMediaType.md#status)

## Constructors

### constructor

• **new HttpUnsupportedMediaType**(`params?`)

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

▪ `Static` `Readonly` **STATUS**: `415`
