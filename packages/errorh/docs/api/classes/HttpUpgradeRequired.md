[@belgattitude/errorh - v1.0.0](../README.md) / HttpUpgradeRequired

# Class: HttpUpgradeRequired

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpUpgradeRequired`**

## Table of contents

### Constructors

- [constructor](HttpUpgradeRequired.md#constructor)

### Properties

- [statusCode](HttpUpgradeRequired.md#statuscode)
- [STATUS](HttpUpgradeRequired.md#status)

### Methods

- [getStatusCode](HttpUpgradeRequired.md#getstatuscode)

## Constructors

### constructor

• **new HttpUpgradeRequired**(`message`, `options?`)

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

▪ `Static` `Readonly` **STATUS**: `426`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[HttpError](HttpError.md).[getStatusCode](HttpError.md#getstatuscode)
