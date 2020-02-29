[node-beget](../README.md) › [Globals](../globals.md) › ["types/dns.interface"](_types_dns_interface_.md)

# External module: "types/dns.interface"

## Index

### Interfaces

* [DNSRecord](../interfaces/_types_dns_interface_.dnsrecord.md)
* [DomainInfo](../interfaces/_types_dns_interface_.domaininfo.md)

### Type aliases

* [ChangeRecords](_types_dns_interface_.md#changerecords)
* [DNSRecordTypes](_types_dns_interface_.md#dnsrecordtypes)
* [DNSRecords](_types_dns_interface_.md#dnsrecords)
* [RecordFirst](_types_dns_interface_.md#recordfirst)
* [RecordFourth](_types_dns_interface_.md#recordfourth)
* [RecordSecond](_types_dns_interface_.md#recordsecond)
* [RecordThird](_types_dns_interface_.md#recordthird)

## Type aliases

###  ChangeRecords

Ƭ **ChangeRecords**: *Pick‹[DomainInfo](../interfaces/_types_dns_interface_.domaininfo.md), "fqdn" | "records"›*

*Defined in [src/types/dns.interface.ts:51](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/dns.interface.ts#L51)*

___

###  DNSRecordTypes

Ƭ **DNSRecordTypes**: *[RecordFirst](_types_dns_interface_.md#recordfirst) | [RecordSecond](_types_dns_interface_.md#recordsecond) | [RecordThird](_types_dns_interface_.md#recordthird) | [RecordFourth](_types_dns_interface_.md#recordfourth)*

*Defined in [src/types/dns.interface.ts:16](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/dns.interface.ts#L16)*

___

###  DNSRecords

Ƭ **DNSRecords**: *Types.RecordPartial‹[DNSRecordTypes](_types_dns_interface_.md#dnsrecordtypes), [DNSRecord](../interfaces/_types_dns_interface_.dnsrecord.md)[]›*

*Defined in [src/types/dns.interface.ts:18](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/dns.interface.ts#L18)*

___

###  RecordFirst

Ƭ **RecordFirst**: *"A" | "MX" | "TXT"*

*Defined in [src/types/dns.interface.ts:12](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/dns.interface.ts#L12)*

___

###  RecordFourth

Ƭ **RecordFourth**: *"DNS" | "DNS_IP"*

*Defined in [src/types/dns.interface.ts:15](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/dns.interface.ts#L15)*

___

###  RecordSecond

Ƭ **RecordSecond**: *"NS"*

*Defined in [src/types/dns.interface.ts:13](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/dns.interface.ts#L13)*

___

###  RecordThird

Ƭ **RecordThird**: *"CNAME"*

*Defined in [src/types/dns.interface.ts:14](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/dns.interface.ts#L14)*
