"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserEndpoint {
    constructor(client) {
        this.client = client;
    }
    /**
     * @private
     */
    method(method, data) {
        return this.client.api('user', method, data);
    }
    /**
     * Method returns information on the user's tariff plan,
     * on some parameters of the server, where the user is
     * currently located and on the applied limits thereof.
     */
    getAccountInfo() {
        return this.method('getAccountInfo');
    }
    /**
     * If there is no additional ftplogin parameter for the main account,
     * the method enables and disables SSH for ftp account with ftplogin.
     */
    toggleSsh(params) {
        return this.method('toggleSsh', params);
    }
}
exports.UserEndpoint = UserEndpoint;
