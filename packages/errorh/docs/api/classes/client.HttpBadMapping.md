[@belgattitude/errorh - v0.1.0](../README.md) / [client](../modules/client.md) / HttpBadMapping

# Class: HttpBadMapping

[client](../modules/client.md).HttpBadMapping

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpBadMapping`**

## Table of contents

### Constructors

- [constructor](client.HttpBadMapping.md#constructor)

### Properties

- [statusCode](client.HttpBadMapping.md#statuscode)
- [url](client.HttpBadMapping.md#url)
- [STATUS](client.HttpBadMapping.md#status)

## Constructors

### constructor

• **new HttpBadMapping**(`params?`)

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

▪ `Static` `Readonly` **STATUS**: `421`
