"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MailEndpoint {
    constructor(client) {
        this.client = client;
    }
    /**
     * @private
     */
    method(method, data) {
        return this.client.api('mail', method, data);
    }
    /**
     * Method returns all mailboxes on given domain.
     */
    getMailboxList(params) {
        return this.method('getMailboxList', params);
    }
    /**
     * Method changes password to given mailbox.
     * @returns Returns property of successful or unsuccessful execution.
     */
    changeMailboxPassword(params) {
        return this.method('changeMailboxPassword', params);
    }
    /**
     * Method creates mailbox on given domain.
     * @returns Returns property of successful or unsuccessful execution.
     */
    createMailbox(params) {
        return this.method('createMailbox', params);
    }
    /**
     * Method deletes mailbox on given domain.
     * @returns Returns property of successful or unsuccessful execution.
     */
    dropMailbox(params) {
        return this.method('dropMailbox', params);
    }
    /**
     * Method sets options for mailbox.
     * @returns Returns property of successful or unsuccessful execution.
     */
    changeMailboxSettings(params) {
        return this.method('changeMailboxSettings', params);
    }
    /**
     * Method will add mailbox to list of mailboxes for forwarding.
     * @returns Returns property of successful or unsuccessful execution.
     */
    forwardListAddMailbox(params) {
        return this.method('forwardListAddMailbox', params);
    }
    /**
     * Method deletes mailbox from list of mailboxes for forwarding.
     * @returns Returns property of successful or unsuccessful execution.
     *
     */
    forwardListDeleteMailbox(params) {
        return this.method('forwardListDeleteMailbox', params);
    }
    /**
     * Method returns forwarding list for indicated mailbox.
     */
    forwardListShow(params) {
        return this.method('forwardListShow', params);
    }
    /**
     * Method sets up domain mail.
     * @returns Returns property of successful or unsuccessful execution.
     */
    setDomainMail(params) {
        return this.method('setDomainMail', params);
    }
    /**
     * Method resets domain mail.
     * @returns Returns property of successful or unsuccessful execution.
     */
    clearDomainMail(params) {
        return this.method('clearDomainMail', params);
    }
}
exports.MailEndpoint = MailEndpoint;
