[@belgattitude/errorh - v1.0.0](../README.md) / HttpNotImplemented

# Class: HttpNotImplemented

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpNotImplemented`**

## Table of contents

### Constructors

- [constructor](HttpNotImplemented.md#constructor)

### Properties

- [statusCode](HttpNotImplemented.md#statuscode)
- [STATUS](HttpNotImplemented.md#status)

### Methods

- [getStatusCode](HttpNotImplemented.md#getstatuscode)

## Constructors

### constructor

• **new HttpNotImplemented**(`message`, `options?`)

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

▪ `Static` `Readonly` **STATUS**: `501`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[HttpError](HttpError.md).[getStatusCode](HttpError.md#getstatuscode)
