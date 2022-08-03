[@belgattitude/errorh - v1.0.0](../README.md) / HttpTooManyRequests

# Class: HttpTooManyRequests

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpTooManyRequests`**

## Table of contents

### Constructors

- [constructor](HttpTooManyRequests.md#constructor)

### Properties

- [statusCode](HttpTooManyRequests.md#statuscode)
- [STATUS](HttpTooManyRequests.md#status)

### Methods

- [getStatusCode](HttpTooManyRequests.md#getstatuscode)

## Constructors

### constructor

• **new HttpTooManyRequests**(`message`, `options?`)

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

▪ `Static` `Readonly` **STATUS**: `429`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[HttpError](HttpError.md).[getStatusCode](HttpError.md#getstatuscode)
