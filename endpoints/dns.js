"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DnsEndpoint {
    constructor(client) {
        this.client = client;
    }
    /**
     * @private
     */
    method(method, data) {
        return this.client.api('dns', method, data);
    }
    /**
     * Method returns information about domain from DNS server.
     */
    getData(params) {
        return this.method('getData', params);
    }
    /**
     * // TODO: change records to overloading
     * Method changes DNS records for given domain.
     * @returns Returns property of successful or unsuccessful execution.
     */
    changeRecords(params) {
        return this.method('changeRecords', params);
    }
}
exports.DnsEndpoint = DnsEndpoint;
