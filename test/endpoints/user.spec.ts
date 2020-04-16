import { BegetRequest, UserEndpoint } from '../../src';
import { begetConfig, ID } from '../test-utils';

describe('User endpoint', () => {
    describe('init', () => {
        it('init without errors', (done) => {
            const beget = new BegetRequest(begetConfig);
            new UserEndpoint(beget);

            done();
        });

        it('call api with right args', async () => {
            const beget = new BegetRequest(begetConfig);
            const endpoint = new UserEndpoint(beget);
            const expectedData = { ID };
            const method = 'getAccountInfo';

            jest.spyOn(beget, 'api');
            beget.api = jest.fn();

            await endpoint['method'](method, expectedData);

            expect(beget.api).toHaveBeenCalledWith('user', method, expectedData);
        });
    });

    it('should exist getAccountInfo()', async (done) => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new UserEndpoint(beget);
        await endpoint.getAccountInfo();

        done();
    });

    it('should exist toggleSsh()', async (done) => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new UserEndpoint(beget);
        await endpoint.toggleSsh({ status: 0 });

        done();
    });
});
