import { BegetRequest, MailEndpoint } from '../../src';
import { begetConfig, ID, STRING } from '../test-utils';

describe('Mail endpoint', () => {
    describe('init', () => {
        it('init without errors', done => {
            const beget = new BegetRequest(begetConfig);
            new MailEndpoint(beget);

            done();
        });

        it('call api with right args', async () => {
            const beget = new BegetRequest(begetConfig);
            const endpoint = new MailEndpoint(beget);
            const expectedData = { ID };
            const method = 'dropMailbox';

            jest.spyOn(beget, 'api');
            beget.api = jest.fn();

            await endpoint['method'](method, expectedData);

            expect(beget.api).toHaveBeenCalledWith('mail', method, expectedData);
        });
    });

    it('should exist getMailboxList()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new MailEndpoint(beget);
        await endpoint.getMailboxList({ domain: STRING });

        done();
    });

    it('should exist changeMailboxPassword()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new MailEndpoint(beget);
        await endpoint.changeMailboxPassword({
            domain: STRING,
            mailbox: STRING,
            mailbox_password: STRING,
        });

        done();
    });

    it('should exist createMailbox()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new MailEndpoint(beget);
        await endpoint.createMailbox({
            domain: STRING,
            mailbox: STRING,
            mailbox_password: STRING,
        });

        done();
    });

    it('should exist dropMailbox()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new MailEndpoint(beget);
        await endpoint.dropMailbox({ domain: STRING, mailbox: STRING });

        done();
    });

    it('should exist changeMailboxSettings()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new MailEndpoint(beget);
        await endpoint.changeMailboxSettings({
            domain: STRING,
            forward_mail_status: 'forward_and_delete',
            mailbox: STRING,
            spam_filter: ID,
            spam_filter_status: 1,
        });

        done();
    });

    it('should exist forwardListAddMailbox()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new MailEndpoint(beget);
        await endpoint.forwardListAddMailbox({
            domain: STRING,
            forward_mailbox: STRING,
            mailbox: STRING,
        });

        done();
    });

    it('should exist forwardListDeleteMailbox()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new MailEndpoint(beget);
        await endpoint.forwardListDeleteMailbox({
            domain: STRING,
            forward_mailbox: STRING,
            mailbox: STRING,
        });

        done();
    });

    it('should exist forwardListShow()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new MailEndpoint(beget);
        await endpoint.forwardListShow({ domain: STRING, mailbox: STRING });

        done();
    });

    it('should exist setDomainMail()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new MailEndpoint(beget);
        await endpoint.setDomainMail({ domain: STRING, domain_mailbox: STRING });

        done();
    });

    it('should exist clearDomainMail()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new MailEndpoint(beget);
        await endpoint.clearDomainMail({ domain: STRING });

        done();
    });
});
