[node-beget](../README.md) › [Globals](../globals.md) › ["types/user.interface"](../modules/_types_user_interface_.md) › [SshSettings](_types_user_interface_.sshsettings.md)

# Interface: SshSettings

## Hierarchy

* **SshSettings**

## Index

### Properties

* [ftplogin](_types_user_interface_.sshsettings.md#optional-ftplogin)
* [status](_types_user_interface_.sshsettings.md#status)

## Properties

### `Optional` ftplogin

• **ftplogin**? : *string*

*Defined in [src/types/user.interface.ts:168](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/user.interface.ts#L168)*

ftp account login, if passed enables/disables SSH access * to ftp account;
if not passed, enables/disables SSH access to main user account;

___

###  status

• **status**: *0 | 1*

*Defined in [src/types/user.interface.ts:163](https://github.com/olehcambel/node-beget/blob/9994d31/src/types/user.interface.ts#L163)*

1 - enable, 0 - disable
