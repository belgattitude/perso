[@belgattitude/errorh - v1.0.0](../README.md) / HttpUnprocessableEntity

# Class: HttpUnprocessableEntity

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpUnprocessableEntity`**

## Table of contents

### Constructors

- [constructor](HttpUnprocessableEntity.md#constructor)

### Properties

- [statusCode](HttpUnprocessableEntity.md#statuscode)
- [STATUS](HttpUnprocessableEntity.md#status)

### Methods

- [getStatusCode](HttpUnprocessableEntity.md#getstatuscode)

## Constructors

### constructor

• **new HttpUnprocessableEntity**(`message`, `options?`)

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

▪ `Static` `Readonly` **STATUS**: `422`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[HttpError](HttpError.md).[getStatusCode](HttpError.md#getstatuscode)
