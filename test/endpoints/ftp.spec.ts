import { FtpEndpoint, BegetRequest } from '../../src';
import { begetConfig, STRING, ID } from '../test-utils';

describe('Ftp endpoint', () => {
    describe('init', () => {
        it('init without errors', (done) => {
            const beget = new BegetRequest(begetConfig);
            new FtpEndpoint(beget);

            done();
        });

        it('call api with right args', async () => {
            const beget = new BegetRequest(begetConfig);
            const endpoint = new FtpEndpoint(beget);
            const expectedData = { ID };
            const method = 'getList';

            jest.spyOn(beget, 'api');
            beget.api = jest.fn();

            await endpoint['method'](method, expectedData);

            expect(beget.api).toHaveBeenCalledWith('ftp', method, expectedData);
        });
    });

    it('should exist getList()', async (done) => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new FtpEndpoint(beget);
        await endpoint.getList();

        done();
    });

    it('should exist add()', async (done) => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new FtpEndpoint(beget);
        await endpoint.add({ homedir: STRING, password: STRING, suffix: STRING });

        done();
    });

    it('should exist changePassword()', async (done) => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new FtpEndpoint(beget);
        await endpoint.changePassword({ password: STRING, suffix: STRING });

        done();
    });

    it('should exist delete()', async (done) => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new FtpEndpoint(beget);
        await endpoint.delete({ suffix: STRING });

        done();
    });
});
