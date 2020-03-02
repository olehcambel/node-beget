declare type ForwardMailStatus = 'forward' | 'no_forward' | 'forward_and_delete';
export interface Mailbox {
    /**
     * mailbox name (e.g. info);
     * @example 'mailbox1'
     */
    mailbox: string;
    /**
     * domain, where the mailbox is located (e.g. site.de);
     * @example 'site.de'
     */
    domain: string;
    /**
     * spam filtering level (0 - max. filtering, 100 - minimum);
     */
    spam_filter: number;
    /**
     * spam filter operation status (0/1);
     * @example 1
     */
    spam_filter_status: 1 | 0;
    /**
     * forwarding operation mode for mailbox.
     *
     * possible options:
     * - no_forward - messages will not be forwarded,
     * - forward - messages will also be forwarded to indicated mailboxes,
     * - forward_and_delete - messages will be forwarded and deleted from mailbox.
     * @example 'no_forward'
     */
    forward_mail_status: ForwardMailStatus;
    /**
     * mailbox password.
     */
    mailbox_password: string;
    /**
     * mailbox, where messages will be forwarded to.
     */
    forward_mailbox: string;
    /**
     * mailbox, which shall be set up as domain mail (e.g. mail@site.de).
     * @example 'mail@site.de'
     */
    domain_mailbox: string;
}
export declare type GetMailbox = Pick<Mailbox, 'mailbox' | 'domain' | 'spam_filter_status' | 'forward_mail_status'>;
export declare type SetMailbox = Pick<Mailbox, 'domain' | 'mailbox' | 'mailbox_password'>;
export declare type MailboxSettings = Pick<Mailbox, 'mailbox' | 'domain' | 'spam_filter_status' | 'spam_filter' | 'forward_mail_status'>;
export declare type ForwardList = Pick<Mailbox, 'domain' | 'mailbox' | 'forward_mailbox'>;
export {};
