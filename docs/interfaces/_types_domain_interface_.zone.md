[node-beget](../README.md) › [Globals](../globals.md) › ["types/domain.interface"](../modules/_types_domain_interface_.md) › [Zone](_types_domain_interface_.zone.md)

# Interface: Zone

## Hierarchy

* **Zone**

## Index

### Properties

* [id](_types_domain_interface_.zone.md#id)
* [is_idn](_types_domain_interface_.zone.md#is_idn)
* [is_national](_types_domain_interface_.zone.md#is_national)
* [max_period](_types_domain_interface_.zone.md#max_period)
* [min_period](_types_domain_interface_.zone.md#min_period)
* [price](_types_domain_interface_.zone.md#price)
* [price_idn](_types_domain_interface_.zone.md#price_idn)
* [price_idn_renew](_types_domain_interface_.zone.md#price_idn_renew)
* [price_renew](_types_domain_interface_.zone.md#price_renew)
* [zone](_types_domain_interface_.zone.md#zone)

## Properties

###  id

• **id**: *string*

*Defined in [src/types/domain.interface.ts:83](https://github.com/olehcambel/node-beget/blob/f128411/src/types/domain.interface.ts#L83)*

zone ID

___

###  is_idn

• **is_idn**: *string*

*Defined in [src/types/domain.interface.ts:113](https://github.com/olehcambel/node-beget/blob/f128411/src/types/domain.interface.ts#L113)*

does the zone support IDN domains

**`example`** '0'

___

###  is_national

• **is_national**: *string*

*Defined in [src/types/domain.interface.ts:118](https://github.com/olehcambel/node-beget/blob/f128411/src/types/domain.interface.ts#L118)*

is the zone national

**`example`** '1'

___

###  max_period

• **max_period**: *string*

*Defined in [src/types/domain.interface.ts:128](https://github.com/olehcambel/node-beget/blob/f128411/src/types/domain.interface.ts#L128)*

maximum domain registration period (in years)

**`example`** '1'

___

###  min_period

• **min_period**: *string*

*Defined in [src/types/domain.interface.ts:123](https://github.com/olehcambel/node-beget/blob/f128411/src/types/domain.interface.ts#L123)*

minimum domain registration period (in years)

**`example`** '1'

___

###  price

• **price**: *string*

*Defined in [src/types/domain.interface.ts:93](https://github.com/olehcambel/node-beget/blob/f128411/src/types/domain.interface.ts#L93)*

price of domain registration in zone

**`example`** '120'

___

###  price_idn

• **price_idn**: *null | string*

*Defined in [src/types/domain.interface.ts:103](https://github.com/olehcambel/node-beget/blob/f128411/src/types/domain.interface.ts#L103)*

price of IDN domain registration in zone

**`example`** null

___

###  price_idn_renew

• **price_idn_renew**: *null | string*

*Defined in [src/types/domain.interface.ts:108](https://github.com/olehcambel/node-beget/blob/f128411/src/types/domain.interface.ts#L108)*

price of IDN domain renewal in zone

**`example`** null

___

###  price_renew

• **price_renew**: *string*

*Defined in [src/types/domain.interface.ts:98](https://github.com/olehcambel/node-beget/blob/f128411/src/types/domain.interface.ts#L98)*

price of domain renewal in zone

**`example`** '120'

___

###  zone

• **zone**: *string*

*Defined in [src/types/domain.interface.ts:88](https://github.com/olehcambel/node-beget/blob/f128411/src/types/domain.interface.ts#L88)*

zone name

**`example`** 'de'
