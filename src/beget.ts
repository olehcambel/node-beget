import { BegetRequest } from './beget-request';
import { BackupEndpoint } from './endpoints/backup';
import { CronEndpoint } from './endpoints/cron';
import { DnsEndpoint } from './endpoints/dns';
import { DomainEndpoint } from './endpoints/domain';
import { MailEndpoint } from './endpoints/mail';
import { SiteEndpoint } from './endpoints/site';
import { StatEndpoint } from './endpoints/stat';
import { UserEndpoint } from './endpoints/user';
import { BegetOptions } from './options/beget-options';
import { FtpEndpoint } from './endpoints/ftp';
import { MysqlEndpoint } from './endpoints/mysql';

export interface BegetClient {
    readonly backup: BackupEndpoint;
    readonly cron: CronEndpoint;
    readonly dns: DnsEndpoint;
    readonly domain: DomainEndpoint;
    readonly ftp: FtpEndpoint;
    readonly mail: MailEndpoint;
    readonly mysql: MysqlEndpoint;
    readonly site: SiteEndpoint;
    readonly stat: StatEndpoint;
    readonly user: UserEndpoint;
}

export class Beget implements BegetClient {
    readonly backup: BackupEndpoint;
    readonly cron: CronEndpoint;
    readonly dns: DnsEndpoint;
    readonly domain: DomainEndpoint;
    readonly ftp: FtpEndpoint;
    readonly mail: MailEndpoint;
    readonly mysql: MysqlEndpoint;
    readonly site: SiteEndpoint;
    readonly stat: StatEndpoint;
    readonly user: UserEndpoint;

    constructor(config: BegetOptions) {
        const begetRequest = new BegetRequest(config);

        this.backup = new BackupEndpoint(begetRequest);
        this.cron = new CronEndpoint(begetRequest);
        this.dns = new DnsEndpoint(begetRequest);
        this.domain = new DomainEndpoint(begetRequest);
        this.ftp = new FtpEndpoint(begetRequest);
        this.mail = new MailEndpoint(begetRequest);
        this.mysql = new MysqlEndpoint(begetRequest);
        this.site = new SiteEndpoint(begetRequest);
        this.stat = new StatEndpoint(begetRequest);
        this.user = new UserEndpoint(begetRequest);
    }
}
