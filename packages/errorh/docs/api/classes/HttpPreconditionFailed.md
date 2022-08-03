[@belgattitude/errorh - v1.0.0](../README.md) / HttpPreconditionFailed

# Class: HttpPreconditionFailed

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpPreconditionFailed`**

## Table of contents

### Constructors

- [constructor](HttpPreconditionFailed.md#constructor)

### Properties

- [statusCode](HttpPreconditionFailed.md#statuscode)
- [STATUS](HttpPreconditionFailed.md#status)

### Methods

- [getStatusCode](HttpPreconditionFailed.md#getstatuscode)

## Constructors

### constructor

• **new HttpPreconditionFailed**(`message`, `options?`)

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

▪ `Static` `Readonly` **STATUS**: `412`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[HttpError](HttpError.md).[getStatusCode](HttpError.md#getstatuscode)
