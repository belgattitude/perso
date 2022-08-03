[@belgattitude/errorh - v1.0.0](../README.md) / HttpForbidden

# Class: HttpForbidden

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpForbidden`**

## Table of contents

### Constructors

- [constructor](HttpForbidden.md#constructor)

### Properties

- [statusCode](HttpForbidden.md#statuscode)
- [STATUS](HttpForbidden.md#status)

### Methods

- [getStatusCode](HttpForbidden.md#getstatuscode)

## Constructors

### constructor

• **new HttpForbidden**(`message`, `options?`)

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

▪ `Static` `Readonly` **STATUS**: `403`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[HttpError](HttpError.md).[getStatusCode](HttpError.md#getstatuscode)
