[node-beget](../README.md) › [Globals](../globals.md) › ["types/ftp.interface"](../modules/_types_ftp_interface_.md) › [Account](_types_ftp_interface_.account.md)

# Interface: Account

## Hierarchy

* **Account**

## Index

### Properties

* [homedir](_types_ftp_interface_.account.md#homedir)
* [login](_types_ftp_interface_.account.md#login)
* [password](_types_ftp_interface_.account.md#password)
* [suffix](_types_ftp_interface_.account.md#suffix)

## Properties

###  homedir

• **homedir**: *string*

*Defined in [src/types/ftp.interface.ts:12](https://github.com/olehcambel/node-beget/blob/f128411/src/types/ftp.interface.ts#L12)*

path to home directory of created account.
Begins with a slash. (e.g. /site.de/public_html);

**`example`** '/public_html'

___

###  login

• **login**: *string*

*Defined in [src/types/ftp.interface.ts:20](https://github.com/olehcambel/node-beget/blob/f128411/src/types/ftp.interface.ts#L20)*

**`example`** 'user_acc1';

___

###  password

• **password**: *string*

*Defined in [src/types/ftp.interface.ts:16](https://github.com/olehcambel/node-beget/blob/f128411/src/types/ftp.interface.ts#L16)*

password for new ftp account;

___

###  suffix

• **suffix**: *string*

*Defined in [src/types/ftp.interface.ts:6](https://github.com/olehcambel/node-beget/blob/f128411/src/types/ftp.interface.ts#L6)*

suffix part of login. When passing this parameter, please note
that the final login in form of "login_suffix" must not exceed 17 characters;
