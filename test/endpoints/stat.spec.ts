import { BegetRequest, StatEndpoint } from '../../src';
import { begetConfig, ID, STRING } from '../test-utils';

describe('Stat endpoint', () => {
    describe('init', () => {
        it('init without errors', (done) => {
            const beget = new BegetRequest(begetConfig);
            new StatEndpoint(beget);

            done();
        });

        it('call api with right args', async () => {
            const beget = new BegetRequest(begetConfig);
            const endpoint = new StatEndpoint(beget);
            const expectedData = { ID };
            const method = 'getSiteListLoad';

            jest.spyOn(beget, 'api');
            beget.api = jest.fn();

            await endpoint['method'](method, expectedData);

            expect(beget.api).toHaveBeenCalledWith('stat', method, expectedData);
        });
    });

    it('should exist getSiteListLoad()', async (done) => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new StatEndpoint(beget);
        await endpoint.getSiteListLoad();

        done();
    });

    it('should exist getDbListLoad()', async (done) => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new StatEndpoint(beget);
        await endpoint.getDbListLoad();

        done();
    });

    it('should exist getSiteLoad()', async (done) => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new StatEndpoint(beget);
        await endpoint.getSiteLoad({ site_id: ID });

        done();
    });

    it('should exist getDbLoad()', async (done) => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new StatEndpoint(beget);
        await endpoint.getDbLoad(STRING);

        done();
    });
});
