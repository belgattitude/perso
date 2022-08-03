[@belgattitude/errorh - v1.0.0](../README.md) / HttpUnauthorized

# Class: HttpUnauthorized

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpUnauthorized`**

## Table of contents

### Constructors

- [constructor](HttpUnauthorized.md#constructor)

### Properties

- [statusCode](HttpUnauthorized.md#statuscode)
- [STATUS](HttpUnauthorized.md#status)

### Methods

- [getStatusCode](HttpUnauthorized.md#getstatuscode)

## Constructors

### constructor

• **new HttpUnauthorized**(`message`, `options?`)

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

▪ `Static` `Readonly` **STATUS**: `401`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[HttpError](HttpError.md).[getStatusCode](HttpError.md#getstatuscode)
