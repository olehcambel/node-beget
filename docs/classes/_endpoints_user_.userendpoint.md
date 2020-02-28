[node-beget](../README.md) › [Globals](../globals.md) › ["endpoints/user"](../modules/_endpoints_user_.md) › [UserEndpoint](_endpoints_user_.userendpoint.md)

# Class: UserEndpoint

## Hierarchy

* **UserEndpoint**

## Index

### Constructors

* [constructor](_endpoints_user_.userendpoint.md#constructor)

### Properties

* [client](_endpoints_user_.userendpoint.md#private-client)

### Methods

* [getAccountInfo](_endpoints_user_.userendpoint.md#getaccountinfo)
* [method](_endpoints_user_.userendpoint.md#private-method)
* [toggleSsh](_endpoints_user_.userendpoint.md#togglessh)

## Constructors

###  constructor

\+ **new UserEndpoint**(`client`: [BegetRequest](_beget_request_.begetrequest.md)): *[UserEndpoint](_endpoints_user_.userendpoint.md)*

*Defined in [src/endpoints/user.ts:5](https://github.com/olehcambel/node-beget/blob/fcfb1e8/src/endpoints/user.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [BegetRequest](_beget_request_.begetrequest.md) |

**Returns:** *[UserEndpoint](_endpoints_user_.userendpoint.md)*

## Properties

### `Private` client

• **client**: *[BegetRequest](_beget_request_.begetrequest.md)*

*Defined in [src/endpoints/user.ts:6](https://github.com/olehcambel/node-beget/blob/fcfb1e8/src/endpoints/user.ts#L6)*

## Methods

###  getAccountInfo

▸ **getAccountInfo**(): *Promise‹[AccountInfo](../interfaces/_types_user_interface_.accountinfo.md)›*

*Defined in [src/endpoints/user.ts:20](https://github.com/olehcambel/node-beget/blob/fcfb1e8/src/endpoints/user.ts#L20)*

Method returns information on the user's tariff plan,
on some parameters of the server, where the user is
currently located and on the applied limits thereof.

**Returns:** *Promise‹[AccountInfo](../interfaces/_types_user_interface_.accountinfo.md)›*

___

### `Private` method

▸ **method**<**T**>(`method`: Methods["user"], `data?`: object): *Promise‹T›*

*Defined in [src/endpoints/user.ts:11](https://github.com/olehcambel/node-beget/blob/fcfb1e8/src/endpoints/user.ts#L11)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`method` | Methods["user"] |
`data?` | object |

**Returns:** *Promise‹T›*

___

###  toggleSsh

▸ **toggleSsh**(`status`: 0 | 1, `ftplogin?`: string): *Promise‹void›*

*Defined in [src/endpoints/user.ts:31](https://github.com/olehcambel/node-beget/blob/fcfb1e8/src/endpoints/user.ts#L31)*

If there is no additional ftplogin parameter for the main account,
the method enables and disables SSH for ftp account with ftplogin.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`status` | 0 &#124; 1 | 1 - enable, 0 - disable; |
`ftplogin?` | string | ftp account login, if passed enables/disables SSH access to ftp account; if not passed, enables/disables SSH access to main user account;  |

**Returns:** *Promise‹void›*
