[@belgattitude/errorh - v0.1.0](../README.md) / [server](../modules/server.md) / HttpGatewayTimeout

# Class: HttpGatewayTimeout

[server](../modules/server.md).HttpGatewayTimeout

## Hierarchy

- [`HttpServerException`](base.HttpServerException.md)

  ↳ **`HttpGatewayTimeout`**

## Table of contents

### Constructors

- [constructor](server.HttpGatewayTimeout.md#constructor)

### Properties

- [statusCode](server.HttpGatewayTimeout.md#statuscode)
- [url](server.HttpGatewayTimeout.md#url)
- [STATUS](server.HttpGatewayTimeout.md#status)

## Constructors

### constructor

• **new HttpGatewayTimeout**(`params?`)

#### Parameters

| Name      | Type                                                                 |
| :-------- | :------------------------------------------------------------------- |
| `params?` | `string` \| [`HttpErrorParams`](../modules/types.md#httperrorparams) |

#### Overrides

[HttpServerException](base.HttpServerException.md).[constructor](base.HttpServerException.md#constructor)

## Properties

### statusCode

• `Readonly` **statusCode**: `number`

Http error status code

#### Inherited from

[HttpServerException](base.HttpServerException.md).[statusCode](base.HttpServerException.md#statuscode)

---

### url

• `Readonly` **url**: `undefined` \| `string`

Optional url that caused the error

#### Inherited from

[HttpServerException](base.HttpServerException.md).[url](base.HttpServerException.md#url)

---

### STATUS

▪ `Static` `Readonly` **STATUS**: `504`
