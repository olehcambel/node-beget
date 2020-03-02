import { BegetRequest } from '../beget-request';
import * as Mail from '../types/mail.interface';
export declare class MailEndpoint {
    private readonly client;
    constructor(client: BegetRequest);
    /**
     * @private
     */
    private method;
    /**
     * Method returns all mailboxes on given domain.
     */
    getMailboxList(params: Pick<Mail.Mailbox, 'domain'>): Promise<Mail.GetMailbox[]>;
    /**
     * Method changes password to given mailbox.
     * @returns Returns property of successful or unsuccessful execution.
     */
    changeMailboxPassword(params: Mail.SetMailbox): Promise<boolean>;
    /**
     * Method creates mailbox on given domain.
     * @returns Returns property of successful or unsuccessful execution.
     */
    createMailbox(params: Mail.SetMailbox): Promise<boolean>;
    /**
     * Method deletes mailbox on given domain.
     * @returns Returns property of successful or unsuccessful execution.
     */
    dropMailbox(params: Pick<Mail.Mailbox, 'domain' | 'mailbox'>): Promise<boolean>;
    /**
     * Method sets options for mailbox.
     * @returns Returns property of successful or unsuccessful execution.
     */
    changeMailboxSettings(params: Mail.MailboxSettings): Promise<boolean>;
    /**
     * Method will add mailbox to list of mailboxes for forwarding.
     * @returns Returns property of successful or unsuccessful execution.
     */
    forwardListAddMailbox(params: Mail.ForwardList): Promise<boolean>;
    /**
     * Method deletes mailbox from list of mailboxes for forwarding.
     * @returns Returns property of successful or unsuccessful execution.
     *
     */
    forwardListDeleteMailbox(params: Mail.ForwardList): Promise<boolean>;
    /**
     * Method returns forwarding list for indicated mailbox.
     */
    forwardListShow(params: Pick<Mail.Mailbox, 'domain' | 'mailbox'>): Promise<Pick<Mail.Mailbox, 'forward_mailbox'>[]>;
    /**
     * Method sets up domain mail.
     * @returns Returns property of successful or unsuccessful execution.
     */
    setDomainMail(params: Pick<Mail.Mailbox, 'domain' | 'domain_mailbox'>): Promise<boolean>;
    /**
     * Method resets domain mail.
     * @returns Returns property of successful or unsuccessful execution.
     */
    clearDomainMail(params: Pick<Mail.Mailbox, 'domain'>): Promise<boolean>;
}
