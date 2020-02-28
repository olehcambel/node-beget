[node-beget](../README.md) › [Globals](../globals.md) › ["types/mail.interface"](../modules/_types_mail_interface_.md) › [Mailbox](_types_mail_interface_.mailbox.md)

# Interface: Mailbox

## Hierarchy

* **Mailbox**

## Index

### Properties

* [domain](_types_mail_interface_.mailbox.md#domain)
* [domain_mailbox](_types_mail_interface_.mailbox.md#domain_mailbox)
* [forward_mail_status](_types_mail_interface_.mailbox.md#forward_mail_status)
* [forward_mailbox](_types_mail_interface_.mailbox.md#forward_mailbox)
* [mailbox](_types_mail_interface_.mailbox.md#mailbox)
* [mailbox_password](_types_mail_interface_.mailbox.md#mailbox_password)
* [spam_filter](_types_mail_interface_.mailbox.md#spam_filter)
* [spam_filter_status](_types_mail_interface_.mailbox.md#spam_filter_status)

## Properties

###  domain

• **domain**: *string*

Defined in src/types/mail.interface.ts:13

domain, where the mailbox is located (e.g. site.de);

**`example`** 'site.de'

___

###  domain_mailbox

• **domain_mailbox**: *string*

Defined in src/types/mail.interface.ts:45

mailbox, which shall be set up as domain mail (e.g. mail@site.de).

**`example`** 'mail@site.de'

___

###  forward_mail_status

• **forward_mail_status**: *[ForwardMailStatus](../modules/_types_mail_interface_.md#forwardmailstatus)*

Defined in src/types/mail.interface.ts:32

forwarding operation mode for mailbox.

possible options:
- no_forward - messages will not be forwarded,
- forward - messages will also be forwarded to indicated mailboxes,
- forward_and_delete - messages will be forwarded and deleted from mailbox.

**`example`** 'no_forward'

___

###  forward_mailbox

• **forward_mailbox**: *string*

Defined in src/types/mail.interface.ts:40

mailbox, where messages will be forwarded to.

___

###  mailbox

• **mailbox**: *string*

Defined in src/types/mail.interface.ts:8

mailbox name (e.g. info);

**`example`** 'mailbox1'

___

###  mailbox_password

• **mailbox_password**: *string*

Defined in src/types/mail.interface.ts:36

mailbox password.

___

###  spam_filter

• **spam_filter**: *number*

Defined in src/types/mail.interface.ts:17

spam filtering level (0 - max. filtering, 100 - minimum);

___

###  spam_filter_status

• **spam_filter_status**: *1 | 0*

Defined in src/types/mail.interface.ts:22

spam filter operation status (0/1);

**`example`** 1
