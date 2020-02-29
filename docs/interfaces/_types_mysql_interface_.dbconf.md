[node-beget](../README.md) › [Globals](../globals.md) › ["types/mysql.interface"](../modules/_types_mysql_interface_.md) › [DBConf](_types_mysql_interface_.dbconf.md)

# Interface: DBConf

## Hierarchy

* **DBConf**

## Index

### Properties

* [access](_types_mysql_interface_.dbconf.md#access)
* [password](_types_mysql_interface_.dbconf.md#password)
* [suffix](_types_mysql_interface_.dbconf.md#suffix)

## Properties

###  access

• **access**: *string*

*Defined in [src/types/mysql.interface.ts:29](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/mysql.interface.ts#L29)*

access name - it can be: domain, IP, * or localhost;

**`example`** '192.168.100.100'

___

###  password

• **password**: *string*

*Defined in [src/types/mysql.interface.ts:24](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/mysql.interface.ts#L24)*

Password for the new database. It must contain at least 6 characters;

**`example`** 'password'

___

###  suffix

• **suffix**: *string*

*Defined in [src/types/mysql.interface.ts:19](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/mysql.interface.ts#L19)*

suffix part of the database name. When passing this parameter,
please note that the final login of the form "login_suffix"
must be no longer than 16 characters.;

**`example`** 'newdb'
