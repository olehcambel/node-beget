"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const got_1 = require("got");
const qs = require("qs");
const util_1 = require("util");
const beget_error_1 = require("./beget.error");
class BegetRequest {
    constructor(config) {
        this.config = {
            login: config.login,
            passwd: config.password,
            input_format: 'plain',
        };
        this.request = got_1.default.extend({
            resolveBodyOnly: true,
            responseType: 'json',
            prefixUrl: 'https://api.beget.com/api',
            method: config.httpMethod || 'GET',
        });
    }
    // constructor(private readonly config: BegetOptions) {}
    async safeRequest(options) {
        const response = await this.request(options).catch(({ message, options }) => {
            throw new Error(`Invalid response status:\n${util_1.format({ message, options })}`);
        });
        if (response.status === 'success') {
            const { answer } = response;
            if (answer.status === 'success') {
                return answer.result;
            }
            throw new beget_error_1.BegetError(answer.errors, options);
        }
        if (response.status === 'error') {
            throw new beget_error_1.BegetError({
                error_code: response.error_code,
                error_text: response.error_text,
            }, options);
        }
        throw new Error(`Invalid response:\n${util_1.format(options, response)}`);
    }
    api(section, method, data) {
        /**
         * // TODO: add support for input_format=json by using JSON.stringify
         *  and if input_format=json && no input_data, then input_data={}
         * json:  input_data=%7B%22hostname%22%3A%22test-domain%22%2C%22zone_id%22%3A1%7D
         * plain: input_data=hostname%3Dtest-domain%26zone_id%3D1
         *
         * searchParams: { ...this.config, input_data: JSON.stringify(data) },
         */
        const searchParams = data
            ? { ...this.config, input_data: qs.stringify(data) }
            : {
                login: this.config.login,
                passwd: this.config.passwd,
                input_format: this.config.input_format,
            };
        const options = {
            url: `${section}/${method}`,
            searchParams,
        };
        return this.safeRequest(options);
    }
}
exports.BegetRequest = BegetRequest;
