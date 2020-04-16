import { BegetRequest, CronEndpoint } from '../../src';
import { begetConfig, EMAIL, ID, STRING } from '../test-utils';

describe('Cron endpoint', () => {
    describe('init', () => {
        it('init without errors', (done) => {
            const beget = new BegetRequest(begetConfig);
            new CronEndpoint(beget);

            done();
        });

        it('call api with right args', async () => {
            const beget = new BegetRequest(begetConfig);
            const endpoint = new CronEndpoint(beget);
            const expectedData = { ID };
            const method = 'add';

            jest.spyOn(beget, 'api');
            beget.api = jest.fn();

            await endpoint['method'](method, expectedData);

            expect(beget.api).toHaveBeenCalledWith('cron', method, expectedData);
        });
    });

    it('should exist getList()', async (done) => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new CronEndpoint(beget);
        await endpoint.getList();

        done();
    });

    it('should exist add()', async (done) => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new CronEndpoint(beget);
        await endpoint.add({
            command: STRING,
            days: STRING,
            hours: STRING,
            minutes: STRING,
            months: STRING,
            weekdays: STRING,
        });

        done();
    });

    it('should exist delete()', async (done) => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new CronEndpoint(beget);
        await endpoint.delete({ row_number: ID });

        done();
    });

    it('should exist changeHiddenState()', async (done) => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new CronEndpoint(beget);
        await endpoint.changeHiddenState({ row_number: ID, is_hidden: 0 });

        done();
    });

    it('should exist getEmail()', async (done) => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new CronEndpoint(beget);
        await endpoint.getEmail();

        done();
    });

    it('should exist setEmail()', async (done) => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new CronEndpoint(beget);
        await endpoint.setEmail(EMAIL);

        done();
    });
});
