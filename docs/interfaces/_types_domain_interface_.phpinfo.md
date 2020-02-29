[node-beget](../README.md) › [Globals](../globals.md) › ["types/domain.interface"](../modules/_types_domain_interface_.md) › [PhpInfo](_types_domain_interface_.phpinfo.md)

# Interface: PhpInfo

## Hierarchy

* **PhpInfo**

## Index

### Properties

* [allowed_versions](_types_domain_interface_.phpinfo.md#allowed_versions)
* [cgi](_types_domain_interface_.phpinfo.md#cgi)
* [full_fqdn](_types_domain_interface_.phpinfo.md#full_fqdn)
* [is_cgi](_types_domain_interface_.phpinfo.md#is_cgi)
* [php_version](_types_domain_interface_.phpinfo.md#php_version)
* [result](_types_domain_interface_.phpinfo.md#result)

## Properties

###  allowed_versions

• **allowed_versions**: *string[]*

*Defined in [src/types/domain.interface.ts:236](https://github.com/olehcambel/node-beget/blob/530258f/src/types/domain.interface.ts#L236)*

**`example`** ['4.4', '5.2', '5.3', '5.4', '5.5', '5.6']

___

###  cgi

• **cgi**: *[CGI](../modules/_types_domain_interface_.md#cgi)*

*Defined in [src/types/domain.interface.ts:232](https://github.com/olehcambel/node-beget/blob/530258f/src/types/domain.interface.ts#L232)*

is cgi mode enabled

**`example`** 'disabled' | 'enabled'

___

###  full_fqdn

• **full_fqdn**: *string*

*Defined in [src/types/domain.interface.ts:222](https://github.com/olehcambel/node-beget/blob/530258f/src/types/domain.interface.ts#L222)*

domain with which php version and cgi mode were changed

**`example`** 'foobar.com'

___

###  is_cgi

• **is_cgi**: *boolean*

*Defined in [src/types/domain.interface.ts:244](https://github.com/olehcambel/node-beget/blob/530258f/src/types/domain.interface.ts#L244)*

set or remove cgi mode. Defaults to false;

___

###  php_version

• **php_version**: *string*

*Defined in [src/types/domain.interface.ts:227](https://github.com/olehcambel/node-beget/blob/530258f/src/types/domain.interface.ts#L227)*

version of php after the current request

**`example`** '5.6'

___

###  result

• **result**: *string*

*Defined in [src/types/domain.interface.ts:240](https://github.com/olehcambel/node-beget/blob/530258f/src/types/domain.interface.ts#L240)*

changes may take some time
