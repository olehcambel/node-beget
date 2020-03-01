[node-beget](../README.md) › [Globals](../globals.md) › ["endpoints/mysql"](../modules/_endpoints_mysql_.md) › [MysqlEndpoint](_endpoints_mysql_.mysqlendpoint.md)

# Class: MysqlEndpoint

## Hierarchy

* **MysqlEndpoint**

## Index

### Constructors

* [constructor](_endpoints_mysql_.mysqlendpoint.md#constructor)

### Properties

* [client](_endpoints_mysql_.mysqlendpoint.md#private-client)

### Methods

* [addAccess](_endpoints_mysql_.mysqlendpoint.md#addaccess)
* [addDb](_endpoints_mysql_.mysqlendpoint.md#adddb)
* [changeAccessPassword](_endpoints_mysql_.mysqlendpoint.md#changeaccesspassword)
* [dropAccess](_endpoints_mysql_.mysqlendpoint.md#dropaccess)
* [dropDb](_endpoints_mysql_.mysqlendpoint.md#dropdb)
* [getList](_endpoints_mysql_.mysqlendpoint.md#getlist)
* [method](_endpoints_mysql_.mysqlendpoint.md#private-method)

## Constructors

###  constructor

\+ **new MysqlEndpoint**(`client`: [BegetRequest](_beget_request_.begetrequest.md)): *[MysqlEndpoint](_endpoints_mysql_.mysqlendpoint.md)*

*Defined in [src/endpoints/mysql.ts:5](https://github.com/olehcambel/node-beget/blob/f128411/src/endpoints/mysql.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [BegetRequest](_beget_request_.begetrequest.md) |

**Returns:** *[MysqlEndpoint](_endpoints_mysql_.mysqlendpoint.md)*

## Properties

### `Private` client

• **client**: *[BegetRequest](_beget_request_.begetrequest.md)*

*Defined in [src/endpoints/mysql.ts:6](https://github.com/olehcambel/node-beget/blob/f128411/src/endpoints/mysql.ts#L6)*

## Methods

###  addAccess

▸ **addAccess**(`params`: [DBConf](../interfaces/_types_mysql_interface_.dbconf.md)): *Promise‹boolean›*

*Defined in [src/endpoints/mysql.ts:36](https://github.com/olehcambel/node-beget/blob/f128411/src/endpoints/mysql.ts#L36)*

The method adds the specified access to the specified MySql database.

**Parameters:**

Name | Type |
------ | ------ |
`params` | [DBConf](../interfaces/_types_mysql_interface_.dbconf.md) |

**Returns:** *Promise‹boolean›*

Returns property of successful or unsuccessful execution.

___

###  addDb

▸ **addDb**(`params`: Pick‹[DBConf](../interfaces/_types_mysql_interface_.dbconf.md), "suffix" | "password"›): *Promise‹boolean›*

*Defined in [src/endpoints/mysql.ts:28](https://github.com/olehcambel/node-beget/blob/f128411/src/endpoints/mysql.ts#L28)*

The method adds the task to the queue for creating a new MySql database with
the specified suffix and creates access for localhost with the specified password.
The database creation process can take several minutes.

**Parameters:**

Name | Type |
------ | ------ |
`params` | Pick‹[DBConf](../interfaces/_types_mysql_interface_.dbconf.md), "suffix" &#124; "password"› |

**Returns:** *Promise‹boolean›*

Returns property of successful or unsuccessful execution.

___

###  changeAccessPassword

▸ **changeAccessPassword**(`params`: [DBConf](../interfaces/_types_mysql_interface_.dbconf.md)): *Promise‹boolean›*

*Defined in [src/endpoints/mysql.ts:60](https://github.com/olehcambel/node-beget/blob/f128411/src/endpoints/mysql.ts#L60)*

The method changes the password on the specified access.

**Parameters:**

Name | Type |
------ | ------ |
`params` | [DBConf](../interfaces/_types_mysql_interface_.dbconf.md) |

**Returns:** *Promise‹boolean›*

Returns property of successful or unsuccessful execution.

___

###  dropAccess

▸ **dropAccess**(`params`: Pick‹[DBConf](../interfaces/_types_mysql_interface_.dbconf.md), "suffix" | "access"›): *Promise‹boolean›*

*Defined in [src/endpoints/mysql.ts:52](https://github.com/olehcambel/node-beget/blob/f128411/src/endpoints/mysql.ts#L52)*

The method removes the specified access from the database.

**Parameters:**

Name | Type |
------ | ------ |
`params` | Pick‹[DBConf](../interfaces/_types_mysql_interface_.dbconf.md), "suffix" &#124; "access"› |

**Returns:** *Promise‹boolean›*

Returns property of successful or unsuccessful execution.

___

###  dropDb

▸ **dropDb**(`params`: Pick‹[DBConf](../interfaces/_types_mysql_interface_.dbconf.md), "suffix"›): *Promise‹boolean›*

*Defined in [src/endpoints/mysql.ts:44](https://github.com/olehcambel/node-beget/blob/f128411/src/endpoints/mysql.ts#L44)*

The method deletes the specified database and all accesses to it.

**Parameters:**

Name | Type |
------ | ------ |
`params` | Pick‹[DBConf](../interfaces/_types_mysql_interface_.dbconf.md), "suffix"› |

**Returns:** *Promise‹boolean›*

Returns property of successful or unsuccessful execution.

___

###  getList

▸ **getList**(): *Promise‹[DB](../interfaces/_types_mysql_interface_.db.md)[]›*

*Defined in [src/endpoints/mysql.ts:18](https://github.com/olehcambel/node-beget/blob/f128411/src/endpoints/mysql.ts#L18)*

The method returns a list of MySQL databases with their accesses.

**Returns:** *Promise‹[DB](../interfaces/_types_mysql_interface_.db.md)[]›*

___

### `Private` method

▸ **method**<**T**>(`method`: Methods["mysql"], `data?`: object): *Promise‹T›*

*Defined in [src/endpoints/mysql.ts:11](https://github.com/olehcambel/node-beget/blob/f128411/src/endpoints/mysql.ts#L11)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`method` | Methods["mysql"] |
`data?` | object |

**Returns:** *Promise‹T›*
