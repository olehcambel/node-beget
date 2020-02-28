[node-beget](../README.md) › [Globals](../globals.md) › ["endpoints/stat"](../modules/_endpoints_stat_.md) › [StatEndpoint](_endpoints_stat_.statendpoint.md)

# Class: StatEndpoint

## Hierarchy

* **StatEndpoint**

## Index

### Constructors

* [constructor](_endpoints_stat_.statendpoint.md#constructor)

### Properties

* [client](_endpoints_stat_.statendpoint.md#private-client)

### Methods

* [getDbListLoad](_endpoints_stat_.statendpoint.md#getdblistload)
* [getDbLoad](_endpoints_stat_.statendpoint.md#getdbload)
* [getSiteListLoad](_endpoints_stat_.statendpoint.md#getsitelistload)
* [getSiteLoad](_endpoints_stat_.statendpoint.md#getsiteload)
* [method](_endpoints_stat_.statendpoint.md#private-method)

## Constructors

###  constructor

\+ **new StatEndpoint**(`client`: [BegetRequest](_beget_request_.begetrequest.md)): *[StatEndpoint](_endpoints_stat_.statendpoint.md)*

Defined in src/endpoints/stat.ts:6

**Parameters:**

Name | Type |
------ | ------ |
`client` | [BegetRequest](_beget_request_.begetrequest.md) |

**Returns:** *[StatEndpoint](_endpoints_stat_.statendpoint.md)*

## Properties

### `Private` client

• **client**: *[BegetRequest](_beget_request_.begetrequest.md)*

Defined in src/endpoints/stat.ts:7

## Methods

###  getDbListLoad

▸ **getDbListLoad**(): *Promise‹[AvarageLoadDB](../modules/_types_stat_interface_.md#avarageloaddb)[]›*

Defined in src/endpoints/stat.ts:31

Method returns information about the average load on the user's databases
for the past month.

**Returns:** *Promise‹[AvarageLoadDB](../modules/_types_stat_interface_.md#avarageloaddb)[]›*

Returns list of database names and the average load thereof
(in descending order)

___

###  getDbLoad

▸ **getDbLoad**(`db_name`: string): *Promise‹[MysqlLoadInfo](../interfaces/_types_stat_interface_.mysqlloadinfo.md)›*

Defined in src/endpoints/stat.ts:49

Method returns detailed information about load on the given MySQL database.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`db_name` | string | database name  |

**Returns:** *Promise‹[MysqlLoadInfo](../interfaces/_types_stat_interface_.mysqlloadinfo.md)›*

___

###  getSiteListLoad

▸ **getSiteListLoad**(): *Promise‹[AvarageLoad](../interfaces/_types_stat_interface_.avarageload.md)[]›*

Defined in src/endpoints/stat.ts:21

Method returns information about the average load on user websites
within the last month.

**Returns:** *Promise‹[AvarageLoad](../interfaces/_types_stat_interface_.avarageload.md)[]›*

Returns website list and average load thereof (in descending order)

___

###  getSiteLoad

▸ **getSiteLoad**(`params`: Pick‹[LinkDomain](../interfaces/_types_site_interface_.linkdomain.md), "site_id"›): *Promise‹[SiteLoad](../interfaces/_types_stat_interface_.siteload.md)›*

Defined in src/endpoints/stat.ts:41

Method returns detailed information about the load on the given webiste
(load per day and hour)

**Parameters:**

Name | Type |
------ | ------ |
`params` | Pick‹[LinkDomain](../interfaces/_types_site_interface_.linkdomain.md), "site_id"› |

**Returns:** *Promise‹[SiteLoad](../interfaces/_types_stat_interface_.siteload.md)›*

Returns load list for the past 30 days (per day).
As well as load list for the past 24 hours (per hour)

___

### `Private` method

▸ **method**<**T**>(`method`: Methods["stat"], `data?`: object): *Promise‹T›*

Defined in src/endpoints/stat.ts:12

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`method` | Methods["stat"] |
`data?` | object |

**Returns:** *Promise‹T›*
