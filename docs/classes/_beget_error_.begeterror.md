[node-beget](../README.md) › [Globals](../globals.md) › ["beget.error"](../modules/_beget_error_.md) › [BegetError](_beget_error_.begeterror.md)

# Class: BegetError

## Hierarchy

* [Error](_beget_error_.begeterror.md#static-error)

  ↳ **BegetError**

## Index

### Constructors

* [constructor](_beget_error_.begeterror.md#constructor)

### Properties

* [fatal](_beget_error_.begeterror.md#fatal)
* [message](_beget_error_.begeterror.md#message)
* [name](_beget_error_.begeterror.md#name)
* [on](_beget_error_.begeterror.md#optional-on)
* [payload](_beget_error_.begeterror.md#payload)
* [stack](_beget_error_.begeterror.md#optional-stack)
* [Error](_beget_error_.begeterror.md#static-error)

## Constructors

###  constructor

\+ **new BegetError**(`payload`: [ErrorPayload](../interfaces/_types_common_interface_.errorpayload.md) | [ErrorPayload](../interfaces/_types_common_interface_.errorpayload.md)[], `on?`: object): *[BegetError](_beget_error_.begeterror.md)*

*Defined in [src/beget.error.ts:10](https://github.com/olehcambel/node-beget/blob/f128411/src/beget.error.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [ErrorPayload](../interfaces/_types_common_interface_.errorpayload.md) &#124; [ErrorPayload](../interfaces/_types_common_interface_.errorpayload.md)[] |
`on?` | object |

**Returns:** *[BegetError](_beget_error_.begeterror.md)*

## Properties

###  fatal

• **fatal**: *boolean*

*Defined in [src/beget.error.ts:10](https://github.com/olehcambel/node-beget/blob/f128411/src/beget.error.ts#L10)*

___

###  message

• **message**: *string*

*Inherited from [BegetError](_beget_error_.begeterror.md).[message](_beget_error_.begeterror.md#message)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:974

___

###  name

• **name**: *string* = "BegetError"

*Overrides void*

*Defined in [src/beget.error.ts:9](https://github.com/olehcambel/node-beget/blob/f128411/src/beget.error.ts#L9)*

___

### `Optional` on

• **on**? : *object*

*Defined in [src/beget.error.ts:14](https://github.com/olehcambel/node-beget/blob/f128411/src/beget.error.ts#L14)*

___

###  payload

• **payload**: *[ErrorPayload](../interfaces/_types_common_interface_.errorpayload.md) | [ErrorPayload](../interfaces/_types_common_interface_.errorpayload.md)[]*

*Defined in [src/beget.error.ts:13](https://github.com/olehcambel/node-beget/blob/f128411/src/beget.error.ts#L13)*

___

### `Optional` stack

• **stack**? : *string*

*Inherited from [BegetError](_beget_error_.begeterror.md).[stack](_beget_error_.begeterror.md#optional-stack)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:975

___

### `Static` Error

▪ **Error**: *ErrorConstructor*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:984
