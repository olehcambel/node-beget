"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CronEndpoint {
    constructor(client) {
        this.client = client;
    }
    /**
     * @private
     */
    method(method, data) {
        return this.client.api('cron', method, data);
    }
    /**
     * Method returns list of all CronTab tasks.
     * @returns Returns twodimensional array, each string whereof describes a Cron task.
     */
    getList() {
        return this.method('getList');
    }
    /**
     * Method adds new task. Task will be active upon adding.
     * @returns Returns task ID (task ID is unique within one user).
     */
    add(params) {
        return this.method('add', params);
    }
    /**
     * Method will delete task with given ID.
     * @returns Returns property of successful or unsuccessful execution.
     */
    delete(params) {
        return this.method('delete', params);
    }
    /**
     * Method will change task status.
     * @returns Returns new task ID (the task identifier is unique within one user).
     */
    changeHiddenState(params) {
        return this.method('changeHiddenState', params);
    }
    /**
     * Method returns email, where the display of executed tasks is sent.
     * @returns If no email has been set, method returns NULL.
     */
    getEmail() {
        return this.method('getEmail');
    }
    /**
     * Method sets email, where the display of executed tasks will be sent.
     * @param email Email or empty string;
     * @returns Returns property of successful or unsuccessful execution.
     */
    setEmail(email) {
        return this.method('setEmail', { email });
    }
}
exports.CronEndpoint = CronEndpoint;
