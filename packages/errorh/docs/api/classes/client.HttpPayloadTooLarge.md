[@belgattitude/errorh - v0.1.0](../README.md) / [client](../modules/client.md) / HttpPayloadTooLarge

# Class: HttpPayloadTooLarge

[client](../modules/client.md).HttpPayloadTooLarge

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpPayloadTooLarge`**

## Table of contents

### Constructors

- [constructor](client.HttpPayloadTooLarge.md#constructor)

### Properties

- [statusCode](client.HttpPayloadTooLarge.md#statuscode)
- [url](client.HttpPayloadTooLarge.md#url)
- [STATUS](client.HttpPayloadTooLarge.md#status)

## Constructors

### constructor

• **new HttpPayloadTooLarge**(`params?`)

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

▪ `Static` `Readonly` **STATUS**: `413`
