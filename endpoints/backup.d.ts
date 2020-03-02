import { BegetRequest } from '../beget-request';
import { FileBackup, FileInfo, LogTask, Mysql } from '../types/backup.interface';
export declare class BackupEndpoint {
    private readonly client;
    constructor(client: BegetRequest);
    /**
     * @private
     */
    private method;
    /**
     * Method returns available list of file backups.
     */
    getFileBackupList(): Promise<FileBackup[]>;
    /**
     * Method returns available list of mysql database backups
     */
    getMysqlBackupList(): Promise<FileBackup[]>;
    /**
     * Method returns a list of files and directories from a backup according to
     * the given path and identifier.
     */
    getFileList(params?: Pick<Mysql, 'backup_id' | 'path'>): Promise<FileInfo[]>;
    /**
     * Method returns a list of databases from backup respective given identifier.
     * @returns Returns list of database names.
     */
    getMysqlList(params?: Pick<Mysql, 'backup_id'>): Promise<string[]>;
    /**
     * Method creates query for data restoring from backup according to given path
     * and backup copy.
     * @returns Returns property of successful or unsuccessful execution.
     */
    restoreFile(params?: Pick<Mysql, 'backup_id' | 'paths'>): Promise<boolean>;
    /**
     * Method creates query for DB recovery from backup according to
     * given DB name and backup identifier.
     * @returns Returns property of successful or unsuccessful execution.
     */
    restoreMysql(params?: Pick<Mysql, 'backup_id' | 'bases'>): Promise<boolean>;
    /**
     * Method creates query for up- and downloading data from backup to account root.
     * @returns Returns property of successful or unsuccessful execution.
     */
    downloadFile(params?: Pick<Mysql, 'backup_id' | 'paths'>): Promise<boolean>;
    /**
     * Method creates query for up- and downloading of data from backup to account root.
     */
    downloadMysql(params?: Pick<Mysql, 'backup_id' | 'bases'>): Promise<boolean>;
    /**
     * Method returns list and statuses of tasks for recovery and downloading.
     */
    getLog(): Promise<LogTask[]>;
}
