[@belgattitude/errorh - v0.1.0](../README.md) / [client](../modules/client.md) / HttpLocked

# Class: HttpLocked

[client](../modules/client.md).HttpLocked

Client status 423 (webdav specific)

**`Link`**

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpLocked`**

## Table of contents

### Constructors

- [constructor](client.HttpLocked.md#constructor)

### Properties

- [statusCode](client.HttpLocked.md#statuscode)
- [url](client.HttpLocked.md#url)
- [STATUS](client.HttpLocked.md#status)

## Constructors

### constructor

• **new HttpLocked**(`params?`)

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

▪ `Static` `Readonly` **STATUS**: `423`
