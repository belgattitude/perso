[@belgattitude/errorh - v1.0.0](../README.md) / HttpPayloadTooLarge

# Class: HttpPayloadTooLarge

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpPayloadTooLarge`**

## Table of contents

### Constructors

- [constructor](HttpPayloadTooLarge.md#constructor)

### Properties

- [statusCode](HttpPayloadTooLarge.md#statuscode)
- [STATUS](HttpPayloadTooLarge.md#status)

### Methods

- [getStatusCode](HttpPayloadTooLarge.md#getstatuscode)

## Constructors

### constructor

• **new HttpPayloadTooLarge**(`message`, `options?`)

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

▪ `Static` `Readonly` **STATUS**: `413`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[HttpError](HttpError.md).[getStatusCode](HttpError.md#getstatuscode)
