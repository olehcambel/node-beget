import { DnsEndpoint, BegetRequest } from '../../src';
import { begetConfig, STRING, ID } from '../test-utils';

describe('Dns endpoint', () => {
    describe('init', () => {
        it('init without errors', (done) => {
            const beget = new BegetRequest(begetConfig);
            new DnsEndpoint(beget);

            done();
        });

        it('call api with right args', async () => {
            const beget = new BegetRequest(begetConfig);
            const endpoint = new DnsEndpoint(beget);
            const expectedData = { ID };
            const method = 'changeRecords';

            jest.spyOn(beget, 'api');
            beget.api = jest.fn();

            await endpoint['method'](method, expectedData);

            expect(beget.api).toHaveBeenCalledWith('dns', method, expectedData);
        });
    });

    it('should exist getData()', async (done) => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new DnsEndpoint(beget);
        await endpoint.getData({ fqdn: STRING });

        done();
    });

    it('should exist changeRecords()', async (done) => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new DnsEndpoint(beget);
        await endpoint.changeRecords({
            fqdn: STRING,
            records: { CNAME: [{ priority: 0, value: 'ns1.domain.de' }] },
        });

        done();
    });
});
