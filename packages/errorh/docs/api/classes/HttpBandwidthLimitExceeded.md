[@belgattitude/errorh - v1.0.0](../README.md) / HttpBandwidthLimitExceeded

# Class: HttpBandwidthLimitExceeded

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpBandwidthLimitExceeded`**

## Table of contents

### Constructors

- [constructor](HttpBandwidthLimitExceeded.md#constructor)

### Properties

- [statusCode](HttpBandwidthLimitExceeded.md#statuscode)
- [STATUS](HttpBandwidthLimitExceeded.md#status)

### Methods

- [getStatusCode](HttpBandwidthLimitExceeded.md#getstatuscode)

## Constructors

### constructor

• **new HttpBandwidthLimitExceeded**(`message`, `options?`)

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

▪ `Static` `Readonly` **STATUS**: `509`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[HttpError](HttpError.md).[getStatusCode](HttpError.md#getstatuscode)
