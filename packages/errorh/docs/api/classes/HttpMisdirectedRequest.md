[@belgattitude/errorh - v1.0.0](../README.md) / HttpMisdirectedRequest

# Class: HttpMisdirectedRequest

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`HttpMisdirectedRequest`**

## Table of contents

### Constructors

- [constructor](HttpMisdirectedRequest.md#constructor)

### Properties

- [statusCode](HttpMisdirectedRequest.md#statuscode)
- [STATUS](HttpMisdirectedRequest.md#status)

### Methods

- [getStatusCode](HttpMisdirectedRequest.md#getstatuscode)

## Constructors

### constructor

• **new HttpMisdirectedRequest**(`message`, `options?`)

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
