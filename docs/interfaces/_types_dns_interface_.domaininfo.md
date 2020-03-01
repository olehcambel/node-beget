[node-beget](../README.md) › [Globals](../globals.md) › ["types/dns.interface"](../modules/_types_dns_interface_.md) › [DomainInfo](_types_dns_interface_.domaininfo.md)

# Interface: DomainInfo

## Hierarchy

* **DomainInfo**

## Index

### Properties

* [fqdn](_types_dns_interface_.domaininfo.md#fqdn)
* [is_beget_dns](_types_dns_interface_.domaininfo.md#is_beget_dns)
* [is_subdomain](_types_dns_interface_.domaininfo.md#is_subdomain)
* [is_under_control](_types_dns_interface_.domaininfo.md#is_under_control)
* [records](_types_dns_interface_.domaininfo.md#records)
* [set_type](_types_dns_interface_.domaininfo.md#set_type)

## Properties

###  fqdn

• **fqdn**: *string*

*Defined in [src/types/dns.interface.ts:37](https://github.com/olehcambel/node-beget/blob/f128411/src/types/dns.interface.ts#L37)*

passed domain name

**`example`** 'beget.de'

___

###  is_beget_dns

• **is_beget_dns**: *0 | 1*

*Defined in [src/types/dns.interface.ts:28](https://github.com/olehcambel/node-beget/blob/f128411/src/types/dns.interface.ts#L28)*

domain is on BeGet DNS servers (0 - no / 1 - yes)

___

###  is_subdomain

• **is_subdomain**: *0 | 1*

*Defined in [src/types/dns.interface.ts:32](https://github.com/olehcambel/node-beget/blob/f128411/src/types/dns.interface.ts#L32)*

is the domain a subdomain (0 - no / 1 - yes)

___

###  is_under_control

• **is_under_control**: *0 | 1*

*Defined in [src/types/dns.interface.ts:24](https://github.com/olehcambel/node-beget/blob/f128411/src/types/dns.interface.ts#L24)*

domain is under BeGet administration (0 - no / 1 - yes)

___

###  records

• **records**: *[DNSRecords](../modules/_types_dns_interface_.md#dnsrecords)*

*Defined in [src/types/dns.interface.ts:41](https://github.com/olehcambel/node-beget/blob/f128411/src/types/dns.interface.ts#L41)*

currently used DNS records

___

###  set_type

• **set_type**: *number*

*Defined in [src/types/dns.interface.ts:48](https://github.com/olehcambel/node-beget/blob/f128411/src/types/dns.interface.ts#L48)*

type of currently used settings:
1 - A, MX, TXT records used;
2 - NS records used (for subdomains);
3 - CNAME records used (for subdomains).
