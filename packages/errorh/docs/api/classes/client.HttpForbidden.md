[@belgattitude/errorh - v0.1.0](../README.md) / [client](../modules/client.md) / HttpForbidden

# Class: HttpForbidden

[client](../modules/client.md).HttpForbidden

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpForbidden`**

## Table of contents

### Constructors

- [constructor](client.HttpForbidden.md#constructor)

### Properties

- [statusCode](client.HttpForbidden.md#statuscode)
- [url](client.HttpForbidden.md#url)
- [STATUS](client.HttpForbidden.md#status)

## Constructors

### constructor

• **new HttpForbidden**(`params?`)

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

▪ `Static` `Readonly` **STATUS**: `403`
