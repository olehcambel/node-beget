[node-beget](../README.md) › [Globals](../globals.md) › ["endpoints/dns"](../modules/_endpoints_dns_.md) › [DnsEndpoint](_endpoints_dns_.dnsendpoint.md)

# Class: DnsEndpoint

## Hierarchy

* **DnsEndpoint**

## Index

### Constructors

* [constructor](_endpoints_dns_.dnsendpoint.md#constructor)

### Properties

* [client](_endpoints_dns_.dnsendpoint.md#private-client)

### Methods

* [changeRecords](_endpoints_dns_.dnsendpoint.md#changerecords)
* [getData](_endpoints_dns_.dnsendpoint.md#getdata)
* [method](_endpoints_dns_.dnsendpoint.md#private-method)

## Constructors

###  constructor

\+ **new DnsEndpoint**(`client`: [BegetRequest](_beget_request_.begetrequest.md)): *[DnsEndpoint](_endpoints_dns_.dnsendpoint.md)*

*Defined in [src/endpoints/dns.ts:5](https://github.com/olehcambel/node-beget/blob/fcfb1e8/src/endpoints/dns.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [BegetRequest](_beget_request_.begetrequest.md) |

**Returns:** *[DnsEndpoint](_endpoints_dns_.dnsendpoint.md)*

## Properties

### `Private` client

• **client**: *[BegetRequest](_beget_request_.begetrequest.md)*

*Defined in [src/endpoints/dns.ts:6](https://github.com/olehcambel/node-beget/blob/fcfb1e8/src/endpoints/dns.ts#L6)*

## Methods

###  changeRecords

▸ **changeRecords**(`params`: [ChangeRecords](../modules/_types_dns_interface_.md#changerecords)): *Promise‹boolean›*

*Defined in [src/endpoints/dns.ts:27](https://github.com/olehcambel/node-beget/blob/fcfb1e8/src/endpoints/dns.ts#L27)*

// TODO: change records to overload
Method changes DNS records for given domain.

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ChangeRecords](../modules/_types_dns_interface_.md#changerecords) |

**Returns:** *Promise‹boolean›*

Returns property of successful or unsuccessful execution.

___

###  getData

▸ **getData**(`params`: Pick‹[DomainInfo](../interfaces/_types_dns_interface_.domaininfo.md), "fqdn"›): *Promise‹[DomainInfo](../interfaces/_types_dns_interface_.domaininfo.md)[]›*

*Defined in [src/endpoints/dns.ts:18](https://github.com/olehcambel/node-beget/blob/fcfb1e8/src/endpoints/dns.ts#L18)*

Method returns information about domain from DNS server.

**Parameters:**

Name | Type |
------ | ------ |
`params` | Pick‹[DomainInfo](../interfaces/_types_dns_interface_.domaininfo.md), "fqdn"› |

**Returns:** *Promise‹[DomainInfo](../interfaces/_types_dns_interface_.domaininfo.md)[]›*

___

### `Private` method

▸ **method**<**T**>(`method`: Methods["dns"], `data?`: object): *Promise‹T›*

*Defined in [src/endpoints/dns.ts:11](https://github.com/olehcambel/node-beget/blob/fcfb1e8/src/endpoints/dns.ts#L11)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`method` | Methods["dns"] |
`data?` | object |

**Returns:** *Promise‹T›*
