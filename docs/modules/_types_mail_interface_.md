[node-beget](../README.md) › [Globals](../globals.md) › ["types/mail.interface"](_types_mail_interface_.md)

# External module: "types/mail.interface"

## Index

### Interfaces

* [Mailbox](../interfaces/_types_mail_interface_.mailbox.md)

### Type aliases

* [ForwardList](_types_mail_interface_.md#forwardlist)
* [ForwardMailStatus](_types_mail_interface_.md#forwardmailstatus)
* [GetMailbox](_types_mail_interface_.md#getmailbox)
* [MailboxSettings](_types_mail_interface_.md#mailboxsettings)
* [SetMailbox](_types_mail_interface_.md#setmailbox)

## Type aliases

###  ForwardList

Ƭ **ForwardList**: *Pick‹[Mailbox](../interfaces/_types_mail_interface_.mailbox.md), "domain" | "mailbox" | "forward_mailbox"›*

Defined in src/types/mail.interface.ts:60

___

###  ForwardMailStatus

Ƭ **ForwardMailStatus**: *"forward" | "no_forward" | "forward_and_delete"*

Defined in src/types/mail.interface.ts:1

___

###  GetMailbox

Ƭ **GetMailbox**: *Pick‹[Mailbox](../interfaces/_types_mail_interface_.mailbox.md), "mailbox" | "domain" | "spam_filter_status" | "forward_mail_status"›*

Defined in src/types/mail.interface.ts:48

___

###  MailboxSettings

Ƭ **MailboxSettings**: *Pick‹[Mailbox](../interfaces/_types_mail_interface_.mailbox.md), "mailbox" | "domain" | "spam_filter_status" | "spam_filter" | "forward_mail_status"›*

Defined in src/types/mail.interface.ts:55

___

###  SetMailbox

Ƭ **SetMailbox**: *Pick‹[Mailbox](../interfaces/_types_mail_interface_.mailbox.md), "domain" | "mailbox" | "mailbox_password"›*

Defined in src/types/mail.interface.ts:53
