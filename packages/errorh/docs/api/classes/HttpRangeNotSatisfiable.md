[@belgattitude/errorh - v1.0.0](../README.md) / HttpRangeNotSatisfiable

# Class: HttpRangeNotSatisfiable

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpRangeNotSatisfiable`**

## Table of contents

### Constructors

- [constructor](HttpRangeNotSatisfiable.md#constructor)

### Properties

- [statusCode](HttpRangeNotSatisfiable.md#statuscode)
- [STATUS](HttpRangeNotSatisfiable.md#status)

### Methods

- [getStatusCode](HttpRangeNotSatisfiable.md#getstatuscode)

## Constructors

### constructor

• **new HttpRangeNotSatisfiable**(`message`, `options?`)

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

▪ `Static` `Readonly` **STATUS**: `416`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[HttpError](HttpError.md).[getStatusCode](HttpError.md#getstatuscode)
