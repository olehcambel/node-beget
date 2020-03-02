import { BegetRequest } from '../beget-request';
import * as Domain from '../types/domain.interface';
export declare class DomainEndpoint {
    private readonly client;
    constructor(client: BegetRequest);
    /**
     * @private
     */
    private method;
    /**
     * Method returns list of domains on user account.
     */
    getList(): Promise<Domain.Domain[]>;
    /**
     * Method returns zone list.
     */
    getZoneList(): Promise<Domain.ZoneList>;
    /**
     * Method adds domain.
     * @returns Returns ID of added domain.
     */
    addVirtual(params: Domain.AddVirtual): Promise<number>;
    /**
     * Method deletes domain. If the domain was linked to a website,
     * it will be unlinked from it. All subdomains of this domain will be deleted.
     * @returns Returns property of successful or unsuccessful execution.
     */
    delete(params: Pick<Domain.Subdomain, 'id'>): Promise<boolean>;
    /**
     * Method returns subdomain list.
     */
    getSubdomainList(): Promise<Domain.Subdomain[]>;
    /**
     * Method adds given subdomain.
     * @returns Returns ID of added subdomain.
     */
    addSubdomainVirtual(params: Domain.AddSubdomain): Promise<number>;
    /**
     * Method deletes given subdomain.
     * @returns Returns property of successful or unsuccessful execution.
     */
    deleteSubdomain(params: Pick<Domain.Subdomain, 'id'>): Promise<boolean>;
    /**
     * Method returns information about registration possibility for given domain name.
     *
     * For a final decision about the possibility of registering the domain three fields
     * must be analyzed: may_be_registered, pay_type и in_system
     *
     * Required values:
     * - may_be_registered - true
     * - pay_type - money or bonus_domain
     * - in_system - false
     *
     * When making an application for domain registration, you will need to pass the pay_type,
     * which was returned by the method.
     */
    checkDomainToRegister(params: Domain.CheckDomain): Promise<Domain.RegistrationPossibility>;
    /**
     * The method returns information about the current version of php for the domain,
     * whether php is enabled as cgi and php versions available for installation
     */
    getPhpVersion(): Promise<Domain.PhpVersion>;
    /**
     * The method changes the php version to the transferred one.
     * Allows you to set and remove cgi mode
     */
    changePhpVersion(params: Domain.UpdatePhpVersion): Promise<Domain.UpdatePhpVersionResponse>;
    /**
     * The method returns custom directives for the specified domain
     */
    getDirectives(params: Pick<Domain.SearchDirective, 'full_fqdn'>): Promise<Domain.Directive>;
    /**
     * The method adds custom directives for the specified domain
     */
    addDirectives(params: Domain.SearchDirective): Promise<boolean>;
    /**
     * The method removes user directives for the specified domain
     */
    removeDirectives(params: Domain.SearchDirective): Promise<boolean>;
}
