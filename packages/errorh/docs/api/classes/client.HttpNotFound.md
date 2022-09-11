[@belgattitude/errorh - v0.1.0](../README.md) / [client](../modules/client.md) / HttpNotFound

# Class: HttpNotFound

[client](../modules/client.md).HttpNotFound

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpNotFound`**

## Table of contents

### Constructors

- [constructor](client.HttpNotFound.md#constructor)

### Properties

- [statusCode](client.HttpNotFound.md#statuscode)
- [url](client.HttpNotFound.md#url)
- [STATUS](client.HttpNotFound.md#status)

## Constructors

### constructor

• **new HttpNotFound**(`params?`)

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

▪ `Static` `Readonly` **STATUS**: `404`
