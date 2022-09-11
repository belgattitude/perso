[@belgattitude/errorh - v0.1.0](../README.md) / [client](../modules/client.md) / HttpConflict

# Class: HttpConflict

[client](../modules/client.md).HttpConflict

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpConflict`**

## Table of contents

### Constructors

- [constructor](client.HttpConflict.md#constructor)

### Properties

- [statusCode](client.HttpConflict.md#statuscode)
- [url](client.HttpConflict.md#url)
- [STATUS](client.HttpConflict.md#status)

## Constructors

### constructor

• **new HttpConflict**(`params?`)

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

▪ `Static` `Readonly` **STATUS**: `409`
