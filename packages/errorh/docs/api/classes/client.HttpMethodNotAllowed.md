[@belgattitude/errorh - v0.1.0](../README.md) / [client](../modules/client.md) / HttpMethodNotAllowed

# Class: HttpMethodNotAllowed

[client](../modules/client.md).HttpMethodNotAllowed

Client status 405

**`Link`**

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpMethodNotAllowed`**

## Table of contents

### Constructors

- [constructor](client.HttpMethodNotAllowed.md#constructor)

### Properties

- [statusCode](client.HttpMethodNotAllowed.md#statuscode)
- [url](client.HttpMethodNotAllowed.md#url)
- [STATUS](client.HttpMethodNotAllowed.md#status)

## Constructors

### constructor

• **new HttpMethodNotAllowed**(`params?`)

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

▪ `Static` `Readonly` **STATUS**: `405`
