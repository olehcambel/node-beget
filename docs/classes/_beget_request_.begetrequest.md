[node-beget](../README.md) › [Globals](../globals.md) › ["beget-request"](../modules/_beget_request_.md) › [BegetRequest](_beget_request_.begetrequest.md)

# Class: BegetRequest

## Hierarchy

* **BegetRequest**

## Index

### Constructors

* [constructor](_beget_request_.begetrequest.md#constructor)

### Properties

* [config](_beget_request_.begetrequest.md#private-config)
* [request](_beget_request_.begetrequest.md#private-request)

### Methods

* [api](_beget_request_.begetrequest.md#api)
* [safeRequest](_beget_request_.begetrequest.md#private-saferequest)

## Constructors

###  constructor

\+ **new BegetRequest**(`config`: [BegetOptions](../interfaces/_options_beget_options_.begetoptions.md)): *[BegetRequest](_beget_request_.begetrequest.md)*

*Defined in [src/beget-request.ts:20](https://github.com/olehcambel/node-beget/blob/1fa682a/src/beget-request.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [BegetOptions](../interfaces/_options_beget_options_.begetoptions.md) |

**Returns:** *[BegetRequest](_beget_request_.begetrequest.md)*

## Properties

### `Private` config

• **config**: *[BegetOptions](../interfaces/_options_beget_options_.begetoptions.md)*

*Defined in [src/beget-request.ts:23](https://github.com/olehcambel/node-beget/blob/1fa682a/src/beget-request.ts#L23)*

___

### `Private` request

• **request**: *Got‹›* = got.extend({
        resolveBodyOnly: true,
        responseType: 'json',
        prefixUrl: `https://api.beget.com/api`,
    })

*Defined in [src/beget-request.ts:16](https://github.com/olehcambel/node-beget/blob/1fa682a/src/beget-request.ts#L16)*

## Methods

###  api

▸ **api**<**T**, **R**>(`section`: T, `method`: Methods[T], `data?`: object): *Promise‹R›*

*Defined in [src/beget-request.ts:62](https://github.com/olehcambel/node-beget/blob/1fa682a/src/beget-request.ts#L62)*

**Type parameters:**

▪ **T**: *Beget.Controller*

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`section` | T |
`method` | Methods[T] |
`data?` | object |

**Returns:** *Promise‹R›*

___

### `Private` safeRequest

▸ **safeRequest**<**R**>(`options`: OptionsOfDefaultResponseBody): *Promise‹R›*

*Defined in [src/beget-request.ts:25](https://github.com/olehcambel/node-beget/blob/1fa682a/src/beget-request.ts#L25)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`options` | OptionsOfDefaultResponseBody |

**Returns:** *Promise‹R›*