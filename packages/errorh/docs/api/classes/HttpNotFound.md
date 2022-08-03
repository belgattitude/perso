[@belgattitude/errorh - v1.0.0](../README.md) / HttpNotFound

# Class: HttpNotFound

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpNotFound`**

## Table of contents

### Constructors

- [constructor](HttpNotFound.md#constructor)

### Properties

- [statusCode](HttpNotFound.md#statuscode)
- [STATUS](HttpNotFound.md#status)

### Methods

- [getStatusCode](HttpNotFound.md#getstatuscode)

## Constructors

### constructor

• **new HttpNotFound**(`message`, `options?`)

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

▪ `Static` `Readonly` **STATUS**: `404`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[HttpError](HttpError.md).[getStatusCode](HttpError.md#getstatuscode)
