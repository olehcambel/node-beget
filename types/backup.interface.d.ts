export interface FileBackup {
    /**
     * @example 14508595
     */
    backup_id: number;
    /**
     * @example '2014-11-05 01:05:09'
     */
    date: string;
}
export interface FileInfo {
    /**
     * name of file or folder;
     * @example '.cache'
     */
    name: string;
    /**
     * property of file (0) or folder (1);
     * @example 1
     */
    is_dir: 0 | 1;
    /**
     * file creation time in format "Y-m-d H:i:s";
     * @example '2012-12-25 18:35:05'
     */
    mtime: string;
    /**
     * size in bytes;
     * @example 409
     */
    size: number;
}
declare type LogTaskOperation = 'restore' | 'download';
export interface LogTask {
    /**
     * dosnload / restore query identifier;
     * @example 80240
     */
    id: number;
    /**
     * restore operation (restore), download (download);
     * @example 'download'
     */
    operation: LogTaskOperation;
    /**
     * detailed operation and restore / download data type and file / mysql;
     * @example 'download_mysql'
     */
    type: string;
    /**
     * query creation time in "Y-m-d H:i:s" format;
     * @example '2014-11-05 14:22:13'
     */
    date_create: string;
    /**
     * element array in query (files or databases);
     * @example ['db_opca2']
     */
    target_list: string[];
    /**
     * execution status;
     * @example 'success'
     */
    status: string;
}
export interface Mysql {
    /**
     * if backup_id is not given, the listing is performed according to
     * the current copy;
     */
    backup_id?: number;
    /**
     * array (one or several values) of MySQL databases for recovery
     */
    bases?: string[];
    /**
     * array (one or several values) of paths for restoring from home
     * directory root (e.g. "/site.de/public_html");
     */
    paths?: string[];
    /**
     * path from home directory root (e.g. "/site.de/public_html");
     */
    path?: string[];
}
export {};
