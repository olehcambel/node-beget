[node-beget](../README.md) › [Globals](../globals.md) › ["types/controller.interface"](../modules/_types_controller_interface_.md) › [Methods](_types_controller_interface_.methods.md)

# Interface: Methods

## Hierarchy

* **Methods**

## Index

### Properties

* [backup](_types_controller_interface_.methods.md#backup)
* [cron](_types_controller_interface_.methods.md#cron)
* [dns](_types_controller_interface_.methods.md#dns)
* [domains](_types_controller_interface_.methods.md#domains)
* [dropMailbox](_types_controller_interface_.methods.md#dropmailbox)
* [ftp](_types_controller_interface_.methods.md#ftp)
* [mail](_types_controller_interface_.methods.md#mail)
* [mysql](_types_controller_interface_.methods.md#mysql)
* [sites](_types_controller_interface_.methods.md#sites)
* [stat](_types_controller_interface_.methods.md#stat)
* [user](_types_controller_interface_.methods.md#user)

## Properties

###  backup

• **backup**: *"getFileList" | "getMysqlList" | "restoreFile" | "restoreMysql" | "getFileBackupList" | "getMysqlBackupList" | "downloadFile" | "downloadMysql" | "getLog"*

*Defined in [src/types/controller.interface.ts:3](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/controller.interface.ts#L3)*

___

###  cron

• **cron**: *"getList" | "add" | "delete" | "changeHiddenState" | "getEmail" | "setEmail"*

*Defined in [src/types/controller.interface.ts:13](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/controller.interface.ts#L13)*

___

###  dns

• **dns**: *"getData" | "changeRecords"*

*Defined in [src/types/controller.interface.ts:14](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/controller.interface.ts#L14)*

___

###  domains

• **domains**: *"getList" | "getZoneList" | "addVirtual" | "delete" | "getSubdomainList" | "addSubdomainVirtual" | "deleteSubdomain" | "checkDomainToRegister" | "getPhpVersion" | "changePhpVersion" | "getDirectives" | "addDirectives" | "removeDirectives"*

*Defined in [src/types/controller.interface.ts:32](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/controller.interface.ts#L32)*

___

###  dropMailbox

• **dropMailbox**: *"changeMailboxSettings" | "forwardListAddMailbox" | "forwardListDeleteMailbox" | "forwardListShow" | "setDomainMail" | "clearDomainMail"*

*Defined in [src/types/controller.interface.ts:47](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/controller.interface.ts#L47)*

___

###  ftp

• **ftp**: *"getList" | "add" | "changePassword" | "delete"*

*Defined in [src/types/controller.interface.ts:15](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/controller.interface.ts#L15)*

___

###  mail

• **mail**: *"getMailboxList" | "changeMailboxPassword" | "createMailbox"*

*Defined in [src/types/controller.interface.ts:46](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/controller.interface.ts#L46)*

___

###  mysql

• **mysql**: *"getList" | "addDb" | "addAccess" | "dropDb" | "dropAccess" | "changeAccessPassword"*

*Defined in [src/types/controller.interface.ts:16](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/controller.interface.ts#L16)*

___

###  sites

• **sites**: *"getList" | "add" | "delete" | "linkDomain" | "unlinkDomain" | "freeze" | "unfreeze" | "isSiteFrozen"*

*Defined in [src/types/controller.interface.ts:23](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/controller.interface.ts#L23)*

___

###  stat

• **stat**: *"getSiteListLoad" | "getDbListLoad" | "getSiteLoad" | "getDbLoad"*

*Defined in [src/types/controller.interface.ts:54](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/controller.interface.ts#L54)*

___

###  user

• **user**: *"getAccountInfo" | "toggleSsh"*

*Defined in [src/types/controller.interface.ts:2](https://github.com/olehcambel/node-beget/blob/1fa682a/src/types/controller.interface.ts#L2)*
