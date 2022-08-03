[@belgattitude/errorh - v1.0.0](../README.md) / HttpUnavailableForLegalReasons

# Class: HttpUnavailableForLegalReasons

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpUnavailableForLegalReasons`**

## Table of contents

### Constructors

- [constructor](HttpUnavailableForLegalReasons.md#constructor)

### Properties

- [statusCode](HttpUnavailableForLegalReasons.md#statuscode)
- [STATUS](HttpUnavailableForLegalReasons.md#status)

### Methods

- [getStatusCode](HttpUnavailableForLegalReasons.md#getstatuscode)

## Constructors

### constructor

• **new HttpUnavailableForLegalReasons**(`message`, `options?`)

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

▪ `Static` `Readonly` **STATUS**: `451`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[HttpError](HttpError.md).[getStatusCode](HttpError.md#getstatuscode)
