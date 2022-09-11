[@belgattitude/errorh - v0.1.0](../README.md) / [client](../modules/client.md) / HttpUnprocessableEntity

# Class: HttpUnprocessableEntity

[client](../modules/client.md).HttpUnprocessableEntity

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpUnprocessableEntity`**

## Table of contents

### Constructors

- [constructor](client.HttpUnprocessableEntity.md#constructor)

### Properties

- [statusCode](client.HttpUnprocessableEntity.md#statuscode)
- [url](client.HttpUnprocessableEntity.md#url)
- [STATUS](client.HttpUnprocessableEntity.md#status)

## Constructors

### constructor

• **new HttpUnprocessableEntity**(`params?`)

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

▪ `Static` `Readonly` **STATUS**: `422`
