[@belgattitude/errorh - v1.0.0](../README.md) / HttpNotAcceptable

# Class: HttpNotAcceptable

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpNotAcceptable`**

## Table of contents

### Constructors

- [constructor](HttpNotAcceptable.md#constructor)

### Properties

- [statusCode](HttpNotAcceptable.md#statuscode)
- [STATUS](HttpNotAcceptable.md#status)

### Methods

- [getStatusCode](HttpNotAcceptable.md#getstatuscode)

## Constructors

### constructor

• **new HttpNotAcceptable**(`message`, `options?`)

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

▪ `Static` `Readonly` **STATUS**: `406`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[HttpError](HttpError.md).[getStatusCode](HttpError.md#getstatuscode)
