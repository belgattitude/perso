[@belgattitude/errorh - v1.0.0](../README.md) / HttpServiceUnavailable

# Class: HttpServiceUnavailable

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpServiceUnavailable`**

## Table of contents

### Constructors

- [constructor](HttpServiceUnavailable.md#constructor)

### Properties

- [statusCode](HttpServiceUnavailable.md#statuscode)
- [STATUS](HttpServiceUnavailable.md#status)

### Methods

- [getStatusCode](HttpServiceUnavailable.md#getstatuscode)

## Constructors

### constructor

• **new HttpServiceUnavailable**(`message`, `options?`)

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

▪ `Static` `Readonly` **STATUS**: `503`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[HttpError](HttpError.md).[getStatusCode](HttpError.md#getstatuscode)
