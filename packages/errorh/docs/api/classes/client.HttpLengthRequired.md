[@belgattitude/errorh - v0.1.0](../README.md) / [client](../modules/client.md) / HttpLengthRequired

# Class: HttpLengthRequired

[client](../modules/client.md).HttpLengthRequired

Client status 411

**`Link`**

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpLengthRequired`**

## Table of contents

### Constructors

- [constructor](client.HttpLengthRequired.md#constructor)

### Properties

- [statusCode](client.HttpLengthRequired.md#statuscode)
- [url](client.HttpLengthRequired.md#url)
- [STATUS](client.HttpLengthRequired.md#status)

## Constructors

### constructor

• **new HttpLengthRequired**(`params?`)

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

▪ `Static` `Readonly` **STATUS**: `411`
