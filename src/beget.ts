import { BegetRequest } from './beget-request';
import { UserEndpoint } from './endpoints/user';
import { BegetOptions } from './options/beget-options';
import { DnsEndpoint } from './endpoints/dns';
import { BackupEndpoint } from './endpoints/backup';

export interface BegetClient {
    readonly user: UserEndpoint;
    readonly dns: DnsEndpoint;
    readonly backup: BackupEndpoint;
}

export class Beget implements BegetClient {
    readonly user: UserEndpoint;
    readonly dns: DnsEndpoint;
    readonly backup: BackupEndpoint;

    constructor(config: BegetOptions) {
        const begetRequest = new BegetRequest(config);

        this.user = new UserEndpoint(begetRequest);
        this.dns = new DnsEndpoint(begetRequest);
        this.backup = new BackupEndpoint(begetRequest);
    }
}
