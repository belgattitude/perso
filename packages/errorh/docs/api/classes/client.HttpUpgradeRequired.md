[@belgattitude/errorh - v0.1.0](../README.md) / [client](../modules/client.md) / HttpUpgradeRequired

# Class: HttpUpgradeRequired

[client](../modules/client.md).HttpUpgradeRequired

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpUpgradeRequired`**

## Table of contents

### Constructors

- [constructor](client.HttpUpgradeRequired.md#constructor)

### Properties

- [statusCode](client.HttpUpgradeRequired.md#statuscode)
- [url](client.HttpUpgradeRequired.md#url)
- [STATUS](client.HttpUpgradeRequired.md#status)

## Constructors

### constructor

• **new HttpUpgradeRequired**(`params?`)

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

▪ `Static` `Readonly` **STATUS**: `426`
