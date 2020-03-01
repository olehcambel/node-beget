[node-beget](../README.md) › [Globals](../globals.md) › ["endpoints/site"](../modules/_endpoints_site_.md) › [SiteEndpoint](_endpoints_site_.siteendpoint.md)

# Class: SiteEndpoint

## Hierarchy

* **SiteEndpoint**

## Index

### Constructors

* [constructor](_endpoints_site_.siteendpoint.md#constructor)

### Properties

* [client](_endpoints_site_.siteendpoint.md#private-client)

### Methods

* [add](_endpoints_site_.siteendpoint.md#add)
* [delete](_endpoints_site_.siteendpoint.md#delete)
* [freeze](_endpoints_site_.siteendpoint.md#freeze)
* [getList](_endpoints_site_.siteendpoint.md#getlist)
* [isSiteFrozen](_endpoints_site_.siteendpoint.md#issitefrozen)
* [linkDomain](_endpoints_site_.siteendpoint.md#linkdomain)
* [method](_endpoints_site_.siteendpoint.md#private-method)
* [unfreeze](_endpoints_site_.siteendpoint.md#unfreeze)
* [unlinkDomain](_endpoints_site_.siteendpoint.md#unlinkdomain)

## Constructors

###  constructor

\+ **new SiteEndpoint**(`client`: [BegetRequest](_beget_request_.begetrequest.md)): *[SiteEndpoint](_endpoints_site_.siteendpoint.md)*

*Defined in [src/endpoints/site.ts:5](https://github.com/olehcambel/node-beget/blob/f128411/src/endpoints/site.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [BegetRequest](_beget_request_.begetrequest.md) |

**Returns:** *[SiteEndpoint](_endpoints_site_.siteendpoint.md)*

## Properties

### `Private` client

• **client**: *[BegetRequest](_beget_request_.begetrequest.md)*

*Defined in [src/endpoints/site.ts:6](https://github.com/olehcambel/node-beget/blob/f128411/src/endpoints/site.ts#L6)*

## Methods

###  add

▸ **add**(`name`: string): *Promise‹boolean›*

*Defined in [src/endpoints/site.ts:30](https://github.com/olehcambel/node-beget/blob/f128411/src/endpoints/site.ts#L30)*

Method creates new website with given name.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | name of directory with website (e.g. site.de); |

**Returns:** *Promise‹boolean›*

Returns property of successful or unsuccessful execution.
In case of a successful response the full path to directory with
website will be name/public_html.

___

###  delete

▸ **delete**(`params`: Pick‹[Website](../interfaces/_types_site_interface_.website.md), "id"›): *Promise‹boolean›*

*Defined in [src/endpoints/site.ts:39](https://github.com/olehcambel/node-beget/blob/f128411/src/endpoints/site.ts#L39)*

Method deletes website. If domains were linked to the website, they
will be unlinked from it.

**Parameters:**

Name | Type |
------ | ------ |
`params` | Pick‹[Website](../interfaces/_types_site_interface_.website.md), "id"› |

**Returns:** *Promise‹boolean›*

Returns property of successful or unsuccessful execution.

___

###  freeze

▸ **freeze**(`params`: [FreezeOptions](../interfaces/_types_site_interface_.freezeoptions.md)): *Promise‹boolean›*

*Defined in [src/endpoints/site.ts:67](https://github.com/olehcambel/node-beget/blob/f128411/src/endpoints/site.ts#L67)*

The method prohibits changing site files.

**Parameters:**

Name | Type |
------ | ------ |
`params` | [FreezeOptions](../interfaces/_types_site_interface_.freezeoptions.md) |

**Returns:** *Promise‹boolean›*

Returns property of successful or unsuccessful execution.
Upon operation performance, the website will begin to open under the
domain name within 5-10 minutes.

___

###  getList

▸ **getList**(): *Promise‹[Website](../interfaces/_types_site_interface_.website.md)[]›*

*Defined in [src/endpoints/site.ts:19](https://github.com/olehcambel/node-beget/blob/f128411/src/endpoints/site.ts#L19)*

Method returns website list. If domains are linked to it,
they will also be returned.

**Returns:** *Promise‹[Website](../interfaces/_types_site_interface_.website.md)[]›*

___

###  isSiteFrozen

▸ **isSiteFrozen**(`params`: Pick‹[LinkDomain](../interfaces/_types_site_interface_.linkdomain.md), "site_id"›): *Promise‹boolean›*

*Defined in [src/endpoints/site.ts:83](https://github.com/olehcambel/node-beget/blob/f128411/src/endpoints/site.ts#L83)*

The method returns the current status of the site,
whether file editing is available.

**Parameters:**

Name | Type |
------ | ------ |
`params` | Pick‹[LinkDomain](../interfaces/_types_site_interface_.linkdomain.md), "site_id"› |

**Returns:** *Promise‹boolean›*

___

###  linkDomain

▸ **linkDomain**(`params`: [LinkDomain](../interfaces/_types_site_interface_.linkdomain.md)): *Promise‹boolean›*

*Defined in [src/endpoints/site.ts:49](https://github.com/olehcambel/node-beget/blob/f128411/src/endpoints/site.ts#L49)*

Method links domain to website.

**Parameters:**

Name | Type |
------ | ------ |
`params` | [LinkDomain](../interfaces/_types_site_interface_.linkdomain.md) |

**Returns:** *Promise‹boolean›*

Returns property of successful or unsuccessful execution.
Upon operation performance, the website will begin to open under the
domain name within 5-10 minutes.

___

### `Private` method

▸ **method**<**T**>(`method`: Methods["site"], `data?`: object): *Promise‹T›*

*Defined in [src/endpoints/site.ts:11](https://github.com/olehcambel/node-beget/blob/f128411/src/endpoints/site.ts#L11)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`method` | Methods["site"] |
`data?` | object |

**Returns:** *Promise‹T›*

___

###  unfreeze

▸ **unfreeze**(`params`: Pick‹[Website](../interfaces/_types_site_interface_.website.md), "id"›): *Promise‹boolean›*

*Defined in [src/endpoints/site.ts:76](https://github.com/olehcambel/node-beget/blob/f128411/src/endpoints/site.ts#L76)*

The method allows changing site files.

**Parameters:**

Name | Type |
------ | ------ |
`params` | Pick‹[Website](../interfaces/_types_site_interface_.website.md), "id"› |

**Returns:** *Promise‹boolean›*

Returns property of successful or unsuccessful execution.
Upon operation performance, the website will begin to open under the
domain name within 5-10 minutes.

___

###  unlinkDomain

▸ **unlinkDomain**(`params`: Pick‹[LinkDomain](../interfaces/_types_site_interface_.linkdomain.md), "domain_id"›): *Promise‹boolean›*

*Defined in [src/endpoints/site.ts:57](https://github.com/olehcambel/node-beget/blob/f128411/src/endpoints/site.ts#L57)*

Method unlinks domain.

**Parameters:**

Name | Type |
------ | ------ |
`params` | Pick‹[LinkDomain](../interfaces/_types_site_interface_.linkdomain.md), "domain_id"› |

**Returns:** *Promise‹boolean›*

Returns property of successful or unsuccessful execution.
