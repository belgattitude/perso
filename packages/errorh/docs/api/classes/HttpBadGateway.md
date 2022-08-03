[@belgattitude/errorh - v1.0.0](../README.md) / HttpBadGateway

# Class: HttpBadGateway

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpBadGateway`**

## Table of contents

### Constructors

- [constructor](HttpBadGateway.md#constructor)

### Properties

- [statusCode](HttpBadGateway.md#statuscode)
- [STATUS](HttpBadGateway.md#status)

### Methods

- [getStatusCode](HttpBadGateway.md#getstatuscode)

## Constructors

### constructor

• **new HttpBadGateway**(`message`, `options?`)

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

▪ `Static` `Readonly` **STATUS**: `502`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[HttpError](HttpError.md).[getStatusCode](HttpError.md#getstatuscode)
