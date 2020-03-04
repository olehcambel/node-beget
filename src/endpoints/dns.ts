import { BegetRequest } from '../beget-request';
import { Methods } from '../types/controller.interface';
import { ChangeRecords, DomainInfo } from '../types/dns.interface';

// /**
//  * DnsEndpoint
//  * @category Endpoints
//  */
export class DnsEndpoint {
    constructor(private readonly client: BegetRequest) {}

    /**
     * @private
     */
    private method<T>(method: Methods['dns'], data?: object): Promise<T> {
        return this.client.api('dns', method, data);
    }

    /**
     * Method returns information about domain from DNS server.
     */
    getData(params: Pick<DomainInfo, 'fqdn'>): Promise<DomainInfo[]> {
        return this.method('getData', params);
    }

    /**
     * // TODO: change records to overloading
     * Method changes DNS records for given domain.
     * @returns Returns property of successful or unsuccessful execution.
     */
    changeRecords(params: ChangeRecords): Promise<boolean> {
        return this.method('changeRecords', params);
    }
}
