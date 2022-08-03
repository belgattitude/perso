[@belgattitude/errorh - v1.0.0](../README.md) / HttpImATeapot

# Class: HttpImATeapot

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpImATeapot`**

## Table of contents

### Constructors

- [constructor](HttpImATeapot.md#constructor)

### Properties

- [statusCode](HttpImATeapot.md#statuscode)
- [STATUS](HttpImATeapot.md#status)

### Methods

- [getStatusCode](HttpImATeapot.md#getstatuscode)

## Constructors

### constructor

• **new HttpImATeapot**(`message`, `options?`)

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

▪ `Static` `Readonly` **STATUS**: `418`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[HttpError](HttpError.md).[getStatusCode](HttpError.md#getstatuscode)
