[@belgattitude/errorh - v1.0.0](../README.md) / HttpRequestTimeout

# Class: HttpRequestTimeout

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpRequestTimeout`**

## Table of contents

### Constructors

- [constructor](HttpRequestTimeout.md#constructor)

### Properties

- [statusCode](HttpRequestTimeout.md#statuscode)
- [STATUS](HttpRequestTimeout.md#status)

### Methods

- [getStatusCode](HttpRequestTimeout.md#getstatuscode)

## Constructors

### constructor

• **new HttpRequestTimeout**(`message`, `options?`)

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

▪ `Static` `Readonly` **STATUS**: `408`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[HttpError](HttpError.md).[getStatusCode](HttpError.md#getstatuscode)
