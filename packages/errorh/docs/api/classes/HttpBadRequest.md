[@belgattitude/errorh - v1.0.0](../README.md) / HttpBadRequest

# Class: HttpBadRequest

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpBadRequest`**

## Table of contents

### Constructors

- [constructor](HttpBadRequest.md#constructor)

### Properties

- [statusCode](HttpBadRequest.md#statuscode)
- [STATUS](HttpBadRequest.md#status)

### Methods

- [getStatusCode](HttpBadRequest.md#getstatuscode)

## Constructors

### constructor

• **new HttpBadRequest**(`message`, `options?`)

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

▪ `Static` `Readonly` **STATUS**: `400`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[HttpError](HttpError.md).[getStatusCode](HttpError.md#getstatuscode)
