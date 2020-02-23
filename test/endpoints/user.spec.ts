import { UserEndpoint, BegetRequest } from '../../src';
import { begetConfig } from '../test-utils';

describe('Report endpoint', () => {
    it('init without errors', done => {
        const beget = new BegetRequest(begetConfig);
        new UserEndpoint(beget);

        done();
    });

    it('should exist getAccountInfo()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new UserEndpoint(beget);
        await endpoint.getAccountInfo();

        done();
    });

    it('should exist toggleSsh()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new UserEndpoint(beget);
        await endpoint.toggleSsh(1);

        done();
    });
});
