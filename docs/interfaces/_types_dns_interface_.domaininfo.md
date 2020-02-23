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

Defined in src/types/dns.interface.ts:40

passed domain name

**`example`** 'beget.de'

___

###  is_beget_dns

• **is_beget_dns**: *1*

Defined in src/types/dns.interface.ts:31

domain is on BeGet DNS servers (0 - no / 1 - yes)

___

###  is_subdomain

• **is_subdomain**: *0*

Defined in src/types/dns.interface.ts:35

is the domain a subdomain (0 - no / 1 - yes)

___

###  is_under_control

• **is_under_control**: *1*

Defined in src/types/dns.interface.ts:27

domain is under BeGet administration (0 - no / 1 - yes)

___

###  records

• **records**: *Record‹"DNS" | "DNS_IP" | "A" | "MX" | "TXT", [DNSRecord](_types_dns_interface_.dnsrecord.md)[]›*

Defined in src/types/dns.interface.ts:44

currently used DNS records

___

###  set_type

• **set_type**: *number*

Defined in src/types/dns.interface.ts:51

type of currently used settings:
1 - A, MX, TXT records used;
2 - NS records used (for subdomains);
3 - CNAME records used (for subdomains).
