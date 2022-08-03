[@belgattitude/errorh - v1.0.0](../README.md) / HttpBadMapping

# Class: HttpBadMapping

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpBadMapping`**

## Table of contents

### Constructors

- [constructor](HttpBadMapping.md#constructor)

### Properties

- [statusCode](HttpBadMapping.md#statuscode)
- [STATUS](HttpBadMapping.md#status)

### Methods

- [getStatusCode](HttpBadMapping.md#getstatuscode)

## Constructors

### constructor

• **new HttpBadMapping**(`message`, `options?`)

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

▪ `Static` `Readonly` **STATUS**: `421`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[HttpError](HttpError.md).[getStatusCode](HttpError.md#getstatuscode)
