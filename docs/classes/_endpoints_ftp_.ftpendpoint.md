[node-beget](../README.md) › [Globals](../globals.md) › ["endpoints/ftp"](../modules/_endpoints_ftp_.md) › [FtpEndpoint](_endpoints_ftp_.ftpendpoint.md)

# Class: FtpEndpoint

## Hierarchy

* **FtpEndpoint**

## Index

### Constructors

* [constructor](_endpoints_ftp_.ftpendpoint.md#constructor)

### Properties

* [client](_endpoints_ftp_.ftpendpoint.md#private-client)

### Methods

* [add](_endpoints_ftp_.ftpendpoint.md#add)
* [changePassword](_endpoints_ftp_.ftpendpoint.md#changepassword)
* [delete](_endpoints_ftp_.ftpendpoint.md#delete)
* [getList](_endpoints_ftp_.ftpendpoint.md#getlist)
* [method](_endpoints_ftp_.ftpendpoint.md#private-method)

## Constructors

###  constructor

\+ **new FtpEndpoint**(`client`: [BegetRequest](_beget_request_.begetrequest.md)): *[FtpEndpoint](_endpoints_ftp_.ftpendpoint.md)*

*Defined in [src/endpoints/ftp.ts:5](https://github.com/olehcambel/node-beget/blob/f128411/src/endpoints/ftp.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [BegetRequest](_beget_request_.begetrequest.md) |

**Returns:** *[FtpEndpoint](_endpoints_ftp_.ftpendpoint.md)*

## Properties

### `Private` client

• **client**: *[BegetRequest](_beget_request_.begetrequest.md)*

*Defined in [src/endpoints/ftp.ts:6](https://github.com/olehcambel/node-beget/blob/f128411/src/endpoints/ftp.ts#L6)*

## Methods

###  add

▸ **add**(`params`: [AddAccount](../modules/_types_ftp_interface_.md#addaccount)): *Promise‹boolean›*

*Defined in [src/endpoints/ftp.ts:26](https://github.com/olehcambel/node-beget/blob/f128411/src/endpoints/ftp.ts#L26)*

Method adds new FTP account.

**Parameters:**

Name | Type |
------ | ------ |
`params` | [AddAccount](../modules/_types_ftp_interface_.md#addaccount) |

**Returns:** *Promise‹boolean›*

Returns property of successful or unsuccessful execution.

___

###  changePassword

▸ **changePassword**(`params`: Pick‹[Account](../interfaces/_types_ftp_interface_.account.md), "suffix" | "password"›): *Promise‹boolean›*

*Defined in [src/endpoints/ftp.ts:34](https://github.com/olehcambel/node-beget/blob/f128411/src/endpoints/ftp.ts#L34)*

Method performs password change for additional FTP account.

**Parameters:**

Name | Type |
------ | ------ |
`params` | Pick‹[Account](../interfaces/_types_ftp_interface_.account.md), "suffix" &#124; "password"› |

**Returns:** *Promise‹boolean›*

Returns property of successful or unsuccessful execution.

___

###  delete

▸ **delete**(`params`: Pick‹[Account](../interfaces/_types_ftp_interface_.account.md), "suffix"›): *Promise‹boolean›*

*Defined in [src/endpoints/ftp.ts:42](https://github.com/olehcambel/node-beget/blob/f128411/src/endpoints/ftp.ts#L42)*

Method deletes additional FTP account with given suffix.

**Parameters:**

Name | Type |
------ | ------ |
`params` | Pick‹[Account](../interfaces/_types_ftp_interface_.account.md), "suffix"› |

**Returns:** *Promise‹boolean›*

Returns property of successful or unsuccessful execution.

___

###  getList

▸ **getList**(): *Promise‹[Account](../interfaces/_types_ftp_interface_.account.md)[]›*

*Defined in [src/endpoints/ftp.ts:18](https://github.com/olehcambel/node-beget/blob/f128411/src/endpoints/ftp.ts#L18)*

Method returns list of additional FTP accounts with their home directories.

**Returns:** *Promise‹[Account](../interfaces/_types_ftp_interface_.account.md)[]›*

___

### `Private` method

▸ **method**<**T**>(`method`: Methods["ftp"], `data?`: object): *Promise‹T›*

*Defined in [src/endpoints/ftp.ts:11](https://github.com/olehcambel/node-beget/blob/f128411/src/endpoints/ftp.ts#L11)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`method` | Methods["ftp"] |
`data?` | object |

**Returns:** *Promise‹T›*
