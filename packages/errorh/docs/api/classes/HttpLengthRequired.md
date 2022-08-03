[@belgattitude/errorh - v1.0.0](../README.md) / HttpLengthRequired

# Class: HttpLengthRequired

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpLengthRequired`**

## Table of contents

### Constructors

- [constructor](HttpLengthRequired.md#constructor)

### Properties

- [statusCode](HttpLengthRequired.md#statuscode)
- [STATUS](HttpLengthRequired.md#status)

### Methods

- [getStatusCode](HttpLengthRequired.md#getstatuscode)

## Constructors

### constructor

• **new HttpLengthRequired**(`message`, `options?`)

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

▪ `Static` `Readonly` **STATUS**: `411`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[HttpError](HttpError.md).[getStatusCode](HttpError.md#getstatuscode)
