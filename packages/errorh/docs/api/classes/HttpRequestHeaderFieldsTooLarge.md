[@belgattitude/errorh - v1.0.0](../README.md) / HttpRequestHeaderFieldsTooLarge

# Class: HttpRequestHeaderFieldsTooLarge

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpRequestHeaderFieldsTooLarge`**

## Table of contents

### Constructors

- [constructor](HttpRequestHeaderFieldsTooLarge.md#constructor)

### Properties

- [statusCode](HttpRequestHeaderFieldsTooLarge.md#statuscode)
- [STATUS](HttpRequestHeaderFieldsTooLarge.md#status)

### Methods

- [getStatusCode](HttpRequestHeaderFieldsTooLarge.md#getstatuscode)

## Constructors

### constructor

• **new HttpRequestHeaderFieldsTooLarge**(`message`, `options?`)

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

▪ `Static` `Readonly` **STATUS**: `431`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[HttpError](HttpError.md).[getStatusCode](HttpError.md#getstatuscode)
