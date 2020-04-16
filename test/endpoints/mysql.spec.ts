import { MysqlEndpoint, BegetRequest } from '../../src';
import { begetConfig, STRING, ID } from '../test-utils';

describe('Dns endpoint', () => {
    describe('init', () => {
        it('init without errors', (done) => {
            const beget = new BegetRequest(begetConfig);
            new MysqlEndpoint(beget);

            done();
        });

        it('call api with right args', async () => {
            const beget = new BegetRequest(begetConfig);
            const endpoint = new MysqlEndpoint(beget);
            const expectedData = { ID };
            const method = 'getList';

            jest.spyOn(beget, 'api');
            beget.api = jest.fn();

            await endpoint['method'](method, expectedData);

            expect(beget.api).toHaveBeenCalledWith('mysql', method, expectedData);
        });
    });

    it('should exist getList()', async (done) => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new MysqlEndpoint(beget);
        await endpoint.getList();

        done();
    });

    it('should exist addDb()', async (done) => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new MysqlEndpoint(beget);
        await endpoint.addDb({ password: STRING, suffix: STRING });

        done();
    });

    it('should exist addAccess()', async (done) => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new MysqlEndpoint(beget);
        await endpoint.addAccess({ access: STRING, password: STRING, suffix: STRING });

        done();
    });

    it('should exist dropDb()', async (done) => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new MysqlEndpoint(beget);
        await endpoint.dropDb({ suffix: STRING });

        done();
    });

    it('should exist dropAccess()', async (done) => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new MysqlEndpoint(beget);
        await endpoint.dropAccess({ suffix: STRING, access: STRING });

        done();
    });

    it('should exist changeAccessPassword()', async (done) => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new MysqlEndpoint(beget);
        await endpoint.changeAccessPassword({
            access: STRING,
            password: STRING,
            suffix: STRING,
        });

        done();
    });
});
