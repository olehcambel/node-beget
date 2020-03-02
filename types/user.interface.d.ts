export interface AccountInfo {
    /**
     * Tariff name
     * @example 'Great'
     */
    plan_name: string;
    /**
     * Actual website number
     * @example 7
     */
    user_sites: number;
    /**
     * Maximum website number
     * @example 25
     */
    plan_site: number;
    /**
     * Actual domain number
     * @example 4
     */
    user_domains: number;
    /**
     * Maximim domain number
     * @example 2147483647
     */
    plan_domain: number;
    /**
     * Actual MySQL DB size
     * @example 153
     */
    user_mysqlsize: number;
    /**
     * Maximum MySQL DB count
     * @example 2147483647
     */
    plan_mysql: number;
    /**
     * Size of used disk quota
     * @example 1283
     */
    user_quota: number;
    /**
     * Maximum disk quota size
     * @example 10000
     */
    plan_quota: number;
    /**
     * Actual number of FTP accounts
     * @example 6
     */
    user_ftp: number;
    /**
     * Myximum number of FTP accounts
     * @example 25
     */
    plan_ftp: number;
    /**
     * Actual mailbox number
     * @example 18
     */
    user_mail: number;
    /**
     * Maximim mailbox number
     * @example 2147483647
     */
    plan_mail: number;
    /**
     * Used bash
     * @example '/bin/bash'
     */
    user_bash: string;
    /**
     * Current price of tariff plan per day
     * @example '12.66'
     */
    user_rate_current: string;
    /**
     * Is an annual discount being used
     * @example '0'
     */
    user_is_year_plan: string;
    /**
     * Current tariff price per year
     * @example 4620
     */
    user_rate_year: number;
    /**
     * Current tariff price per month
     * @example 385
     */
    user_rate_month: number;
    /**
     * Current user balance
     * @example 1339.57
     */
    user_balance: number;
    /**
     * Apache version
     * @example ' Apache/2.2.23 (Unix)'
     */
    server_apache_version: string;
    /**
     * MySQL version
     * @example '5.1.68'
     */
    server_mysql_version: string;
    /**
     * Nginx version
     * @example 'nginx/1.1.0'
     */
    server_nginx_version: string;
    /**
     * Perl version
     * @example 'v5.10.1'
     */
    server_perl_version: string;
    /**
     * PHP version
     * @example '5.2.17'
     */
    server_php_version: string;
    /**
     * Python version
     * @example 'Python 2.6.6'
     */
    server_python_version: string;
    /**
     * Server name
     * @example 'germes'
     */
    server_name: string;
    /**
     * Processors
     * @example '24 * Intel(R) Xeon(R) CPU X5660  @ 2.80GHz'
     */
    server_cpu_name: string;
    /**
     * RAM size (Mb)
     * @example '96747'
     */
    server_memory: string;
    /**
     * Size of used RAM
     * @example 4944
     */
    server_memorycurrent: number;
    /**
     * Current Load Average
     * @example '4.05'
     */
    server_loadaverage: string;
    /**
     * Uptime
     * @example '18'
     */
    server_uptime: string;
}
export interface SshSettings {
    /**
     * 1 - enable, 0 - disable
     */
    status: 0 | 1;
    /**
     * ftp account login, if passed enables/disables SSH access * to ftp account;
     * if not passed, enables/disables SSH access to main user account;
     */
    ftplogin?: string;
}
