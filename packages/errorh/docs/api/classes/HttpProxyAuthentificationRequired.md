[@belgattitude/errorh - v1.0.0](../README.md) / HttpProxyAuthentificationRequired

# Class: HttpProxyAuthentificationRequired

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpProxyAuthentificationRequired`**

## Table of contents

### Constructors

- [constructor](HttpProxyAuthentificationRequired.md#constructor)

### Properties

- [statusCode](HttpProxyAuthentificationRequired.md#statuscode)
- [STATUS](HttpProxyAuthentificationRequired.md#status)

### Methods

- [getStatusCode](HttpProxyAuthentificationRequired.md#getstatuscode)

## Constructors

### constructor

• **new HttpProxyAuthentificationRequired**(`message`, `options?`)

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

▪ `Static` `Readonly` **STATUS**: `407`

## Methods

### getStatusCode

▸ **getStatusCode**(): `number`

#### Returns

`number`

#### Inherited from

[HttpError](HttpError.md).[getStatusCode](HttpError.md#getstatuscode)
