[node-beget](../README.md) › [Globals](../globals.md) › ["types/domain.interface"](../modules/_types_domain_interface_.md) › [CheckDomain](_types_domain_interface_.checkdomain.md)

# Interface: CheckDomain

## Hierarchy

* **CheckDomain**

## Index

### Properties

* [hostname](_types_domain_interface_.checkdomain.md#hostname)
* [period](_types_domain_interface_.checkdomain.md#period)
* [zone_id](_types_domain_interface_.checkdomain.md#zone_id)

## Properties

###  hostname

• **hostname**: *string*

*Defined in [src/types/domain.interface.ts:164](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/domain.interface.ts#L164)*

domain name without zone;

___

###  period

• **period**: *number*

*Defined in [src/types/domain.interface.ts:172](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/domain.interface.ts#L172)*

registration period (in years), type int.

___

###  zone_id

• **zone_id**: *number*

*Defined in [src/types/domain.interface.ts:168](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/domain.interface.ts#L168)*

zone ID, you can receive a zone list through the method getZoneList;
