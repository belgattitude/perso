[@belgattitude/errorh - v1.0.0](../README.md) / HttpMethodNotAllowed

# Class: HttpMethodNotAllowed

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpMethodNotAllowed`**

## Table of contents

### Constructors

- [constructor](HttpMethodNotAllowed.md#constructor)

### Properties

- [statusCode](HttpMethodNotAllowed.md#statuscode)
- [STATUS](HttpMethodNotAllowed.md#status)

### Methods

- [getStatusCode](HttpMethodNotAllowed.md#getstatuscode)

## Constructors

### constructor

• **new HttpMethodNotAllowed**(`message`, `options?`)

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

▪ `Static` `Readonly` **STATUS**: `405`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[HttpError](HttpError.md).[getStatusCode](HttpError.md#getstatuscode)
