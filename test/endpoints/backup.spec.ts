import { BackupEndpoint, BegetRequest } from '../../src';
import { begetConfig, ID, STRING } from '../test-utils';

describe('Backup endpoint', () => {
    describe('init', () => {
        it('init without errors', done => {
            const beget = new BegetRequest(begetConfig);
            new BackupEndpoint(beget);

            done();
        });

        it('call api with right args', async () => {
            const beget = new BegetRequest(begetConfig);
            const endpoint = new BackupEndpoint(beget);
            const expectedData = { ID };
            const method = 'downloadFile';

            jest.spyOn(beget, 'api');
            beget.api = jest.fn();

            await endpoint['method'](method, expectedData);

            expect(beget.api).toHaveBeenCalledWith('backup', method, expectedData);
        });
    });

    it('should exist getFileBackupList()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new BackupEndpoint(beget);
        await endpoint.getFileBackupList();

        done();
    });

    it('should exist getMysqlBackupList()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new BackupEndpoint(beget);
        await endpoint.getMysqlBackupList();

        done();
    });

    it('should exist getFileList()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new BackupEndpoint(beget);
        await endpoint.getFileList({ backup_id: ID });

        done();
    });

    it('should exist getMysqlList()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new BackupEndpoint(beget);
        await endpoint.getMysqlList({ backup_id: ID });

        done();
    });

    it('should exist restoreFile()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new BackupEndpoint(beget);
        await endpoint.restoreFile({ paths: [STRING] });

        done();
    });

    it('should exist restoreMysql()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new BackupEndpoint(beget);
        await endpoint.restoreMysql({ bases: [STRING] });

        done();
    });

    it('should exist downloadFile()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new BackupEndpoint(beget);
        await endpoint.downloadFile({ paths: [STRING] });

        done();
    });

    it('should exist downloadMysql()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new BackupEndpoint(beget);
        await endpoint.downloadMysql({ bases: [STRING] });

        done();
    });

    it('should exist getLog()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new BackupEndpoint(beget);
        await endpoint.getLog();

        done();
    });
});
