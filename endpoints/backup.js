"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BackupEndpoint {
    constructor(client) {
        this.client = client;
    }
    /**
     * @private
     */
    method(method, data) {
        return this.client.api('backup', method, data);
    }
    /**
     * Method returns available list of file backups.
     */
    getFileBackupList() {
        return this.method('getFileBackupList');
    }
    /**
     * Method returns available list of mysql database backups
     */
    getMysqlBackupList() {
        return this.method('getMysqlBackupList');
    }
    /**
     * Method returns a list of files and directories from a backup according to
     * the given path and identifier.
     */
    getFileList(params) {
        return this.method('getFileList', params);
    }
    /**
     * Method returns a list of databases from backup respective given identifier.
     * @returns Returns list of database names.
     */
    getMysqlList(params) {
        return this.method('getMysqlList', params);
    }
    /**
     * Method creates query for data restoring from backup according to given path
     * and backup copy.
     * @returns Returns property of successful or unsuccessful execution.
     */
    restoreFile(params) {
        return this.method('restoreFile', params);
    }
    /**
     * Method creates query for DB recovery from backup according to
     * given DB name and backup identifier.
     * @returns Returns property of successful or unsuccessful execution.
     */
    restoreMysql(params) {
        return this.method('restoreMysql', params);
    }
    /**
     * Method creates query for up- and downloading data from backup to account root.
     * @returns Returns property of successful or unsuccessful execution.
     */
    downloadFile(params) {
        return this.method('downloadFile', params);
    }
    /**
     * Method creates query for up- and downloading of data from backup to account root.
     */
    downloadMysql(params) {
        return this.method('downloadMysql', params);
    }
    /**
     * Method returns list and statuses of tasks for recovery and downloading.
     */
    getLog() {
        return this.method('getLog');
    }
}
exports.BackupEndpoint = BackupEndpoint;
