interface DNSRecord {
    /**
     * @example 'ns1.beget.de', '91.106.201.65'
     */
    value: string | null;
    /**
     * @example 10
     */
    priority: number;
}
declare type RecordFirst = 'A' | 'MX' | 'TXT';
declare type RecordSecond = 'NS';
declare type RecordThird = 'CNAME';
declare type RecordFourth = 'DNS' | 'DNS_IP';
declare type DNSRecordTypes = RecordFirst | RecordSecond | RecordThird | RecordFourth;
declare type DNSRecords = Types.RecordPartial<DNSRecordTypes, DNSRecord[]>;
export interface DomainInfo {
    /**
     * domain is under BeGet administration (0 - no / 1 - yes)
     */
    is_under_control: 0 | 1;
    /**
     * domain is on BeGet DNS servers (0 - no / 1 - yes)
     */
    is_beget_dns: 0 | 1;
    /**
     * is the domain a subdomain (0 - no / 1 - yes)
     */
    is_subdomain: 0 | 1;
    /**
     * passed domain name
     * @example 'beget.de'
     */
    fqdn: string;
    /**
     * currently used DNS records
     */
    records: DNSRecords;
    /**
     * type of currently used settings:
     * 1 - A, MX, TXT records used;
     * 2 - NS records used (for subdomains);
     * 3 - CNAME records used (for subdomains).
     */
    set_type: number;
}
export declare type ChangeRecords = Pick<DomainInfo, 'fqdn' | 'records'>;
export {};
