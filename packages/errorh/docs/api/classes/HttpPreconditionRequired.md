[@belgattitude/errorh - v1.0.0](../README.md) / HttpPreconditionRequired

# Class: HttpPreconditionRequired

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpPreconditionRequired`**

## Table of contents

### Constructors

- [constructor](HttpPreconditionRequired.md#constructor)

### Properties

- [statusCode](HttpPreconditionRequired.md#statuscode)
- [STATUS](HttpPreconditionRequired.md#status)

### Methods

- [getStatusCode](HttpPreconditionRequired.md#getstatuscode)

## Constructors

### constructor

• **new HttpPreconditionRequired**(`message`, `options?`)

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

▪ `Static` `Readonly` **STATUS**: `428`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[HttpError](HttpError.md).[getStatusCode](HttpError.md#getstatuscode)
