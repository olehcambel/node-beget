"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MysqlEndpoint {
    constructor(client) {
        this.client = client;
    }
    /**
     * @private
     */
    method(method, data) {
        return this.client.api('mysql', method, data);
    }
    /**
     * The method returns a list of MySQL databases with their accesses.
     */
    getList() {
        return this.method('getList');
    }
    /**
     * The method adds the task to the queue for creating a new MySql database with
     * the specified suffix and creates access for localhost with the specified password.
     * The database creation process can take several minutes.
     * @returns Returns property of successful or unsuccessful execution.
     */
    addDb(params) {
        return this.method('addDb', params);
    }
    /**
     * The method adds the specified access to the specified MySql database.
     * @returns Returns property of successful or unsuccessful execution.
     */
    addAccess(params) {
        return this.method('addAccess', params);
    }
    /**
     * The method deletes the specified database and all accesses to it.
     * @returns Returns property of successful or unsuccessful execution.
     */
    dropDb(params) {
        return this.method('dropDb', params);
    }
    /**
     * The method removes the specified access from the database.
     * @returns Returns property of successful or unsuccessful execution.
     */
    dropAccess(params) {
        return this.method('dropAccess', params);
    }
    /**
     * The method changes the password on the specified access.
     * @returns Returns property of successful or unsuccessful execution.
     */
    changeAccessPassword(params) {
        return this.method('changeAccessPassword', params);
    }
}
exports.MysqlEndpoint = MysqlEndpoint;
