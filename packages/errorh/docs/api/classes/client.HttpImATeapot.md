[@belgattitude/errorh - v0.1.0](../README.md) / [client](../modules/client.md) / HttpImATeapot

# Class: HttpImATeapot

[client](../modules/client.md).HttpImATeapot

Client status 418

**`Link`**

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpImATeapot`**

## Table of contents

### Constructors

- [constructor](client.HttpImATeapot.md#constructor)

### Properties

- [statusCode](client.HttpImATeapot.md#statuscode)
- [url](client.HttpImATeapot.md#url)
- [STATUS](client.HttpImATeapot.md#status)

## Constructors

### constructor

• **new HttpImATeapot**(`params?`)

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

▪ `Static` `Readonly` **STATUS**: `418`
