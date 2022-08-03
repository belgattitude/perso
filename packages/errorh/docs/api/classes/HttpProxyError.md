[@belgattitude/errorh - v1.0.0](../README.md) / HttpProxyError

# Class: HttpProxyError

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpProxyError`**

## Table of contents

### Constructors

- [constructor](HttpProxyError.md#constructor)

### Properties

- [statusCode](HttpProxyError.md#statuscode)
- [STATUS](HttpProxyError.md#status)

### Methods

- [getStatusCode](HttpProxyError.md#getstatuscode)

## Constructors

### constructor

• **new HttpProxyError**(`message`, `options?`)

#### Parameters

| Name       | Type                                                |
| :--------- | :-------------------------------------------------- |
| `message`  | `string`                                            |
| `options?` | [`HttpErrorOptions`](../README.md#httperroroptions) |

#### Overrides

[HttpError](HttpError.md).[constructor](HttpError.md#constructor)

## Properties

### statusCode

• `Readonly` **statusCode**: `number`

#### Inherited from

[HttpError](HttpError.md).[statusCode](HttpError.md#statuscode)

---

### STATUS

▪ `Static` `Readonly` **STATUS**: `502`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[HttpError](HttpError.md).[getStatusCode](HttpError.md#getstatuscode)
