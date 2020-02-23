import { BegetRequest } from '../beget-request';
import { Methods } from '../types/controller.interface';
import { DomainInfo, DNSRecordTypes } from '../types/dns.interface';

export class DnsEndpoint {
    constructor(private readonly client: BegetRequest) {}

    private method<T>(method: Methods['user'], data?: object): Promise<T> {
        return this.client.api<'user', T>('user', method, data);
    }

    /**
     * Method returns information about domain from DNS server.
     * @param fqdn full domain name
     * (domain in national zones need to be passed in punycode).
     */
    getData(fqdn: string): Promise<DomainInfo[]> {
        return this.method('getAccountInfo', { fqdn });
    }

    /**
     * // TODO: change records to overload
     * Method changes DNS records for given domain.
     * @param fqdn full domain name (domains in national languages need to be
     * passed in punycode).
     * @param records array, containing DNS records.
     */
    changeRecords(fqdn: string, records?: DNSRecordTypes): Promise<boolean> {
        return this.method('toggleSsh', { fqdn, records });
    }
}
