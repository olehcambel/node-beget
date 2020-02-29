[node-beget](../README.md) › [Globals](../globals.md) › ["endpoints/mail"](../modules/_endpoints_mail_.md) › [MailEndpoint](_endpoints_mail_.mailendpoint.md)

# Class: MailEndpoint

## Hierarchy

* **MailEndpoint**

## Index

### Constructors

* [constructor](_endpoints_mail_.mailendpoint.md#constructor)

### Properties

* [client](_endpoints_mail_.mailendpoint.md#private-client)

### Methods

* [changeMailboxPassword](_endpoints_mail_.mailendpoint.md#changemailboxpassword)
* [changeMailboxSettings](_endpoints_mail_.mailendpoint.md#changemailboxsettings)
* [clearDomainMail](_endpoints_mail_.mailendpoint.md#cleardomainmail)
* [createMailbox](_endpoints_mail_.mailendpoint.md#createmailbox)
* [dropMailbox](_endpoints_mail_.mailendpoint.md#dropmailbox)
* [forwardListAddMailbox](_endpoints_mail_.mailendpoint.md#forwardlistaddmailbox)
* [forwardListDeleteMailbox](_endpoints_mail_.mailendpoint.md#forwardlistdeletemailbox)
* [forwardListShow](_endpoints_mail_.mailendpoint.md#forwardlistshow)
* [getMailboxList](_endpoints_mail_.mailendpoint.md#getmailboxlist)
* [method](_endpoints_mail_.mailendpoint.md#private-method)
* [setDomainMail](_endpoints_mail_.mailendpoint.md#setdomainmail)

## Constructors

###  constructor

\+ **new MailEndpoint**(`client`: [BegetRequest](_beget_request_.begetrequest.md)): *[MailEndpoint](_endpoints_mail_.mailendpoint.md)*

*Defined in [src/endpoints/mail.ts:5](https://github.com/olehcambel/node-beget/blob/9994d31/src/endpoints/mail.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [BegetRequest](_beget_request_.begetrequest.md) |

**Returns:** *[MailEndpoint](_endpoints_mail_.mailendpoint.md)*

## Properties

### `Private` client

• **client**: *[BegetRequest](_beget_request_.begetrequest.md)*

*Defined in [src/endpoints/mail.ts:6](https://github.com/olehcambel/node-beget/blob/9994d31/src/endpoints/mail.ts#L6)*

## Methods

###  changeMailboxPassword

▸ **changeMailboxPassword**(`params`: Mail.SetMailbox): *Promise‹boolean›*

*Defined in [src/endpoints/mail.ts:26](https://github.com/olehcambel/node-beget/blob/9994d31/src/endpoints/mail.ts#L26)*

Method changes password to given mailbox.

**Parameters:**

Name | Type |
------ | ------ |
`params` | Mail.SetMailbox |

**Returns:** *Promise‹boolean›*

Returns property of successful or unsuccessful execution.

___

###  changeMailboxSettings

▸ **changeMailboxSettings**(`params`: Mail.MailboxSettings): *Promise‹boolean›*

*Defined in [src/endpoints/mail.ts:50](https://github.com/olehcambel/node-beget/blob/9994d31/src/endpoints/mail.ts#L50)*

Method sets options for mailbox.

**Parameters:**

Name | Type |
------ | ------ |
`params` | Mail.MailboxSettings |

**Returns:** *Promise‹boolean›*

Returns property of successful or unsuccessful execution.

___

###  clearDomainMail

▸ **clearDomainMail**(`params`: Pick‹[Mailbox](../interfaces/_types_mail_interface_.mailbox.md), "domain"›): *Promise‹boolean›*

*Defined in [src/endpoints/mail.ts:92](https://github.com/olehcambel/node-beget/blob/9994d31/src/endpoints/mail.ts#L92)*

Method resets domain mail.

**Parameters:**

Name | Type |
------ | ------ |
`params` | Pick‹[Mailbox](../interfaces/_types_mail_interface_.mailbox.md), "domain"› |

**Returns:** *Promise‹boolean›*

Returns property of successful or unsuccessful execution.

___

###  createMailbox

▸ **createMailbox**(`params`: Mail.SetMailbox): *Promise‹boolean›*

*Defined in [src/endpoints/mail.ts:34](https://github.com/olehcambel/node-beget/blob/9994d31/src/endpoints/mail.ts#L34)*

Method creates mailbox on given domain.

**Parameters:**

Name | Type |
------ | ------ |
`params` | Mail.SetMailbox |

**Returns:** *Promise‹boolean›*

Returns property of successful or unsuccessful execution.

___

###  dropMailbox

▸ **dropMailbox**(`params`: Pick‹[Mailbox](../interfaces/_types_mail_interface_.mailbox.md), "domain" | "mailbox"›): *Promise‹boolean›*

*Defined in [src/endpoints/mail.ts:42](https://github.com/olehcambel/node-beget/blob/9994d31/src/endpoints/mail.ts#L42)*

Method deletes mailbox on given domain.

**Parameters:**

Name | Type |
------ | ------ |
`params` | Pick‹[Mailbox](../interfaces/_types_mail_interface_.mailbox.md), "domain" &#124; "mailbox"› |

**Returns:** *Promise‹boolean›*

Returns property of successful or unsuccessful execution.

___

###  forwardListAddMailbox

▸ **forwardListAddMailbox**(`params`: Mail.ForwardList): *Promise‹boolean›*

*Defined in [src/endpoints/mail.ts:58](https://github.com/olehcambel/node-beget/blob/9994d31/src/endpoints/mail.ts#L58)*

Method will add mailbox to list of mailboxes for forwarding.

**Parameters:**

Name | Type |
------ | ------ |
`params` | Mail.ForwardList |

**Returns:** *Promise‹boolean›*

Returns property of successful or unsuccessful execution.

___

###  forwardListDeleteMailbox

▸ **forwardListDeleteMailbox**(`params`: Mail.ForwardList): *Promise‹boolean›*

*Defined in [src/endpoints/mail.ts:67](https://github.com/olehcambel/node-beget/blob/9994d31/src/endpoints/mail.ts#L67)*

Method deletes mailbox from list of mailboxes for forwarding.

**Parameters:**

Name | Type |
------ | ------ |
`params` | Mail.ForwardList |

**Returns:** *Promise‹boolean›*

Returns property of successful or unsuccessful execution.

___

###  forwardListShow

▸ **forwardListShow**(`params`: Pick‹[Mailbox](../interfaces/_types_mail_interface_.mailbox.md), "domain" | "mailbox"›): *Promise‹Pick‹[Mailbox](../interfaces/_types_mail_interface_.mailbox.md), "forward_mailbox"›[]›*

*Defined in [src/endpoints/mail.ts:74](https://github.com/olehcambel/node-beget/blob/9994d31/src/endpoints/mail.ts#L74)*

Method returns forwarding list for indicated mailbox.

**Parameters:**

Name | Type |
------ | ------ |
`params` | Pick‹[Mailbox](../interfaces/_types_mail_interface_.mailbox.md), "domain" &#124; "mailbox"› |

**Returns:** *Promise‹Pick‹[Mailbox](../interfaces/_types_mail_interface_.mailbox.md), "forward_mailbox"›[]›*

___

###  getMailboxList

▸ **getMailboxList**(`params`: Pick‹[Mailbox](../interfaces/_types_mail_interface_.mailbox.md), "domain"›): *Promise‹Mail.GetMailbox[]›*

*Defined in [src/endpoints/mail.ts:18](https://github.com/olehcambel/node-beget/blob/9994d31/src/endpoints/mail.ts#L18)*

Method returns all mailboxes on given domain.

**Parameters:**

Name | Type |
------ | ------ |
`params` | Pick‹[Mailbox](../interfaces/_types_mail_interface_.mailbox.md), "domain"› |

**Returns:** *Promise‹Mail.GetMailbox[]›*

___

### `Private` method

▸ **method**<**T**>(`method`: Methods["mail"], `data?`: object): *Promise‹T›*

*Defined in [src/endpoints/mail.ts:11](https://github.com/olehcambel/node-beget/blob/9994d31/src/endpoints/mail.ts#L11)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`method` | Methods["mail"] |
`data?` | object |

**Returns:** *Promise‹T›*

___

###  setDomainMail

▸ **setDomainMail**(`params`: Pick‹[Mailbox](../interfaces/_types_mail_interface_.mailbox.md), "domain" | "domain_mailbox"›): *Promise‹boolean›*

*Defined in [src/endpoints/mail.ts:84](https://github.com/olehcambel/node-beget/blob/9994d31/src/endpoints/mail.ts#L84)*

Method sets up domain mail.

**Parameters:**

Name | Type |
------ | ------ |
`params` | Pick‹[Mailbox](../interfaces/_types_mail_interface_.mailbox.md), "domain" &#124; "domain_mailbox"› |

**Returns:** *Promise‹boolean›*

Returns property of successful or unsuccessful execution.
