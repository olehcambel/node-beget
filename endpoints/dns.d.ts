import { BegetRequest } from '../beget-request';
import { ChangeRecords, DomainInfo } from '../types/dns.interface';
export declare class DnsEndpoint {
    private readonly client;
    constructor(client: BegetRequest);
    /**
     * @private
     */
    private method;
    /**
     * Method returns information about domain from DNS server.
     */
    getData(params: Pick<DomainInfo, 'fqdn'>): Promise<DomainInfo[]>;
    /**
     * // TODO: change records to overloading
     * Method changes DNS records for given domain.
     * @returns Returns property of successful or unsuccessful execution.
     */
    changeRecords(params: ChangeRecords): Promise<boolean>;
}
