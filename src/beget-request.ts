import got from 'got';
import { OptionsOfDefaultResponseBody } from 'got/dist/source/create';
import * as qs from 'qs';
import { format } from 'util';
import { BegetError } from './beget.error';
import { BegetOptions, BegetRequestOptions } from './options/beget-options';
import * as BegetCommon from './types/common.interface';
import * as Beget from './types/controller.interface';

export class BegetRequest {
    private request = got.extend({
        resolveBodyOnly: true,
        responseType: 'json',
        prefixUrl: `https://api.beget.com/api`,
    });

    private readonly config: BegetRequestOptions;

    constructor(config: BegetOptions) {
        this.config = {
            login: config.login,
            passwd: config.password,
            input_format: config.inputFormat || 'json',
            output_format: config.outputFormat || 'json',
        };
    }
    // constructor(private readonly config: BegetOptions) {}

    private async safeRequest<R>(options: OptionsOfDefaultResponseBody): Promise<R> {
        const response = await this.request
            .get<BegetCommon.ResponseSuccess<R> | BegetCommon.ResponseError>(
                options as Types.Merge<OptionsOfDefaultResponseBody, { resolveBodyOnly: true }>
            )
            .catch(({ message, options }) => {
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
        const options: OptionsOfDefaultResponseBody = {
            url: `${section}/${method}`,
            searchParams: { ...this.config, input_data: qs.stringify(data) },
        };

        return this.safeRequest(options);
    }
}
