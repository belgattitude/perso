[@belgattitude/errorh - v0.1.0](../README.md) / [client](../modules/client.md) / HttpRangeNotSatisfiable

# Class: HttpRangeNotSatisfiable

[client](../modules/client.md).HttpRangeNotSatisfiable

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpRangeNotSatisfiable`**

## Table of contents

### Constructors

- [constructor](client.HttpRangeNotSatisfiable.md#constructor)

### Properties

- [statusCode](client.HttpRangeNotSatisfiable.md#statuscode)
- [url](client.HttpRangeNotSatisfiable.md#url)
- [STATUS](client.HttpRangeNotSatisfiable.md#status)

## Constructors

### constructor

• **new HttpRangeNotSatisfiable**(`params?`)

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

▪ `Static` `Readonly` **STATUS**: `416`
