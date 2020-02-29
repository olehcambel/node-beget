[node-beget](../README.md) › [Globals](../globals.md) › ["types/domain.interface"](_types_domain_interface_.md)

# External module: "types/domain.interface"

## Index

### Interfaces

* [AddSubdomain](../interfaces/_types_domain_interface_.addsubdomain.md)
* [CheckDomain](../interfaces/_types_domain_interface_.checkdomain.md)
* [Directive](../interfaces/_types_domain_interface_.directive.md)
* [Domain](../interfaces/_types_domain_interface_.domain.md)
* [PhpInfo](../interfaces/_types_domain_interface_.phpinfo.md)
* [RegistrationPossibility](../interfaces/_types_domain_interface_.registrationpossibility.md)
* [SearchDirective](../interfaces/_types_domain_interface_.searchdirective.md)
* [Subdomain](../interfaces/_types_domain_interface_.subdomain.md)
* [Zone](../interfaces/_types_domain_interface_.zone.md)

### Type aliases

* [AddVirtual](_types_domain_interface_.md#addvirtual)
* [CGI](_types_domain_interface_.md#cgi)
* [PayType](_types_domain_interface_.md#paytype)
* [PhpVersion](_types_domain_interface_.md#phpversion)
* [RegistarOrderStatus](_types_domain_interface_.md#registarorderstatus)
* [RegistarStatus](_types_domain_interface_.md#registarstatus)
* [UpdatePhpVersion](_types_domain_interface_.md#updatephpversion)
* [UpdatePhpVersionResponse](_types_domain_interface_.md#updatephpversionresponse)
* [ZoneList](_types_domain_interface_.md#zonelist)

## Type aliases

###  AddVirtual

Ƭ **AddVirtual**: *Pick‹[CheckDomain](../interfaces/_types_domain_interface_.checkdomain.md), "hostname" | "zone_id"›*

*Defined in [src/types/domain.interface.ts:175](https://github.com/olehcambel/node-beget/blob/530258f/src/types/domain.interface.ts#L175)*

___

###  CGI

Ƭ **CGI**: *"disabled" | "enabled"*

*Defined in [src/types/domain.interface.ts:215](https://github.com/olehcambel/node-beget/blob/530258f/src/types/domain.interface.ts#L215)*

___

###  PayType

Ƭ **PayType**: *"money" | "bonus_domain"*

*Defined in [src/types/domain.interface.ts:158](https://github.com/olehcambel/node-beget/blob/530258f/src/types/domain.interface.ts#L158)*

___

###  PhpVersion

Ƭ **PhpVersion**: *Pick‹[PhpInfo](../interfaces/_types_domain_interface_.phpinfo.md), "full_fqdn" | "php_version" | "cgi" | "allowed_versions"›*

*Defined in [src/types/domain.interface.ts:247](https://github.com/olehcambel/node-beget/blob/530258f/src/types/domain.interface.ts#L247)*

___

###  RegistarOrderStatus

Ƭ **RegistarOrderStatus**: *"new" | "registred" | "delete"*

*Defined in [src/types/domain.interface.ts:2](https://github.com/olehcambel/node-beget/blob/530258f/src/types/domain.interface.ts#L2)*

___

###  RegistarStatus

Ƭ **RegistarStatus**: *"delegated" | "not_active" | "undelegated"*

*Defined in [src/types/domain.interface.ts:1](https://github.com/olehcambel/node-beget/blob/530258f/src/types/domain.interface.ts#L1)*

___

###  UpdatePhpVersion

Ƭ **UpdatePhpVersion**: *Pick‹[PhpInfo](../interfaces/_types_domain_interface_.phpinfo.md), "full_fqdn" | "php_version" | "is_cgi"›*

*Defined in [src/types/domain.interface.ts:252](https://github.com/olehcambel/node-beget/blob/530258f/src/types/domain.interface.ts#L252)*

___

###  UpdatePhpVersionResponse

Ƭ **UpdatePhpVersionResponse**: *Pick‹[PhpInfo](../interfaces/_types_domain_interface_.phpinfo.md), "full_fqdn" | "result" | "php_version" | "cgi"›*

*Defined in [src/types/domain.interface.ts:254](https://github.com/olehcambel/node-beget/blob/530258f/src/types/domain.interface.ts#L254)*

___

###  ZoneList

Ƭ **ZoneList**: *object*

*Defined in [src/types/domain.interface.ts:131](https://github.com/olehcambel/node-beget/blob/530258f/src/types/domain.interface.ts#L131)*

#### Type declaration:

* \[ **zoneName**: *string*\]: [Zone](../interfaces/_types_domain_interface_.zone.md)
