[@belgattitude/errorh - v1.0.0](../README.md) / HttpConflict

# Class: HttpConflict

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpConflict`**

## Table of contents

### Constructors

- [constructor](HttpConflict.md#constructor)

### Properties

- [statusCode](HttpConflict.md#statuscode)
- [STATUS](HttpConflict.md#status)

### Methods

- [getStatusCode](HttpConflict.md#getstatuscode)

## Constructors

### constructor

• **new HttpConflict**(`message`, `options?`)

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

▪ `Static` `Readonly` **STATUS**: `409`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[HttpError](HttpError.md).[getStatusCode](HttpError.md#getstatuscode)
