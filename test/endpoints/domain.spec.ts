import { BegetRequest, DomainEndpoint } from '../../src';
import { begetConfig, BOOLEAN, ID, STRING } from '../test-utils';

describe('Domain endpoint', () => {
    describe('init', () => {
        it('init without errors', done => {
            const beget = new BegetRequest(begetConfig);
            new DomainEndpoint(beget);

            done();
        });

        it('call api with right args', async () => {
            const beget = new BegetRequest(begetConfig);
            const endpoint = new DomainEndpoint(beget);
            const expectedData = { ID };
            const method = 'addDirectives';

            jest.spyOn(beget, 'api');
            beget.api = jest.fn();

            await endpoint['method'](method, expectedData);

            expect(beget.api).toHaveBeenCalledWith('domain', method, expectedData);
        });
    });

    it('should exist getList()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new DomainEndpoint(beget);
        await endpoint.getList();

        done();
    });

    it('should exist getZoneList()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new DomainEndpoint(beget);
        await endpoint.getZoneList();

        done();
    });

    it('should exist addVirtual()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new DomainEndpoint(beget);
        await endpoint.addVirtual({ hostname: STRING, zone_id: ID });

        done();
    });

    it('should exist delete()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new DomainEndpoint(beget);
        await endpoint.delete({ id: ID });

        done();
    });

    it('should exist getSubdomainList()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new DomainEndpoint(beget);
        await endpoint.getSubdomainList();

        done();
    });

    it('should exist addSubdomainVirtual()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new DomainEndpoint(beget);
        await endpoint.addSubdomainVirtual({ domain_id: ID, subdomain: STRING });

        done();
    });

    it('should exist deleteSubdomain()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new DomainEndpoint(beget);
        await endpoint.deleteSubdomain({ id: ID });

        done();
    });

    it('should exist checkDomainToRegister()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new DomainEndpoint(beget);
        await endpoint.checkDomainToRegister({ hostname: STRING, period: ID, zone_id: ID });

        done();
    });

    it('should exist getPhpVersion()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new DomainEndpoint(beget);
        await endpoint.getPhpVersion();

        done();
    });

    it('should exist changePhpVersion()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new DomainEndpoint(beget);
        await endpoint.changePhpVersion({
            full_fqdn: STRING,
            is_cgi: BOOLEAN,
            php_version: STRING,
        });

        done();
    });

    it('should exist getDirectives()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new DomainEndpoint(beget);
        await endpoint.getDirectives({ full_fqdn: STRING });

        done();
    });

    it('should exist addDirectives()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new DomainEndpoint(beget);
        await endpoint.addDirectives({
            directives_list: [{ name: STRING, value: STRING }],
            full_fqdn: STRING,
        });

        done();
    });

    it('should exist removeDirectives()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new DomainEndpoint(beget);
        await endpoint.removeDirectives({
            directives_list: [{ name: STRING, value: STRING }],
            full_fqdn: STRING,
        });

        done();
    });
});
