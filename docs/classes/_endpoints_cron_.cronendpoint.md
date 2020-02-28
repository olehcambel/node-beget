[node-beget](../README.md) › [Globals](../globals.md) › ["endpoints/cron"](../modules/_endpoints_cron_.md) › [CronEndpoint](_endpoints_cron_.cronendpoint.md)

# Class: CronEndpoint

## Hierarchy

* **CronEndpoint**

## Index

### Constructors

* [constructor](_endpoints_cron_.cronendpoint.md#constructor)

### Properties

* [client](_endpoints_cron_.cronendpoint.md#private-client)

### Methods

* [add](_endpoints_cron_.cronendpoint.md#add)
* [changeHiddenState](_endpoints_cron_.cronendpoint.md#changehiddenstate)
* [delete](_endpoints_cron_.cronendpoint.md#delete)
* [getEmail](_endpoints_cron_.cronendpoint.md#getemail)
* [getList](_endpoints_cron_.cronendpoint.md#getlist)
* [method](_endpoints_cron_.cronendpoint.md#private-method)
* [setEmail](_endpoints_cron_.cronendpoint.md#setemail)

## Constructors

###  constructor

\+ **new CronEndpoint**(`client`: [BegetRequest](_beget_request_.begetrequest.md)): *[CronEndpoint](_endpoints_cron_.cronendpoint.md)*

Defined in src/endpoints/cron.ts:5

**Parameters:**

Name | Type |
------ | ------ |
`client` | [BegetRequest](_beget_request_.begetrequest.md) |

**Returns:** *[CronEndpoint](_endpoints_cron_.cronendpoint.md)*

## Properties

### `Private` client

• **client**: *[BegetRequest](_beget_request_.begetrequest.md)*

Defined in src/endpoints/cron.ts:6

## Methods

###  add

▸ **add**(`params`: [CreateTask](../modules/_types_cron_interface_.md#createtask)): *Promise‹Pick‹[Task](../interfaces/_types_cron_interface_.task.md), "row_number"››*

Defined in src/endpoints/cron.ts:27

Method adds new task. Task will be active upon adding.

**Parameters:**

Name | Type |
------ | ------ |
`params` | [CreateTask](../modules/_types_cron_interface_.md#createtask) |

**Returns:** *Promise‹Pick‹[Task](../interfaces/_types_cron_interface_.task.md), "row_number"››*

Returns task ID (task ID is unique within one user).

___

###  changeHiddenState

▸ **changeHiddenState**(`params`: [ChangeHiddenState](../modules/_types_cron_interface_.md#changehiddenstate)): *Promise‹Pick‹[Task](../interfaces/_types_cron_interface_.task.md), "row_number"››*

Defined in src/endpoints/cron.ts:43

Method will change task status.

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ChangeHiddenState](../modules/_types_cron_interface_.md#changehiddenstate) |

**Returns:** *Promise‹Pick‹[Task](../interfaces/_types_cron_interface_.task.md), "row_number"››*

Returns new task ID (the task identifier is unique within one user).

___

###  delete

▸ **delete**(`params`: Pick‹[Task](../interfaces/_types_cron_interface_.task.md), "row_number"›): *Promise‹boolean›*

Defined in src/endpoints/cron.ts:35

Method will delete task with given ID.

**Parameters:**

Name | Type |
------ | ------ |
`params` | Pick‹[Task](../interfaces/_types_cron_interface_.task.md), "row_number"› |

**Returns:** *Promise‹boolean›*

Returns property of successful or unsuccessful execution.

___

###  getEmail

▸ **getEmail**(): *Promise‹string | null›*

Defined in src/endpoints/cron.ts:51

Method returns email, where the display of executed tasks is sent.

**Returns:** *Promise‹string | null›*

If no email has been set, method returns NULL.

___

###  getList

▸ **getList**(): *Promise‹[Task](../interfaces/_types_cron_interface_.task.md)[]›*

Defined in src/endpoints/cron.ts:19

Method returns list of all CronTab tasks.

**Returns:** *Promise‹[Task](../interfaces/_types_cron_interface_.task.md)[]›*

Returns twodimensional array, each string whereof describes a Cron task.

___

### `Private` method

▸ **method**<**T**>(`method`: Methods["cron"], `data?`: object): *Promise‹T›*

Defined in src/endpoints/cron.ts:11

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`method` | Methods["cron"] |
`data?` | object |

**Returns:** *Promise‹T›*

___

###  setEmail

▸ **setEmail**(`email`: string): *Promise‹boolean›*

Defined in src/endpoints/cron.ts:60

Method sets email, where the display of executed tasks will be sent.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`email` | string | Email or empty string; |

**Returns:** *Promise‹boolean›*

Returns property of successful or unsuccessful execution.
