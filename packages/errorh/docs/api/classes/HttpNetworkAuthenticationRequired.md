[@belgattitude/errorh - v1.0.0](../README.md) / HttpNetworkAuthenticationRequired

# Class: HttpNetworkAuthenticationRequired

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpNetworkAuthenticationRequired`**

## Table of contents

### Constructors

- [constructor](HttpNetworkAuthenticationRequired.md#constructor)

### Properties

- [statusCode](HttpNetworkAuthenticationRequired.md#statuscode)
- [STATUS](HttpNetworkAuthenticationRequired.md#status)

### Methods

- [getStatusCode](HttpNetworkAuthenticationRequired.md#getstatuscode)

## Constructors

### constructor

• **new HttpNetworkAuthenticationRequired**(`message`, `options?`)

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

▪ `Static` `Readonly` **STATUS**: `511`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[HttpError](HttpError.md).[getStatusCode](HttpError.md#getstatuscode)
