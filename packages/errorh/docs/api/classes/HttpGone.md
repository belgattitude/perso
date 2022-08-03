[@belgattitude/errorh - v1.0.0](../README.md) / HttpGone

# Class: HttpGone

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpGone`**

## Table of contents

### Constructors

- [constructor](HttpGone.md#constructor)

### Properties

- [statusCode](HttpGone.md#statuscode)
- [STATUS](HttpGone.md#status)

### Methods

- [getStatusCode](HttpGone.md#getstatuscode)

## Constructors

### constructor

• **new HttpGone**(`message`, `options?`)

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

▪ `Static` `Readonly` **STATUS**: `410`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[HttpError](HttpError.md).[getStatusCode](HttpError.md#getstatuscode)
