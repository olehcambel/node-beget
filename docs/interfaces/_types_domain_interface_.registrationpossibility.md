[node-beget](../README.md) › [Globals](../globals.md) › ["types/domain.interface"](../modules/_types_domain_interface_.md) › [RegistrationPossibility](_types_domain_interface_.registrationpossibility.md)

# Interface: RegistrationPossibility

## Hierarchy

* **RegistrationPossibility**

## Index

### Properties

* [balance](_types_domain_interface_.registrationpossibility.md#balance)
* [bonus_domains](_types_domain_interface_.registrationpossibility.md#bonus_domains)
* [in_system](_types_domain_interface_.registrationpossibility.md#in_system)
* [may_be_registered](_types_domain_interface_.registrationpossibility.md#may_be_registered)
* [pay_type](_types_domain_interface_.registrationpossibility.md#pay_type)
* [price](_types_domain_interface_.registrationpossibility.md#price)

## Properties

###  balance

• **balance**: *number*

Defined in src/types/domain.interface.ts:192

current account balance

**`example`** 289.46

___

###  bonus_domains

• **bonus_domains**: *number*

Defined in src/types/domain.interface.ts:187

current number of bonus domains on account in selected zone

**`example`** 0

___

###  in_system

• **in_system**: *boolean*

Defined in src/types/domain.interface.ts:212

does such a domain already exist in the BeGet system

**`example`** false

___

###  may_be_registered

• **may_be_registered**: *boolean*

Defined in src/types/domain.interface.ts:182

is the domain available for registration (based on WHOIS service)

**`example`** true

___

###  pay_type

• **pay_type**: *null | [PayType](../modules/_types_domain_interface_.md#paytype)*

Defined in src/types/domain.interface.ts:202

payment type for domain registration.

Can be:
- null - domain cannot be paid;
- money - payment will be performed from account balance;
- bonus_domain - payment will be performed on expense of a bonus.

**`example`** null

___

###  price

• **price**: *number*

Defined in src/types/domain.interface.ts:207

total price of domain registration (considering the period)

**`example`** 350
