import { BegetRequest } from '../beget-request';
import { FileBackup, FileInfo, LogTask } from '../types/backup.interface';
import { Methods } from '../types/controller.interface';

export class BackupEndpoint {
    constructor(private readonly client: BegetRequest) {}

    private method<T>(method: Methods['backup'], data?: object): Promise<T> {
        return this.client.api<'backup', T>('backup', method, data);
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
     * @param backup_id if backup_id is not given, the listing is performed according to
     * the current copy;
     * @param path path from home directory root (e.g. "/site.de/public_html");
     */
    getFileList(backup_id?: number, path?: string): Promise<FileInfo[]> {
        return this.method('getFileList', { backup_id, path });
    }

    /**
     * Method returns a list of databases from backup respective given identifier.
     *
     * Returns list of database names.
     * @param backup_id backup identifier backup_id, if not given, the listing is
     * performed from current copy;
     */
    getMysqlList(backup_id?: number): Promise<string[]> {
        return this.method('getMysqlList', { backup_id });
    }

    /**
     * Method creates query for data restoring from backup according to given path
     * and backup copy.
     * @param backup_id backup copy identifier backup_id
     * @param paths array (one or several values) of paths for restoring from home
     * directory root (e.g. "/site.de/public_html");
     */
    restoreFile(backup_id?: number, paths?: string[]): Promise<boolean> {
        return this.method('restoreFile', { backup_id, paths });
    }

    /**
     * Method creates query for DB recovery from backup according to
     * given DB name and backup identifier.
     * @param backup_id - backup identifier backup_id
     * @param bases - array (one or several values) of MySQL databases for recovery
     */
    restoreMysql(backup_id?: number, bases?: string[]): Promise<boolean> {
        return this.method('restoreMysql', { backup_id, bases });
    }

    /**
     * Method creates query for up- and downloading data from backup to account root.
     * @param backup_id - backup identifier backup_id (optional),
     * if not given, current copy will be used
     * @param paths - array (one or several values) of paths for recovery from home
     * directory root (e.g. "/site.de/public_html");
     */
    downloadFile(backup_id?: number, paths?: string[]): Promise<boolean> {
        return this.method('downloadFile', { backup_id, paths });
    }

    /**
     * Method creates query for up- and downloading of data from backup to account root.
     * @param backup_id - backup identifier backup_id (optional),
     * if not given, current copy will be used
     * @param bases - array (one or several values) of MySQL database names for recovery
     */
    downloadMysql(backup_id?: number, bases?: string[]): Promise<boolean> {
        return this.method('downloadMysql', { backup_id, bases });
    }

    /**
     * Method returns list and statuses of tasks for recovery and downloading.
     */
    getLog(): Promise<LogTask[]> {
        return this.method('getLog');
    }
}
