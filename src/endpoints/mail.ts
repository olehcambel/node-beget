import { BegetRequest } from '../beget-request';
import { Methods } from '../types/controller.interface';
import * as Mail from '../types/mail.interface';

export class MailEndpoint {
    constructor(private readonly client: BegetRequest) {}

    /**
     * @private
     */
    private method<T>(method: Methods['mail'], data?: object): Promise<T> {
        return this.client.api('mail', method, data);
    }

    /**
     * Method returns all mailboxes on given domain.
     */
    getMailboxList(params: Pick<Mail.Mailbox, 'domain'>): Promise<Mail.GetMailbox[]> {
        return this.method('getMailboxList', params);
    }

    /**
     * Method changes password to given mailbox.
     * @returns Returns property of successful or unsuccessful execution.
     */
    changeMailboxPassword(params: Mail.SetMailbox): Promise<boolean> {
        return this.method('changeMailboxPassword', params);
    }

    /**
     * Method creates mailbox on given domain.
     * @returns Returns property of successful or unsuccessful execution.
     */
    createMailbox(params: Mail.SetMailbox): Promise<boolean> {
        return this.method('createMailbox', params);
    }

    /**
     * Method deletes mailbox on given domain.
     * @returns Returns property of successful or unsuccessful execution.
     */
    dropMailbox(params: Pick<Mail.Mailbox, 'domain' | 'mailbox'>): Promise<boolean> {
        return this.method('dropMailbox', params);
    }

    /**
     * Method sets options for mailbox.
     * @returns Returns property of successful or unsuccessful execution.
     */
    changeMailboxSettings(params: Mail.MailboxSettings): Promise<boolean> {
        return this.method('changeMailboxSettings', params);
    }

    /**
     * Method will add mailbox to list of mailboxes for forwarding.
     * @returns Returns property of successful or unsuccessful execution.
     */
    forwardListAddMailbox(params: Mail.ForwardList): Promise<boolean> {
        return this.method('forwardListAddMailbox', params);
    }

    /**
     * Method deletes mailbox from list of mailboxes for forwarding.
     * @returns Returns property of successful or unsuccessful execution.
     *
     */
    forwardListDeleteMailbox(params: Mail.ForwardList): Promise<boolean> {
        return this.method('forwardListDeleteMailbox', params);
    }

    /**
     * Method returns forwarding list for indicated mailbox.
     */
    forwardListShow(
        params: Pick<Mail.Mailbox, 'domain' | 'mailbox'>
    ): Promise<Pick<Mail.Mailbox, 'forward_mailbox'>[]> {
        return this.method('forwardListShow', params);
    }

    /**
     * Method sets up domain mail.
     * @returns Returns property of successful or unsuccessful execution.
     */
    setDomainMail(params: Pick<Mail.Mailbox, 'domain' | 'domain_mailbox'>): Promise<boolean> {
        return this.method('setDomainMail', params);
    }

    /**
     * Method resets domain mail.
     * @returns Returns property of successful or unsuccessful execution.
     */
    clearDomainMail(params: Pick<Mail.Mailbox, 'domain'>): Promise<boolean> {
        return this.method('clearDomainMail', params);
    }
}
