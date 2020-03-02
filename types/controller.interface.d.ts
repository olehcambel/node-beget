export interface Methods {
    user: 'getAccountInfo' | 'toggleSsh';
    backup: 'getFileList' | 'getMysqlList' | 'restoreFile' | 'restoreMysql' | 'getFileBackupList' | 'getMysqlBackupList' | 'downloadFile' | 'downloadMysql' | 'getLog';
    cron: 'getList' | 'add' | 'delete' | 'changeHiddenState' | 'getEmail' | 'setEmail';
    dns: 'getData' | 'changeRecords';
    ftp: 'getList' | 'add' | 'changePassword' | 'delete';
    mysql: 'getList' | 'addDb' | 'addAccess' | 'dropDb' | 'dropAccess' | 'changeAccessPassword';
    site: 'getList' | 'add' | 'delete' | 'linkDomain' | 'unlinkDomain' | 'freeze' | 'unfreeze' | 'isSiteFrozen';
    domain: 'getList' | 'getZoneList' | 'addVirtual' | 'delete' | 'getSubdomainList' | 'addSubdomainVirtual' | 'deleteSubdomain' | 'checkDomainToRegister' | 'getPhpVersion' | 'changePhpVersion' | 'getDirectives' | 'addDirectives' | 'removeDirectives';
    mail: 'getMailboxList' | 'changeMailboxPassword' | 'createMailbox' | 'dropMailbox' | 'changeMailboxSettings' | 'forwardListAddMailbox' | 'forwardListDeleteMailbox' | 'forwardListShow' | 'setDomainMail' | 'clearDomainMail';
    dropMailbox: 'changeMailboxSettings' | 'forwardListAddMailbox' | 'forwardListDeleteMailbox' | 'forwardListShow' | 'setDomainMail' | 'clearDomainMail';
    stat: 'getSiteListLoad' | 'getDbListLoad' | 'getSiteLoad' | 'getDbLoad';
}
export declare type Controller = keyof Methods;
