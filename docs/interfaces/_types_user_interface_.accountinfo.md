[node-beget](../README.md) › [Globals](../globals.md) › ["types/user.interface"](../modules/_types_user_interface_.md) › [AccountInfo](_types_user_interface_.accountinfo.md)

# Interface: AccountInfo

## Hierarchy

* **AccountInfo**

## Index

### Properties

* [plan_domain](_types_user_interface_.accountinfo.md#plan_domain)
* [plan_ftp](_types_user_interface_.accountinfo.md#plan_ftp)
* [plan_mail](_types_user_interface_.accountinfo.md#plan_mail)
* [plan_mysql](_types_user_interface_.accountinfo.md#plan_mysql)
* [plan_name](_types_user_interface_.accountinfo.md#plan_name)
* [plan_quota](_types_user_interface_.accountinfo.md#plan_quota)
* [plan_site](_types_user_interface_.accountinfo.md#plan_site)
* [server_apache_version](_types_user_interface_.accountinfo.md#server_apache_version)
* [server_cpu_name](_types_user_interface_.accountinfo.md#server_cpu_name)
* [server_loadaverage](_types_user_interface_.accountinfo.md#server_loadaverage)
* [server_memory](_types_user_interface_.accountinfo.md#server_memory)
* [server_memorycurrent](_types_user_interface_.accountinfo.md#server_memorycurrent)
* [server_mysql_version](_types_user_interface_.accountinfo.md#server_mysql_version)
* [server_name](_types_user_interface_.accountinfo.md#server_name)
* [server_nginx_version](_types_user_interface_.accountinfo.md#server_nginx_version)
* [server_perl_version](_types_user_interface_.accountinfo.md#server_perl_version)
* [server_php_version](_types_user_interface_.accountinfo.md#server_php_version)
* [server_python_version](_types_user_interface_.accountinfo.md#server_python_version)
* [server_uptime](_types_user_interface_.accountinfo.md#server_uptime)
* [user_balance](_types_user_interface_.accountinfo.md#user_balance)
* [user_bash](_types_user_interface_.accountinfo.md#user_bash)
* [user_domains](_types_user_interface_.accountinfo.md#user_domains)
* [user_ftp](_types_user_interface_.accountinfo.md#user_ftp)
* [user_is_year_plan](_types_user_interface_.accountinfo.md#user_is_year_plan)
* [user_mail](_types_user_interface_.accountinfo.md#user_mail)
* [user_mysqlsize](_types_user_interface_.accountinfo.md#user_mysqlsize)
* [user_quota](_types_user_interface_.accountinfo.md#user_quota)
* [user_rate_current](_types_user_interface_.accountinfo.md#user_rate_current)
* [user_rate_month](_types_user_interface_.accountinfo.md#user_rate_month)
* [user_rate_year](_types_user_interface_.accountinfo.md#user_rate_year)
* [user_sites](_types_user_interface_.accountinfo.md#user_sites)

## Properties

###  plan_domain

• **plan_domain**: *number*

*Defined in [src/types/user.interface.ts:26](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/user.interface.ts#L26)*

Maximim domain number

**`example`** 2147483647

___

###  plan_ftp

• **plan_ftp**: *number*

*Defined in [src/types/user.interface.ts:56](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/user.interface.ts#L56)*

Myximum number of FTP accounts

**`example`** 25

___

###  plan_mail

• **plan_mail**: *number*

*Defined in [src/types/user.interface.ts:66](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/user.interface.ts#L66)*

Maximim mailbox number

**`example`** 2147483647

___

###  plan_mysql

• **plan_mysql**: *number*

*Defined in [src/types/user.interface.ts:36](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/user.interface.ts#L36)*

Maximum MySQL DB count

**`example`** 2147483647

___

###  plan_name

• **plan_name**: *string*

*Defined in [src/types/user.interface.ts:6](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/user.interface.ts#L6)*

Tariff name

**`example`** 'Great'

___

###  plan_quota

• **plan_quota**: *number*

*Defined in [src/types/user.interface.ts:46](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/user.interface.ts#L46)*

Maximum disk quota size

**`example`** 10000

___

###  plan_site

• **plan_site**: *number*

*Defined in [src/types/user.interface.ts:16](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/user.interface.ts#L16)*

Maximum website number

**`example`** 25

___

###  server_apache_version

• **server_apache_version**: *string*

*Defined in [src/types/user.interface.ts:101](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/user.interface.ts#L101)*

Apache version

**`example`** ' Apache/2.2.23 (Unix)'

___

###  server_cpu_name

• **server_cpu_name**: *string*

*Defined in [src/types/user.interface.ts:136](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/user.interface.ts#L136)*

Processors

**`example`** '24 * Intel(R) Xeon(R) CPU X5660  @ 2.80GHz'

___

###  server_loadaverage

• **server_loadaverage**: *string*

*Defined in [src/types/user.interface.ts:151](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/user.interface.ts#L151)*

Current Load Average

**`example`** '4.05'

___

###  server_memory

• **server_memory**: *string*

*Defined in [src/types/user.interface.ts:141](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/user.interface.ts#L141)*

RAM size (Mb)

**`example`** '96747'

___

###  server_memorycurrent

• **server_memorycurrent**: *number*

*Defined in [src/types/user.interface.ts:146](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/user.interface.ts#L146)*

Size of used RAM

**`example`** 4944

___

###  server_mysql_version

• **server_mysql_version**: *string*

*Defined in [src/types/user.interface.ts:106](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/user.interface.ts#L106)*

MySQL version

**`example`** '5.1.68'

___

###  server_name

• **server_name**: *string*

*Defined in [src/types/user.interface.ts:131](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/user.interface.ts#L131)*

Server name

**`example`** 'germes'

___

###  server_nginx_version

• **server_nginx_version**: *string*

*Defined in [src/types/user.interface.ts:111](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/user.interface.ts#L111)*

Nginx version

**`example`** 'nginx/1.1.0'

___

###  server_perl_version

• **server_perl_version**: *string*

*Defined in [src/types/user.interface.ts:116](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/user.interface.ts#L116)*

Perl version

**`example`** 'v5.10.1'

___

###  server_php_version

• **server_php_version**: *string*

*Defined in [src/types/user.interface.ts:121](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/user.interface.ts#L121)*

PHP version

**`example`** '5.2.17'

___

###  server_python_version

• **server_python_version**: *string*

*Defined in [src/types/user.interface.ts:126](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/user.interface.ts#L126)*

Python version

**`example`** 'Python 2.6.6'

___

###  server_uptime

• **server_uptime**: *string*

*Defined in [src/types/user.interface.ts:156](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/user.interface.ts#L156)*

Uptime

**`example`** '18'

___

###  user_balance

• **user_balance**: *number*

*Defined in [src/types/user.interface.ts:96](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/user.interface.ts#L96)*

Current user balance

**`example`** 1339.57

___

###  user_bash

• **user_bash**: *string*

*Defined in [src/types/user.interface.ts:71](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/user.interface.ts#L71)*

Used bash

**`example`** '/bin/bash'

___

###  user_domains

• **user_domains**: *number*

*Defined in [src/types/user.interface.ts:21](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/user.interface.ts#L21)*

Actual domain number

**`example`** 4

___

###  user_ftp

• **user_ftp**: *number*

*Defined in [src/types/user.interface.ts:51](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/user.interface.ts#L51)*

Actual number of FTP accounts

**`example`** 6

___

###  user_is_year_plan

• **user_is_year_plan**: *string*

*Defined in [src/types/user.interface.ts:81](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/user.interface.ts#L81)*

Is an annual discount being used

**`example`** '0'

___

###  user_mail

• **user_mail**: *number*

*Defined in [src/types/user.interface.ts:61](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/user.interface.ts#L61)*

Actual mailbox number

**`example`** 18

___

###  user_mysqlsize

• **user_mysqlsize**: *number*

*Defined in [src/types/user.interface.ts:31](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/user.interface.ts#L31)*

Actual MySQL DB size

**`example`** 153

___

###  user_quota

• **user_quota**: *number*

*Defined in [src/types/user.interface.ts:41](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/user.interface.ts#L41)*

Size of used disk quota

**`example`** 1283

___

###  user_rate_current

• **user_rate_current**: *string*

*Defined in [src/types/user.interface.ts:76](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/user.interface.ts#L76)*

Current price of tariff plan per day

**`example`** '12.66'

___

###  user_rate_month

• **user_rate_month**: *number*

*Defined in [src/types/user.interface.ts:91](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/user.interface.ts#L91)*

Current tariff price per month

**`example`** 385

___

###  user_rate_year

• **user_rate_year**: *number*

*Defined in [src/types/user.interface.ts:86](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/user.interface.ts#L86)*

Current tariff price per year

**`example`** 4620

___

###  user_sites

• **user_sites**: *number*

*Defined in [src/types/user.interface.ts:11](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/user.interface.ts#L11)*

Actual website number

**`example`** 7
