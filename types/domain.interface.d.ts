declare type RegistarStatus = 'delegated' | 'not_active' | 'undelegated';
declare type RegistarOrderStatus = 'new' | 'registred' | 'delete';
export interface Domain {
    /**
     * domain ID
     * @example '132456'
     */
    id: string;
    /**
     * full domain name
     * @example 'mylogin.bget.de'
     */
    fqdn: string;
    /**
     * date and time of domain creation
     * @example '2011-10-24 15:01:40'
     */
    date_add: string;
    /**
     * 'automatic domain renewal' option status
     * @example '0'
     */
    auto_renew: string;
    /**
     * domain registration date (if under BeGet administration)
     * @example '2011-10-24'
     */
    date_register: string;
    /**
     * expiration date of delegation (if under BeGet administration)
     * @example 0
     */
    date_expire: number;
    /**
     * renewal possibility status
     * @example '0'
     */
    can_renew: string;
    /**
     * domain name registrar (if under BeGet administration)
     * @example null
     */
    registrar: null | string;
    /**
     * domain status at registrar (if under BeGet administration).
     *
     * Can be: delegated, not_active, undelegated
     * @example null
     */
    registrar_status: null | RegistarStatus;
    /**
     * status of domain registration order (if domain was added to its registration order).
     *
     * Can be: new, registred, delete
     * @example null
     */
    register_order_status: null | RegistarOrderStatus;
    /**
     * comment on registration order (mostly comment on reasons of order annulment)
     * @example null
     */
    register_order_comment: null | string;
    /**
     * status of domain renewal order.
     *
     * Can be: pending, delete, canceled error, success
     * @example '0'
     */
    renew_order_status: string;
    /**
     * Status shows if domain is under BeGet administration.
     * Defines possibility of operations, such as: domain renewal, ordering add.
     * services from registrar, DNS server change
     */
    is_under_control: number;
}
interface Zone {
    /**
     * zone ID
     */
    id: string;
    /**
     * zone name
     * @example 'de'
     */
    zone: string;
    /**
     * price of domain registration in zone
     * @example '120'
     */
    price: string;
    /**
     * price of domain renewal in zone
     * @example '120'
     */
    price_renew: string;
    /**
     * price of IDN domain registration in zone
     * @example null
     */
    price_idn: null | string;
    /**
     * price of IDN domain renewal in zone
     * @example null
     */
    price_idn_renew: null | string;
    /**
     * does the zone support IDN domains
     * @example '0'
     */
    is_idn: string;
    /**
     * is the zone national
     * @example '1'
     */
    is_national: string;
    /**
     * minimum domain registration period (in years)
     * @example '1'
     */
    min_period: string;
    /**
     * maximum domain registration period (in years)
     * @example '1'
     */
    max_period: string;
}
export declare type ZoneList = {
    [zoneName: string]: Zone;
};
export interface Subdomain {
    /**
     * subdomain ID
     * @example '132456'
     */
    id: string;
    /**
     * full subdomain name
     * @example 'subodmain.domain.de'
     */
    fqdn: string;
    /**
     * parent domain ID
     * @example '12345'
     */
    domain_id: string;
}
export interface AddSubdomain extends Pick<Subdomain, 'domain_id'> {
    /**
     * subdomain name;
     */
    subdomain: string;
}
declare type PayType = 'money' | 'bonus_domain';
export interface CheckDomain {
    /**
     * domain name without zone;
     */
    hostname: string;
    /**
     * zone ID, you can receive a zone list through the method getZoneList;
     */
    zone_id: number;
    /**
     * registration period (in years), type int.
     */
    period: number;
}
export declare type AddVirtual = Pick<CheckDomain, 'hostname' | 'zone_id'>;
export interface RegistrationPossibility {
    /**
     * is the domain available for registration (based on WHOIS service)
     * @example true
     */
    may_be_registered: boolean;
    /**
     * current number of bonus domains on account in selected zone
     * @example 0
     */
    bonus_domains: number;
    /**
     * current account balance
     * @example 289.46
     */
    balance: number;
    /**
     * payment type for domain registration.
     *
     * Can be:
     * - null - domain cannot be paid;
     * - money - payment will be performed from account balance;
     * - bonus_domain - payment will be performed on expense of a bonus.
     * @example null
     */
    pay_type: null | PayType;
    /**
     * total price of domain registration (considering the period)
     * @example 350
     */
    price: number;
    /**
     * does such a domain already exist in the BeGet system
     * @example false
     */
    in_system: boolean;
}
declare type CGI = 'disabled' | 'enabled';
interface PhpInfo {
    /**
     * domain with which php version and cgi mode were changed
     * @example 'foobar.com'
     */
    full_fqdn: string;
    /**
     * version of php after the current request
     * @example '5.6'
     */
    php_version: string;
    /**
     * is cgi mode enabled
     * @example 'disabled' | 'enabled'
     */
    cgi: CGI;
    /**
     * @example ['4.4', '5.2', '5.3', '5.4', '5.5', '5.6']
     */
    allowed_versions: string[];
    /**
     * changes may take some time
     */
    result: string;
    /**
     * set or remove cgi mode. Defaults to false;
     */
    is_cgi: boolean;
}
export declare type PhpVersion = Pick<PhpInfo, 'full_fqdn' | 'php_version' | 'cgi' | 'allowed_versions'>;
export declare type UpdatePhpVersion = Pick<PhpInfo, 'full_fqdn' | 'php_version' | 'is_cgi'>;
export declare type UpdatePhpVersionResponse = Pick<PhpInfo, 'full_fqdn' | 'result' | 'php_version' | 'cgi'>;
export interface Directive {
    /**
     * directive name
     * @example 'php_admin_value'
     */
    name: string;
    /**
     * its meaning
     * @example 'session.save_handler redis'
     */
    value: string;
}
export interface SearchDirective {
    /**
     * full domain name;
     */
    full_fqdn: string;
    /**
     * array of directives in the format:
     */
    directives_list: Directive[];
}
export {};
