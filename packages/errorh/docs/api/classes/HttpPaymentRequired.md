[@belgattitude/errorh - v1.0.0](../README.md) / HttpPaymentRequired

# Class: HttpPaymentRequired

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpPaymentRequired`**

## Table of contents

### Constructors

- [constructor](HttpPaymentRequired.md#constructor)

### Properties

- [statusCode](HttpPaymentRequired.md#statuscode)
- [STATUS](HttpPaymentRequired.md#status)

### Methods

- [getStatusCode](HttpPaymentRequired.md#getstatuscode)

## Constructors

### constructor

• **new HttpPaymentRequired**(`message`, `options?`)

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

▪ `Static` `Readonly` **STATUS**: `402`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[HttpError](HttpError.md).[getStatusCode](HttpError.md#getstatuscode)
