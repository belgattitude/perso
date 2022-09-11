[@belgattitude/errorh - v0.1.0](../README.md) / [client](../modules/client.md) / HttpFailedDependency

# Class: HttpFailedDependency

[client](../modules/client.md).HttpFailedDependency

Http client status 424 (webdav specific)

**`Link`**

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses

## Hierarchy

- [`HttpClientException`](base.HttpClientException.md)

  ↳ **`HttpFailedDependency`**

## Table of contents

### Constructors

- [constructor](client.HttpFailedDependency.md#constructor)

### Properties

- [statusCode](client.HttpFailedDependency.md#statuscode)
- [url](client.HttpFailedDependency.md#url)
- [STATUS](client.HttpFailedDependency.md#status)

## Constructors

### constructor

• **new HttpFailedDependency**(`params?`)

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

▪ `Static` `Readonly` **STATUS**: `424`
