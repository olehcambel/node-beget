import got from 'got';
import { Got, OptionsOfDefaultResponseBody } from 'got/dist/source/create';
import * as qs from 'qs';
import { format } from 'util';
import { BegetError } from './beget.error';
import { BegetCredentials, BegetOptions, RequestOptions } from './options/beget-options';
import * as BegetCommon from './types/common.interface';
import * as Beget from './types/controller.interface';

export class BegetRequest {
    private request: Got;
    private readonly credentials: BegetCredentials;

    constructor(config: BegetOptions) {
        this.credentials = {
            login: config.login,
            passwd: config.password,
        };

        this.request = got.extend({
            resolveBodyOnly: true,
            responseType: 'json',
            prefixUrl: 'https://api.beget.com/api',
            method: config.httpMethod || 'GET',
        });
    }
    // constructor(private readonly config: BegetOptions) {}

    private async safeRequest<R>(options: OptionsOfDefaultResponseBody): Promise<R> {
        const response = await this.request<
            BegetCommon.ResponseSuccess<R> | BegetCommon.ResponseError
        >(
            options as Types.Merge<OptionsOfDefaultResponseBody, { resolveBodyOnly: true }>
        ).catch(({ message, options }) => {
            throw new Error(`Invalid response status:\n${format({ message, options })}`);
        });

        if (response.status === 'success') {
            const { answer } = response;

            if (answer.status === 'success') {
                return answer.result;
            }

            throw new BegetError(answer.errors, options);
        }

        if (response.status === 'error') {
            throw new BegetError(
                {
                    error_code: response.error_code,
                    error_text: response.error_text,
                },
                options
            );
        }

        throw new Error(`Invalid response:\n${format(options, response)}`);
    }

    api<T extends Beget.Controller, R>(
        section: T,
        method: Beget.Methods[T],
        data?: object
    ): Promise<R> {
        /**
         * // TODO: add support for input_format=json by using JSON.stringify
         *  and if input_format=json && no input_data, then input_data={}
         * json:  input_data=%7B%22hostname%22%3A%22test-domain%22%2C%22zone_id%22%3A1%7D
         * plain: hostname%3Dtest-domain%26zone_id%3D1
         *
         * searchParams: { ...this.credentials, input_data: JSON.stringify(data) },
         */
        const searchParams: RequestOptions = data
            ? { ...this.credentials, ...data }
            : this.credentials;

        const options: OptionsOfDefaultResponseBody = {
            url: `${section}/${method}`,
            searchParams: qs.stringify(searchParams),
        };

        return this.safeRequest(options);
    }
}
