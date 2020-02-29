[node-beget](../README.md) › [Globals](../globals.md) › ["types/cron.interface"](../modules/_types_cron_interface_.md) › [Task](_types_cron_interface_.task.md)

# Interface: Task

## Hierarchy

* **Task**

## Index

### Properties

* [command](_types_cron_interface_.task.md#command)
* [days](_types_cron_interface_.task.md#days)
* [hours](_types_cron_interface_.task.md#hours)
* [is_hidden](_types_cron_interface_.task.md#is_hidden)
* [minutes](_types_cron_interface_.task.md#minutes)
* [months](_types_cron_interface_.task.md#months)
* [row_number](_types_cron_interface_.task.md#row_number)
* [weekdays](_types_cron_interface_.task.md#weekdays)

## Properties

###  command

• **command**: *string*

*Defined in [src/types/cron.interface.ts:36](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/cron.interface.ts#L36)*

Command

**`example`** 'wget -O /dev/null http://wget vk.com'

___

###  days

• **days**: *string*

*Defined in [src/types/cron.interface.ts:21](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/cron.interface.ts#L21)*

Days

**`example`** '*'

___

###  hours

• **hours**: *string*

*Defined in [src/types/cron.interface.ts:16](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/cron.interface.ts#L16)*

Hours

**`example`** '*'

___

###  is_hidden

• **is_hidden**: *1 | 0*

*Defined in [src/types/cron.interface.ts:41](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/cron.interface.ts#L41)*

task status (active / inactive), type boolean: 0 or 1;

**`example`** '1'

___

###  minutes

• **minutes**: *string*

*Defined in [src/types/cron.interface.ts:11](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/cron.interface.ts#L11)*

Minutes

**`example`** '*'

___

###  months

• **months**: *string*

*Defined in [src/types/cron.interface.ts:26](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/cron.interface.ts#L26)*

Months

**`example`** '10,11'

___

###  row_number

• **row_number**: *number*

*Defined in [src/types/cron.interface.ts:6](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/cron.interface.ts#L6)*

task ID

**`example`** '1000'

___

###  weekdays

• **weekdays**: *string*

*Defined in [src/types/cron.interface.ts:31](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/cron.interface.ts#L31)*

Weekdays

**`example`** '*'
