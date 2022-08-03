[@belgattitude/errorh - v1.0.0](../README.md) / HttpExpectationFailed

# Class: HttpExpectationFailed

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpExpectationFailed`**

## Table of contents

### Constructors

- [constructor](HttpExpectationFailed.md#constructor)

### Properties

- [statusCode](HttpExpectationFailed.md#statuscode)
- [STATUS](HttpExpectationFailed.md#status)

### Methods

- [getStatusCode](HttpExpectationFailed.md#getstatuscode)

## Constructors

### constructor

• **new HttpExpectationFailed**(`message`, `options?`)

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

▪ `Static` `Readonly` **STATUS**: `417`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[HttpError](HttpError.md).[getStatusCode](HttpError.md#getstatuscode)
