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

Defined in src/endpoints/dns.ts:5

**Parameters:**

Name | Type |
------ | ------ |
`client` | [BegetRequest](_beget_request_.begetrequest.md) |

**Returns:** *[DnsEndpoint](_endpoints_dns_.dnsendpoint.md)*

## Properties

### `Private` client

• **client**: *[BegetRequest](_beget_request_.begetrequest.md)*

Defined in src/endpoints/dns.ts:6

## Methods

###  changeRecords

▸ **changeRecords**(`fqdn`: string, `records?`: [DNSRecordTypes](../modules/_types_dns_interface_.md#dnsrecordtypes)): *Promise‹boolean›*

Defined in src/endpoints/dns.ts:28

// TODO: change records to overload
Method changes DNS records for given domain.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fqdn` | string | full domain name (domains in national languages need to be passed in punycode). |
`records?` | [DNSRecordTypes](../modules/_types_dns_interface_.md#dnsrecordtypes) | array, containing DNS records.  |

**Returns:** *Promise‹boolean›*

___

###  getData

▸ **getData**(`fqdn`: string): *Promise‹[DomainInfo](../interfaces/_types_dns_interface_.domaininfo.md)[]›*

Defined in src/endpoints/dns.ts:17

Method returns information about domain from DNS server.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fqdn` | string | full domain name (domain in national zones need to be passed in punycode).  |

**Returns:** *Promise‹[DomainInfo](../interfaces/_types_dns_interface_.domaininfo.md)[]›*

___

### `Private` method

▸ **method**<**T**>(`method`: Methods["user"], `data?`: object): *Promise‹T›*

Defined in src/endpoints/dns.ts:8

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`method` | Methods["user"] |
`data?` | object |

**Returns:** *Promise‹T›*
