[@belgattitude/errorh - v1.0.0](../README.md) / HttpGatewayTimeout

# Class: HttpGatewayTimeout

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpGatewayTimeout`**

## Table of contents

### Constructors

- [constructor](HttpGatewayTimeout.md#constructor)

### Properties

- [statusCode](HttpGatewayTimeout.md#statuscode)
- [STATUS](HttpGatewayTimeout.md#status)

### Methods

- [getStatusCode](HttpGatewayTimeout.md#getstatuscode)

## Constructors

### constructor

• **new HttpGatewayTimeout**(`message`, `options?`)

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

▪ `Static` `Readonly` **STATUS**: `504`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[HttpError](HttpError.md).[getStatusCode](HttpError.md#getstatuscode)
