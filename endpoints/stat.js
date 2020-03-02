"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StatEndpoint {
    constructor(client) {
        this.client = client;
    }
    /**
     * @private
     */
    method(method, data) {
        return this.client.api('stat', method, data);
    }
    /**
     * Method returns information about the average load on user websites
     * within the last month.
     * @returns Returns website list and average load thereof (in descending order)
     */
    getSiteListLoad() {
        return this.method('getSiteListLoad');
    }
    /**
     * Method returns information about the average load on the user's databases
     * for the past month.
     * @returns Returns list of database names and the average load thereof
     * (in descending order)
     */
    getDbListLoad() {
        return this.method('getDbListLoad');
    }
    /**
     * Method returns detailed information about the load on the given webiste
     * (load per day and hour)
     * @returns Returns load list for the past 30 days (per day).
     * As well as load list for the past 24 hours (per hour)
     */
    getSiteLoad(params) {
        return this.method('getSiteLoad', params);
    }
    /**
     * Method returns detailed information about load on the given MySQL database.
     * @param db_name database name
     */
    getDbLoad(db_name) {
        return this.method('getDbLoad', { db_name });
    }
}
exports.StatEndpoint = StatEndpoint;
