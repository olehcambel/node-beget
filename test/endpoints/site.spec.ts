import { BegetRequest, SiteEndpoint } from '../../src';
import { begetConfig, ID, STRING } from '../test-utils';

describe('Site endpoint', () => {
    describe('init', () => {
        it('init without errors', done => {
            const beget = new BegetRequest(begetConfig);
            new SiteEndpoint(beget);

            done();
        });

        it('call api with right args', async () => {
            const beget = new BegetRequest(begetConfig);
            const endpoint = new SiteEndpoint(beget);
            const expectedData = { ID };
            const method = 'isSiteFrozen';

            jest.spyOn(beget, 'api');
            beget.api = jest.fn();

            await endpoint['method'](method, expectedData);

            expect(beget.api).toHaveBeenCalledWith('site', method, expectedData);
        });
    });

    it('should exist getList()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new SiteEndpoint(beget);
        await endpoint.getList();

        done();
    });

    it('should exist add()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new SiteEndpoint(beget);
        await endpoint.add(STRING);

        done();
    });

    it('should exist delete()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new SiteEndpoint(beget);
        await endpoint.delete({ id: ID });

        done();
    });

    it('should exist linkDomain()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new SiteEndpoint(beget);
        await endpoint.linkDomain({ domain_id: ID, site_id: ID });

        done();
    });

    it('should exist unlinkDomain()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new SiteEndpoint(beget);
        await endpoint.unlinkDomain({ domain_id: ID });

        done();
    });

    it('should exist freeze()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new SiteEndpoint(beget);
        await endpoint.freeze({ id: ID, excludedPaths: [STRING] });

        done();
    });

    it('should exist unfreeze()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new SiteEndpoint(beget);
        await endpoint.unfreeze({ id: ID });

        done();
    });

    it('should exist isSiteFrozen()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new SiteEndpoint(beget);
        await endpoint.isSiteFrozen({ site_id: ID });

        done();
    });
});
