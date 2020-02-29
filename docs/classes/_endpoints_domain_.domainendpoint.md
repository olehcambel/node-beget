[node-beget](../README.md) › [Globals](../globals.md) › ["endpoints/domain"](../modules/_endpoints_domain_.md) › [DomainEndpoint](_endpoints_domain_.domainendpoint.md)

# Class: DomainEndpoint

## Hierarchy

* **DomainEndpoint**

## Index

### Constructors

* [constructor](_endpoints_domain_.domainendpoint.md#constructor)

### Properties

* [client](_endpoints_domain_.domainendpoint.md#private-client)

### Methods

* [addDirectives](_endpoints_domain_.domainendpoint.md#adddirectives)
* [addSubdomainVirtual](_endpoints_domain_.domainendpoint.md#addsubdomainvirtual)
* [addVirtual](_endpoints_domain_.domainendpoint.md#addvirtual)
* [changePhpVersion](_endpoints_domain_.domainendpoint.md#changephpversion)
* [checkDomainToRegister](_endpoints_domain_.domainendpoint.md#checkdomaintoregister)
* [delete](_endpoints_domain_.domainendpoint.md#delete)
* [deleteSubdomain](_endpoints_domain_.domainendpoint.md#deletesubdomain)
* [getDirectives](_endpoints_domain_.domainendpoint.md#getdirectives)
* [getList](_endpoints_domain_.domainendpoint.md#getlist)
* [getPhpVersion](_endpoints_domain_.domainendpoint.md#getphpversion)
* [getSubdomainList](_endpoints_domain_.domainendpoint.md#getsubdomainlist)
* [getZoneList](_endpoints_domain_.domainendpoint.md#getzonelist)
* [method](_endpoints_domain_.domainendpoint.md#private-method)
* [removeDirectives](_endpoints_domain_.domainendpoint.md#removedirectives)

## Constructors

###  constructor

\+ **new DomainEndpoint**(`client`: [BegetRequest](_beget_request_.begetrequest.md)): *[DomainEndpoint](_endpoints_domain_.domainendpoint.md)*

*Defined in [src/endpoints/domain.ts:5](https://github.com/olehcambel/node-beget/blob/9994d31/src/endpoints/domain.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [BegetRequest](_beget_request_.begetrequest.md) |

**Returns:** *[DomainEndpoint](_endpoints_domain_.domainendpoint.md)*

## Properties

### `Private` client

• **client**: *[BegetRequest](_beget_request_.begetrequest.md)*

*Defined in [src/endpoints/domain.ts:6](https://github.com/olehcambel/node-beget/blob/9994d31/src/endpoints/domain.ts#L6)*

## Methods

###  addDirectives

▸ **addDirectives**(`params`: [SearchDirective](../interfaces/_types_domain_interface_.searchdirective.md)): *Promise‹boolean›*

*Defined in [src/endpoints/domain.ts:119](https://github.com/olehcambel/node-beget/blob/9994d31/src/endpoints/domain.ts#L119)*

The method adds custom directives for the specified domain

**Parameters:**

Name | Type |
------ | ------ |
`params` | [SearchDirective](../interfaces/_types_domain_interface_.searchdirective.md) |

**Returns:** *Promise‹boolean›*

___

###  addSubdomainVirtual

▸ **addSubdomainVirtual**(`params`: [AddSubdomain](../interfaces/_types_domain_interface_.addsubdomain.md)): *Promise‹number›*

*Defined in [src/endpoints/domain.ts:57](https://github.com/olehcambel/node-beget/blob/9994d31/src/endpoints/domain.ts#L57)*

Method adds given subdomain.

**Parameters:**

Name | Type |
------ | ------ |
`params` | [AddSubdomain](../interfaces/_types_domain_interface_.addsubdomain.md) |

**Returns:** *Promise‹number›*

Returns ID of added subdomain.

___

###  addVirtual

▸ **addVirtual**(`params`: Domain.AddVirtual): *Promise‹number›*

*Defined in [src/endpoints/domain.ts:33](https://github.com/olehcambel/node-beget/blob/9994d31/src/endpoints/domain.ts#L33)*

Method adds domain.

**Parameters:**

Name | Type |
------ | ------ |
`params` | Domain.AddVirtual |

**Returns:** *Promise‹number›*

Returns ID of added domain.

___

###  changePhpVersion

▸ **changePhpVersion**(`params`: Domain.UpdatePhpVersion): *Promise‹Domain.UpdatePhpVersionResponse›*

*Defined in [src/endpoints/domain.ts:101](https://github.com/olehcambel/node-beget/blob/9994d31/src/endpoints/domain.ts#L101)*

The method changes the php version to the transferred one.
Allows you to set and remove cgi mode

**Parameters:**

Name | Type |
------ | ------ |
`params` | Domain.UpdatePhpVersion |

**Returns:** *Promise‹Domain.UpdatePhpVersionResponse›*

___

###  checkDomainToRegister

▸ **checkDomainToRegister**(`params`: [CheckDomain](../interfaces/_types_domain_interface_.checkdomain.md)): *Promise‹[RegistrationPossibility](../interfaces/_types_domain_interface_.registrationpossibility.md)›*

*Defined in [src/endpoints/domain.ts:83](https://github.com/olehcambel/node-beget/blob/9994d31/src/endpoints/domain.ts#L83)*

Method returns information about registration possibility for given domain name.

For a final decision about the possibility of registering the domain three fields
must be analyzed: may_be_registered, pay_type и in_system

Required values:
- may_be_registered - true
- pay_type - money or bonus_domain
- in_system - false

When making an application for domain registration, you will need to pass the pay_type,
which was returned by the method.

**Parameters:**

Name | Type |
------ | ------ |
`params` | [CheckDomain](../interfaces/_types_domain_interface_.checkdomain.md) |

**Returns:** *Promise‹[RegistrationPossibility](../interfaces/_types_domain_interface_.registrationpossibility.md)›*

___

###  delete

▸ **delete**(`params`: Pick‹[Subdomain](../interfaces/_types_domain_interface_.subdomain.md), "id"›): *Promise‹boolean›*

*Defined in [src/endpoints/domain.ts:42](https://github.com/olehcambel/node-beget/blob/9994d31/src/endpoints/domain.ts#L42)*

Method deletes domain. If the domain was linked to a website,
it will be unlinked from it. All subdomains of this domain will be deleted.

**Parameters:**

Name | Type |
------ | ------ |
`params` | Pick‹[Subdomain](../interfaces/_types_domain_interface_.subdomain.md), "id"› |

**Returns:** *Promise‹boolean›*

Returns property of successful or unsuccessful execution.

___

###  deleteSubdomain

▸ **deleteSubdomain**(`params`: Pick‹[Subdomain](../interfaces/_types_domain_interface_.subdomain.md), "id"›): *Promise‹boolean›*

*Defined in [src/endpoints/domain.ts:65](https://github.com/olehcambel/node-beget/blob/9994d31/src/endpoints/domain.ts#L65)*

Method deletes given subdomain.

**Parameters:**

Name | Type |
------ | ------ |
`params` | Pick‹[Subdomain](../interfaces/_types_domain_interface_.subdomain.md), "id"› |

**Returns:** *Promise‹boolean›*

Returns property of successful or unsuccessful execution.

___

###  getDirectives

▸ **getDirectives**(`params`: Pick‹[SearchDirective](../interfaces/_types_domain_interface_.searchdirective.md), "full_fqdn"›): *Promise‹[Directive](../interfaces/_types_domain_interface_.directive.md)›*

*Defined in [src/endpoints/domain.ts:110](https://github.com/olehcambel/node-beget/blob/9994d31/src/endpoints/domain.ts#L110)*

The method returns custom directives for the specified domain

**Parameters:**

Name | Type |
------ | ------ |
`params` | Pick‹[SearchDirective](../interfaces/_types_domain_interface_.searchdirective.md), "full_fqdn"› |

**Returns:** *Promise‹[Directive](../interfaces/_types_domain_interface_.directive.md)›*

___

###  getList

▸ **getList**(): *Promise‹[Domain](../interfaces/_types_domain_interface_.domain.md)[]›*

*Defined in [src/endpoints/domain.ts:18](https://github.com/olehcambel/node-beget/blob/9994d31/src/endpoints/domain.ts#L18)*

Method returns list of domains on user account.

**Returns:** *Promise‹[Domain](../interfaces/_types_domain_interface_.domain.md)[]›*

___

###  getPhpVersion

▸ **getPhpVersion**(): *Promise‹Domain.PhpVersion›*

*Defined in [src/endpoints/domain.ts:93](https://github.com/olehcambel/node-beget/blob/9994d31/src/endpoints/domain.ts#L93)*

The method returns information about the current version of php for the domain,
whether php is enabled as cgi and php versions available for installation

**Returns:** *Promise‹Domain.PhpVersion›*

___

###  getSubdomainList

▸ **getSubdomainList**(): *Promise‹[Subdomain](../interfaces/_types_domain_interface_.subdomain.md)[]›*

*Defined in [src/endpoints/domain.ts:49](https://github.com/olehcambel/node-beget/blob/9994d31/src/endpoints/domain.ts#L49)*

Method returns subdomain list.

**Returns:** *Promise‹[Subdomain](../interfaces/_types_domain_interface_.subdomain.md)[]›*

___

###  getZoneList

▸ **getZoneList**(): *Promise‹Domain.ZoneList›*

*Defined in [src/endpoints/domain.ts:25](https://github.com/olehcambel/node-beget/blob/9994d31/src/endpoints/domain.ts#L25)*

Method returns zone list.

**Returns:** *Promise‹Domain.ZoneList›*

___

### `Private` method

▸ **method**<**T**>(`method`: Methods["domain"], `data?`: object): *Promise‹T›*

*Defined in [src/endpoints/domain.ts:11](https://github.com/olehcambel/node-beget/blob/9994d31/src/endpoints/domain.ts#L11)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`method` | Methods["domain"] |
`data?` | object |

**Returns:** *Promise‹T›*

___

###  removeDirectives

▸ **removeDirectives**(`params`: [SearchDirective](../interfaces/_types_domain_interface_.searchdirective.md)): *Promise‹boolean›*

*Defined in [src/endpoints/domain.ts:126](https://github.com/olehcambel/node-beget/blob/9994d31/src/endpoints/domain.ts#L126)*

The method removes user directives for the specified domain

**Parameters:**

Name | Type |
------ | ------ |
`params` | [SearchDirective](../interfaces/_types_domain_interface_.searchdirective.md) |

**Returns:** *Promise‹boolean›*
