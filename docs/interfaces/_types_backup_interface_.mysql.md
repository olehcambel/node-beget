[node-beget](../README.md) › [Globals](../globals.md) › ["types/backup.interface"](../modules/_types_backup_interface_.md) › [Mysql](_types_backup_interface_.mysql.md)

# Interface: Mysql

## Hierarchy

* **Mysql**

## Index

### Properties

* [backup_id](_types_backup_interface_.mysql.md#optional-backup_id)
* [bases](_types_backup_interface_.mysql.md#optional-bases)
* [path](_types_backup_interface_.mysql.md#optional-path)
* [paths](_types_backup_interface_.mysql.md#optional-paths)

## Properties

### `Optional` backup_id

• **backup_id**? : *number*

*Defined in [src/types/backup.interface.ts:75](https://github.com/olehcambel/node-beget/blob/f128411/src/types/backup.interface.ts#L75)*

if backup_id is not given, the listing is performed according to
the current copy;

___

### `Optional` bases

• **bases**? : *string[]*

*Defined in [src/types/backup.interface.ts:79](https://github.com/olehcambel/node-beget/blob/f128411/src/types/backup.interface.ts#L79)*

array (one or several values) of MySQL databases for recovery

___

### `Optional` path

• **path**? : *string[]*

*Defined in [src/types/backup.interface.ts:88](https://github.com/olehcambel/node-beget/blob/f128411/src/types/backup.interface.ts#L88)*

path from home directory root (e.g. "/site.de/public_html");

___

### `Optional` paths

• **paths**? : *string[]*

*Defined in [src/types/backup.interface.ts:84](https://github.com/olehcambel/node-beget/blob/f128411/src/types/backup.interface.ts#L84)*

array (one or several values) of paths for restoring from home
directory root (e.g. "/site.de/public_html");
