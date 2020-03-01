[node-beget](../README.md) › [Globals](../globals.md) › ["types/backup.interface"](../modules/_types_backup_interface_.md) › [FileInfo](_types_backup_interface_.fileinfo.md)

# Interface: FileInfo

## Hierarchy

* **FileInfo**

## Index

### Properties

* [is_dir](_types_backup_interface_.fileinfo.md#is_dir)
* [mtime](_types_backup_interface_.fileinfo.md#mtime)
* [name](_types_backup_interface_.fileinfo.md#name)
* [size](_types_backup_interface_.fileinfo.md#size)

## Properties

###  is_dir

• **is_dir**: *0 | 1*

*Defined in [src/types/backup.interface.ts:22](https://github.com/olehcambel/node-beget/blob/f128411/src/types/backup.interface.ts#L22)*

property of file (0) or folder (1);

**`example`** 1

___

###  mtime

• **mtime**: *string*

*Defined in [src/types/backup.interface.ts:27](https://github.com/olehcambel/node-beget/blob/f128411/src/types/backup.interface.ts#L27)*

file creation time in format "Y-m-d H:i:s";

**`example`** '2012-12-25 18:35:05'

___

###  name

• **name**: *string*

*Defined in [src/types/backup.interface.ts:17](https://github.com/olehcambel/node-beget/blob/f128411/src/types/backup.interface.ts#L17)*

name of file or folder;

**`example`** '.cache'

___

###  size

• **size**: *number*

*Defined in [src/types/backup.interface.ts:32](https://github.com/olehcambel/node-beget/blob/f128411/src/types/backup.interface.ts#L32)*

size in bytes;

**`example`** 409
