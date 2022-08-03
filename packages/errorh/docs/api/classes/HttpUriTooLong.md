[@belgattitude/errorh - v1.0.0](../README.md) / HttpUriTooLong

# Class: HttpUriTooLong

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpUriTooLong`**

## Table of contents

### Constructors

- [constructor](HttpUriTooLong.md#constructor)

### Properties

- [statusCode](HttpUriTooLong.md#statuscode)
- [STATUS](HttpUriTooLong.md#status)

### Methods

- [getStatusCode](HttpUriTooLong.md#getstatuscode)

## Constructors

### constructor

• **new HttpUriTooLong**(`message`, `options?`)

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

▪ `Static` `Readonly` **STATUS**: `414`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[HttpError](HttpError.md).[getStatusCode](HttpError.md#getstatuscode)
