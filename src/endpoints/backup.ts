import { BegetRequest } from '../beget-request';
import { FileBackup, FileInfo, LogTask, Mysql } from '../types/backup.interface';
import { Methods } from '../types/controller.interface';

export class BackupEndpoint {
    constructor(private readonly client: BegetRequest) {}

    /**
     * @private
     */
    private method<T>(method: Methods['backup'], data?: object): Promise<T> {
        return this.client.api('backup', method, data);
    }

    /**
     * Method returns available list of file backups.
     */
    getFileBackupList(): Promise<FileBackup[]> {
        return this.method('getFileBackupList');
    }

    /**
     * Method returns available list of mysql database backups
     */
    getMysqlBackupList(): Promise<FileBackup[]> {
        return this.method('getMysqlBackupList');
    }

    /**
     * Method returns a list of files and directories from a backup according to
     * the given path and identifier.
     */
    getFileList(params?: Pick<Mysql, 'backup_id' | 'path'>): Promise<FileInfo[]> {
        return this.method('getFileList', params);
    }

    /**
     * Method returns a list of databases from backup respective given identifier.
     * @returns Returns list of database names.
     */
    getMysqlList(params?: Pick<Mysql, 'backup_id'>): Promise<string[]> {
        return this.method('getMysqlList', params);
    }

    /**
     * Method creates query for data restoring from backup according to given path
     * and backup copy.
     * @returns Returns property of successful or unsuccessful execution.
     */
    restoreFile(params?: Pick<Mysql, 'backup_id' | 'paths'>): Promise<boolean> {
        return this.method('restoreFile', params);
    }

    /**
     * Method creates query for DB recovery from backup according to
     * given DB name and backup identifier.
     * @returns Returns property of successful or unsuccessful execution.
     */
    restoreMysql(params?: Pick<Mysql, 'backup_id' | 'bases'>): Promise<boolean> {
        return this.method('restoreMysql', params);
    }

    /**
     * Method creates query for up- and downloading data from backup to account root.
     * @returns Returns property of successful or unsuccessful execution.
     */
    downloadFile(params?: Pick<Mysql, 'backup_id' | 'paths'>): Promise<boolean> {
        return this.method('downloadFile', params);
    }

    /**
     * Method creates query for up- and downloading of data from backup to account root.
     */
    downloadMysql(params?: Pick<Mysql, 'backup_id' | 'bases'>): Promise<boolean> {
        return this.method('downloadMysql', params);
    }

    /**
     * Method returns list and statuses of tasks for recovery and downloading.
     */
    getLog(): Promise<LogTask[]> {
        return this.method('getLog');
    }
}
