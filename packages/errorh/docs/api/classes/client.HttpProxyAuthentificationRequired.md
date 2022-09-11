[@belgattitude/errorh - v0.1.0](../README.md) / [client](../modules/client.md) / HttpProxyAuthentificationRequired

# Class: HttpProxyAuthentificationRequired

[client](../modules/client.md).HttpProxyAuthentificationRequired

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpProxyAuthentificationRequired`**

## Table of contents

### Constructors

- [constructor](client.HttpProxyAuthentificationRequired.md#constructor)

### Properties

- [statusCode](client.HttpProxyAuthentificationRequired.md#statuscode)
- [url](client.HttpProxyAuthentificationRequired.md#url)
- [STATUS](client.HttpProxyAuthentificationRequired.md#status)

## Constructors

### constructor

• **new HttpProxyAuthentificationRequired**(`params?`)

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

▪ `Static` `Readonly` **STATUS**: `407`
