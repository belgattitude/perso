[@belgattitude/errorh - v1.0.0](../README.md) / HttpInternalServerError

# Class: HttpInternalServerError

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpInternalServerError`**

## Table of contents

### Constructors

- [constructor](HttpInternalServerError.md#constructor)

### Properties

- [statusCode](HttpInternalServerError.md#statuscode)
- [STATUS](HttpInternalServerError.md#status)

### Methods

- [getStatusCode](HttpInternalServerError.md#getstatuscode)

## Constructors

### constructor

• **new HttpInternalServerError**(`message`, `options?`)

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

▪ `Static` `Readonly` **STATUS**: `500`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[HttpError](HttpError.md).[getStatusCode](HttpError.md#getstatuscode)
