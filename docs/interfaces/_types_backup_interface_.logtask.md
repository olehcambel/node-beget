[node-beget](../README.md) › [Globals](../globals.md) › ["types/backup.interface"](../modules/_types_backup_interface_.md) › [LogTask](_types_backup_interface_.logtask.md)

# Interface: LogTask

## Hierarchy

* **LogTask**

## Index

### Properties

* [date_create](_types_backup_interface_.logtask.md#date_create)
* [id](_types_backup_interface_.logtask.md#id)
* [operation](_types_backup_interface_.logtask.md#operation)
* [status](_types_backup_interface_.logtask.md#status)
* [target_list](_types_backup_interface_.logtask.md#target_list)
* [type](_types_backup_interface_.logtask.md#type)

## Properties

###  date_create

• **date_create**: *string*

*Defined in [src/types/backup.interface.ts:57](https://github.com/olehcambel/node-beget/blob/fcfb1e8/src/types/backup.interface.ts#L57)*

query creation time in "Y-m-d H:i:s" format;

**`example`** '2014-11-05 14:22:13'

___

###  id

• **id**: *number*

*Defined in [src/types/backup.interface.ts:42](https://github.com/olehcambel/node-beget/blob/fcfb1e8/src/types/backup.interface.ts#L42)*

dosnload / restore query identifier;

**`example`** 80240

___

###  operation

• **operation**: *[LogTaskOperation](../modules/_types_backup_interface_.md#logtaskoperation)*

*Defined in [src/types/backup.interface.ts:47](https://github.com/olehcambel/node-beget/blob/fcfb1e8/src/types/backup.interface.ts#L47)*

restore operation (restore), download (download);

**`example`** 'download'

___

###  status

• **status**: *string*

*Defined in [src/types/backup.interface.ts:67](https://github.com/olehcambel/node-beget/blob/fcfb1e8/src/types/backup.interface.ts#L67)*

execution status;

**`example`** 'success'

___

###  target_list

• **target_list**: *string[]*

*Defined in [src/types/backup.interface.ts:62](https://github.com/olehcambel/node-beget/blob/fcfb1e8/src/types/backup.interface.ts#L62)*

element array in query (files or databases);

**`example`** ['db_opca2']

___

###  type

• **type**: *string*

*Defined in [src/types/backup.interface.ts:52](https://github.com/olehcambel/node-beget/blob/fcfb1e8/src/types/backup.interface.ts#L52)*

detailed operation and restore / download data type and file / mysql;

**`example`** 'download_mysql'
