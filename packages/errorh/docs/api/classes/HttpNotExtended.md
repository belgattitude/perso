[@belgattitude/errorh - v1.0.0](../README.md) / HttpNotExtended

# Class: HttpNotExtended

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpNotExtended`**

## Table of contents

### Constructors

- [constructor](HttpNotExtended.md#constructor)

### Properties

- [statusCode](HttpNotExtended.md#statuscode)
- [STATUS](HttpNotExtended.md#status)

### Methods

- [getStatusCode](HttpNotExtended.md#getstatuscode)

## Constructors

### constructor

• **new HttpNotExtended**(`message`, `options?`)

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

▪ `Static` `Readonly` **STATUS**: `510`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[HttpError](HttpError.md).[getStatusCode](HttpError.md#getstatuscode)
