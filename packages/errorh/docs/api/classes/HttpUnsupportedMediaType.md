[@belgattitude/errorh - v1.0.0](../README.md) / HttpUnsupportedMediaType

# Class: HttpUnsupportedMediaType

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpUnsupportedMediaType`**

## Table of contents

### Constructors

- [constructor](HttpUnsupportedMediaType.md#constructor)

### Properties

- [statusCode](HttpUnsupportedMediaType.md#statuscode)
- [STATUS](HttpUnsupportedMediaType.md#status)

### Methods

- [getStatusCode](HttpUnsupportedMediaType.md#getstatuscode)

## Constructors

### constructor

• **new HttpUnsupportedMediaType**(`message`, `options?`)

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

▪ `Static` `Readonly` **STATUS**: `415`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[HttpError](HttpError.md).[getStatusCode](HttpError.md#getstatuscode)
