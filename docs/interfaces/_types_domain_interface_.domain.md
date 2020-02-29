[node-beget](../README.md) › [Globals](../globals.md) › ["types/domain.interface"](../modules/_types_domain_interface_.md) › [Domain](_types_domain_interface_.domain.md)

# Interface: Domain

## Hierarchy

* **Domain**

## Index

### Properties

* [auto_renew](_types_domain_interface_.domain.md#auto_renew)
* [can_renew](_types_domain_interface_.domain.md#can_renew)
* [date_add](_types_domain_interface_.domain.md#date_add)
* [date_expire](_types_domain_interface_.domain.md#date_expire)
* [date_register](_types_domain_interface_.domain.md#date_register)
* [fqdn](_types_domain_interface_.domain.md#fqdn)
* [id](_types_domain_interface_.domain.md#id)
* [is_under_control](_types_domain_interface_.domain.md#is_under_control)
* [register_order_comment](_types_domain_interface_.domain.md#register_order_comment)
* [register_order_status](_types_domain_interface_.domain.md#register_order_status)
* [registrar](_types_domain_interface_.domain.md#registrar)
* [registrar_status](_types_domain_interface_.domain.md#registrar_status)
* [renew_order_status](_types_domain_interface_.domain.md#renew_order_status)

## Properties

###  auto_renew

• **auto_renew**: *string*

*Defined in [src/types/domain.interface.ts:24](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/domain.interface.ts#L24)*

'automatic domain renewal' option status

**`example`** '0'

___

###  can_renew

• **can_renew**: *string*

*Defined in [src/types/domain.interface.ts:39](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/domain.interface.ts#L39)*

renewal possibility status

**`example`** '0'

___

###  date_add

• **date_add**: *string*

*Defined in [src/types/domain.interface.ts:19](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/domain.interface.ts#L19)*

date and time of domain creation

**`example`** '2011-10-24 15:01:40'

___

###  date_expire

• **date_expire**: *number*

*Defined in [src/types/domain.interface.ts:34](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/domain.interface.ts#L34)*

expiration date of delegation (if under BeGet administration)

**`example`** 0

___

###  date_register

• **date_register**: *string*

*Defined in [src/types/domain.interface.ts:29](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/domain.interface.ts#L29)*

domain registration date (if under BeGet administration)

**`example`** '2011-10-24'

___

###  fqdn

• **fqdn**: *string*

*Defined in [src/types/domain.interface.ts:14](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/domain.interface.ts#L14)*

full domain name

**`example`** 'mylogin.bget.de'

___

###  id

• **id**: *string*

*Defined in [src/types/domain.interface.ts:9](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/domain.interface.ts#L9)*

domain ID

**`example`** '132456'

___

###  is_under_control

• **is_under_control**: *number*

*Defined in [src/types/domain.interface.ts:76](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/domain.interface.ts#L76)*

Status shows if domain is under BeGet administration.
Defines possibility of operations, such as: domain renewal, ordering add.
services from registrar, DNS server change

___

###  register_order_comment

• **register_order_comment**: *null | string*

*Defined in [src/types/domain.interface.ts:63](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/domain.interface.ts#L63)*

comment on registration order (mostly comment on reasons of order annulment)

**`example`** null

___

###  register_order_status

• **register_order_status**: *null | [RegistarOrderStatus](../modules/_types_domain_interface_.md#registarorderstatus)*

*Defined in [src/types/domain.interface.ts:58](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/domain.interface.ts#L58)*

status of domain registration order (if domain was added to its registration order).

Can be: new, registred, delete

**`example`** null

___

###  registrar

• **registrar**: *null | string*

*Defined in [src/types/domain.interface.ts:44](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/domain.interface.ts#L44)*

domain name registrar (if under BeGet administration)

**`example`** null

___

###  registrar_status

• **registrar_status**: *null | [RegistarStatus](../modules/_types_domain_interface_.md#registarstatus)*

*Defined in [src/types/domain.interface.ts:51](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/domain.interface.ts#L51)*

domain status at registrar (if under BeGet administration).

Can be: delegated, not_active, undelegated

**`example`** null

___

###  renew_order_status

• **renew_order_status**: *string*

*Defined in [src/types/domain.interface.ts:70](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/domain.interface.ts#L70)*

status of domain renewal order.

Can be: pending, delete, canceled error, success

**`example`** '0'
