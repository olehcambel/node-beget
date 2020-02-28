[node-beget](../README.md) › [Globals](../globals.md) › ["endpoints/backup"](../modules/_endpoints_backup_.md) › [BackupEndpoint](_endpoints_backup_.backupendpoint.md)

# Class: BackupEndpoint

## Hierarchy

* **BackupEndpoint**

## Index

### Constructors

* [constructor](_endpoints_backup_.backupendpoint.md#constructor)

### Properties

* [client](_endpoints_backup_.backupendpoint.md#private-client)

### Methods

* [downloadFile](_endpoints_backup_.backupendpoint.md#downloadfile)
* [downloadMysql](_endpoints_backup_.backupendpoint.md#downloadmysql)
* [getFileBackupList](_endpoints_backup_.backupendpoint.md#getfilebackuplist)
* [getFileList](_endpoints_backup_.backupendpoint.md#getfilelist)
* [getLog](_endpoints_backup_.backupendpoint.md#getlog)
* [getMysqlBackupList](_endpoints_backup_.backupendpoint.md#getmysqlbackuplist)
* [getMysqlList](_endpoints_backup_.backupendpoint.md#getmysqllist)
* [method](_endpoints_backup_.backupendpoint.md#private-method)
* [restoreFile](_endpoints_backup_.backupendpoint.md#restorefile)
* [restoreMysql](_endpoints_backup_.backupendpoint.md#restoremysql)

## Constructors

###  constructor

\+ **new BackupEndpoint**(`client`: [BegetRequest](_beget_request_.begetrequest.md)): *[BackupEndpoint](_endpoints_backup_.backupendpoint.md)*

*Defined in [src/endpoints/backup.ts:5](https://github.com/olehcambel/node-beget/blob/fcfb1e8/src/endpoints/backup.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [BegetRequest](_beget_request_.begetrequest.md) |

**Returns:** *[BackupEndpoint](_endpoints_backup_.backupendpoint.md)*

## Properties

### `Private` client

• **client**: *[BegetRequest](_beget_request_.begetrequest.md)*

*Defined in [src/endpoints/backup.ts:6](https://github.com/olehcambel/node-beget/blob/fcfb1e8/src/endpoints/backup.ts#L6)*

## Methods

###  downloadFile

▸ **downloadFile**(`params?`: Pick‹[Mysql](../interfaces/_types_backup_interface_.mysql.md), "backup_id" | "paths"›): *Promise‹boolean›*

*Defined in [src/endpoints/backup.ts:67](https://github.com/olehcambel/node-beget/blob/fcfb1e8/src/endpoints/backup.ts#L67)*

Method creates query for up- and downloading data from backup to account root.

**Parameters:**

Name | Type |
------ | ------ |
`params?` | Pick‹[Mysql](../interfaces/_types_backup_interface_.mysql.md), "backup_id" &#124; "paths"› |

**Returns:** *Promise‹boolean›*

Returns property of successful or unsuccessful execution.

___

###  downloadMysql

▸ **downloadMysql**(`params?`: Pick‹[Mysql](../interfaces/_types_backup_interface_.mysql.md), "backup_id" | "bases"›): *Promise‹boolean›*

*Defined in [src/endpoints/backup.ts:74](https://github.com/olehcambel/node-beget/blob/fcfb1e8/src/endpoints/backup.ts#L74)*

Method creates query for up- and downloading of data from backup to account root.

**Parameters:**

Name | Type |
------ | ------ |
`params?` | Pick‹[Mysql](../interfaces/_types_backup_interface_.mysql.md), "backup_id" &#124; "bases"› |

**Returns:** *Promise‹boolean›*

___

###  getFileBackupList

▸ **getFileBackupList**(): *Promise‹[FileBackup](../interfaces/_types_backup_interface_.filebackup.md)[]›*

*Defined in [src/endpoints/backup.ts:18](https://github.com/olehcambel/node-beget/blob/fcfb1e8/src/endpoints/backup.ts#L18)*

Method returns available list of file backups.

**Returns:** *Promise‹[FileBackup](../interfaces/_types_backup_interface_.filebackup.md)[]›*

___

###  getFileList

▸ **getFileList**(`params?`: Pick‹[Mysql](../interfaces/_types_backup_interface_.mysql.md), "backup_id" | "path"›): *Promise‹[FileInfo](../interfaces/_types_backup_interface_.fileinfo.md)[]›*

*Defined in [src/endpoints/backup.ts:33](https://github.com/olehcambel/node-beget/blob/fcfb1e8/src/endpoints/backup.ts#L33)*

Method returns a list of files and directories from a backup according to
the given path and identifier.

**Parameters:**

Name | Type |
------ | ------ |
`params?` | Pick‹[Mysql](../interfaces/_types_backup_interface_.mysql.md), "backup_id" &#124; "path"› |

**Returns:** *Promise‹[FileInfo](../interfaces/_types_backup_interface_.fileinfo.md)[]›*

___

###  getLog

▸ **getLog**(): *Promise‹[LogTask](../interfaces/_types_backup_interface_.logtask.md)[]›*

*Defined in [src/endpoints/backup.ts:81](https://github.com/olehcambel/node-beget/blob/fcfb1e8/src/endpoints/backup.ts#L81)*

Method returns list and statuses of tasks for recovery and downloading.

**Returns:** *Promise‹[LogTask](../interfaces/_types_backup_interface_.logtask.md)[]›*

___

###  getMysqlBackupList

▸ **getMysqlBackupList**(): *Promise‹[FileBackup](../interfaces/_types_backup_interface_.filebackup.md)[]›*

*Defined in [src/endpoints/backup.ts:25](https://github.com/olehcambel/node-beget/blob/fcfb1e8/src/endpoints/backup.ts#L25)*

Method returns available list of mysql database backups

**Returns:** *Promise‹[FileBackup](../interfaces/_types_backup_interface_.filebackup.md)[]›*

___

###  getMysqlList

▸ **getMysqlList**(`params?`: Pick‹[Mysql](../interfaces/_types_backup_interface_.mysql.md), "backup_id"›): *Promise‹string[]›*

*Defined in [src/endpoints/backup.ts:41](https://github.com/olehcambel/node-beget/blob/fcfb1e8/src/endpoints/backup.ts#L41)*

Method returns a list of databases from backup respective given identifier.

**Parameters:**

Name | Type |
------ | ------ |
`params?` | Pick‹[Mysql](../interfaces/_types_backup_interface_.mysql.md), "backup_id"› |

**Returns:** *Promise‹string[]›*

Returns list of database names.

___

### `Private` method

▸ **method**<**T**>(`method`: Methods["backup"], `data?`: object): *Promise‹T›*

*Defined in [src/endpoints/backup.ts:11](https://github.com/olehcambel/node-beget/blob/fcfb1e8/src/endpoints/backup.ts#L11)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`method` | Methods["backup"] |
`data?` | object |

**Returns:** *Promise‹T›*

___

###  restoreFile

▸ **restoreFile**(`params?`: Pick‹[Mysql](../interfaces/_types_backup_interface_.mysql.md), "backup_id" | "paths"›): *Promise‹boolean›*

*Defined in [src/endpoints/backup.ts:50](https://github.com/olehcambel/node-beget/blob/fcfb1e8/src/endpoints/backup.ts#L50)*

Method creates query for data restoring from backup according to given path
and backup copy.

**Parameters:**

Name | Type |
------ | ------ |
`params?` | Pick‹[Mysql](../interfaces/_types_backup_interface_.mysql.md), "backup_id" &#124; "paths"› |

**Returns:** *Promise‹boolean›*

Returns property of successful or unsuccessful execution.

___

###  restoreMysql

▸ **restoreMysql**(`params?`: Pick‹[Mysql](../interfaces/_types_backup_interface_.mysql.md), "backup_id" | "bases"›): *Promise‹boolean›*

*Defined in [src/endpoints/backup.ts:59](https://github.com/olehcambel/node-beget/blob/fcfb1e8/src/endpoints/backup.ts#L59)*

Method creates query for DB recovery from backup according to
given DB name and backup identifier.

**Parameters:**

Name | Type |
------ | ------ |
`params?` | Pick‹[Mysql](../interfaces/_types_backup_interface_.mysql.md), "backup_id" &#124; "bases"› |

**Returns:** *Promise‹boolean›*

Returns property of successful or unsuccessful execution.
