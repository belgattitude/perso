[@belgattitude/errorh - v0.1.0](../README.md) / [server](../modules/server.md) / HttpLoopDetected

# Class: HttpLoopDetected

[server](../modules/server.md).HttpLoopDetected

LoopDetected is specific to webdav.

## Hierarchy

- [`HttpServerException`](base.HttpServerException.md)

  ↳ **`HttpLoopDetected`**

## Table of contents

### Constructors

- [constructor](server.HttpLoopDetected.md#constructor)

### Properties

- [statusCode](server.HttpLoopDetected.md#statuscode)
- [url](server.HttpLoopDetected.md#url)
- [STATUS](server.HttpLoopDetected.md#status)

## Constructors

### constructor

• **new HttpLoopDetected**(`params?`)

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

▪ `Static` `Readonly` **STATUS**: `508`
