"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FtpEndpoint {
    constructor(client) {
        this.client = client;
    }
    /**
     * @private
     */
    method(method, data) {
        return this.client.api('ftp', method, data);
    }
    /**
     * Method returns list of additional FTP accounts with their home directories.
     */
    getList() {
        return this.method('getList');
    }
    /**
     * Method adds new FTP account.
     * @returns Returns property of successful or unsuccessful execution.
     */
    add(params) {
        return this.method('add', params);
    }
    /**
     * Method performs password change for additional FTP account.
     * @returns Returns property of successful or unsuccessful execution.
     */
    changePassword(params) {
        return this.method('changePassword', params);
    }
    /**
     * Method deletes additional FTP account with given suffix.
     * @returns Returns property of successful or unsuccessful execution.
     */
    delete(params) {
        return this.method('delete', params);
    }
}
exports.FtpEndpoint = FtpEndpoint;
