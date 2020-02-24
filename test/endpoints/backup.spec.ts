import { BackupEndpoint, BegetRequest } from '../../src';
import { begetConfig, STRING, ID } from '../test-utils';

describe('Backup endpoint', () => {
    it('init without errors', done => {
        const beget = new BegetRequest(begetConfig);
        new BackupEndpoint(beget);

        done();
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
        await endpoint.getFileList(undefined, STRING);

        done();
    });

    it('should exist getMysqlList()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new BackupEndpoint(beget);
        await endpoint.getMysqlList(ID);

        done();
    });

    it('should exist restoreFile()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new BackupEndpoint(beget);
        await endpoint.restoreFile(ID);

        done();
    });

    it('should exist restoreMysql()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new BackupEndpoint(beget);
        await endpoint.restoreMysql(ID, [STRING]);

        done();
    });

    it('should exist downloadFile()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new BackupEndpoint(beget);
        await endpoint.downloadFile(ID, [STRING]);

        done();
    });

    it('should exist downloadMysql()', async done => {
        const beget = new BegetRequest(begetConfig);
        beget.api = jest.fn();
        const endpoint = new BackupEndpoint(beget);
        await endpoint.downloadMysql(ID);

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
