[@belgattitude/errorh - v0.1.0](../README.md) / [client](../modules/client.md) / HttpUnavailableForLegalReasons

# Class: HttpUnavailableForLegalReasons

[client](../modules/client.md).HttpUnavailableForLegalReasons

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpUnavailableForLegalReasons`**

## Table of contents

### Constructors

- [constructor](client.HttpUnavailableForLegalReasons.md#constructor)

### Properties

- [statusCode](client.HttpUnavailableForLegalReasons.md#statuscode)
- [url](client.HttpUnavailableForLegalReasons.md#url)
- [STATUS](client.HttpUnavailableForLegalReasons.md#status)

## Constructors

### constructor

• **new HttpUnavailableForLegalReasons**(`params?`)

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

▪ `Static` `Readonly` **STATUS**: `451`
