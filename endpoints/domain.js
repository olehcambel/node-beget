"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DomainEndpoint {
    constructor(client) {
        this.client = client;
    }
    /**
     * @private
     */
    method(method, data) {
        return this.client.api('domain', method, data);
    }
    /**
     * Method returns list of domains on user account.
     */
    getList() {
        return this.method('getList');
    }
    /**
     * Method returns zone list.
     */
    getZoneList() {
        return this.method('getZoneList');
    }
    /**
     * Method adds domain.
     * @returns Returns ID of added domain.
     */
    addVirtual(params) {
        return this.method('addVirtual', params);
    }
    /**
     * Method deletes domain. If the domain was linked to a website,
     * it will be unlinked from it. All subdomains of this domain will be deleted.
     * @returns Returns property of successful or unsuccessful execution.
     */
    delete(params) {
        return this.method('delete', params);
    }
    /**
     * Method returns subdomain list.
     */
    getSubdomainList() {
        return this.method('getSubdomainList');
    }
    /**
     * Method adds given subdomain.
     * @returns Returns ID of added subdomain.
     */
    addSubdomainVirtual(params) {
        return this.method('addSubdomainVirtual', params);
    }
    /**
     * Method deletes given subdomain.
     * @returns Returns property of successful or unsuccessful execution.
     */
    deleteSubdomain(params) {
        return this.method('deleteSubdomain', params);
    }
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
    checkDomainToRegister(params) {
        return this.method('checkDomainToRegister', params);
    }
    /**
     * The method returns information about the current version of php for the domain,
     * whether php is enabled as cgi and php versions available for installation
     */
    getPhpVersion() {
        return this.method('getPhpVersion');
    }
    /**
     * The method changes the php version to the transferred one.
     * Allows you to set and remove cgi mode
     */
    changePhpVersion(params) {
        return this.method('changePhpVersion', params);
    }
    /**
     * The method returns custom directives for the specified domain
     */
    getDirectives(params) {
        return this.method('getDirectives', params);
    }
    /**
     * The method adds custom directives for the specified domain
     */
    addDirectives(params) {
        return this.method('addDirectives', params);
    }
    /**
     * The method removes user directives for the specified domain
     */
    removeDirectives(params) {
        return this.method('removeDirectives', params);
    }
}
exports.DomainEndpoint = DomainEndpoint;
