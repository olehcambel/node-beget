import { DnsEndpoint, BegetRequest } from '../../src';
import { begetConfig, STRING } from '../test-utils';

describe('Dns endpoint', () => {
    it('init without errors', done => {
        const beget = new BegetRequest(begetConfig);
        new DnsEndpoint(beget);

        done();
    });

    it('should exist getAccountInfo()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new DnsEndpoint(beget);
        await endpoint.getData(STRING);

        done();
    });

    it('should exist toggleSsh()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new DnsEndpoint(beget);
        await endpoint.changeRecords(STRING, {
            CNAME: [{ priority: 0, value: 'ns1.domain.de' }],
        });

        done();
    });
});
