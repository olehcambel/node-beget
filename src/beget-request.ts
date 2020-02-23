import got from 'got';
import * as qs from 'qs';
import { OptionsOfDefaultResponseBody } from 'got/dist/source/create';
import { format } from 'util';
import { BegetOptions } from './options/beget-options';
import { BegetError } from './beget.error';
import * as Beget from './types/controller.interface';
import * as BegetCommon from './types/common.interface';

export class BegetRequest {
    private request = got.extend({
        resolveBodyOnly: true,
        responseType: 'json',
        prefixUrl: `https://api.beget.com/api`,
    });

    constructor(private readonly config: BegetOptions) {}

    private async safeRequest<R>(options: OptionsOfDefaultResponseBody): Promise<R> {
        const response = await this.request
            .get<BegetCommon.ResponseSuccess<R> | BegetCommon.ResponseError>(
                options as Types.Merge<
                    OptionsOfDefaultResponseBody,
                    { resolveBodyOnly: true }
                >
            )
            .catch(({ message, options }) => {
                throw new Error(
                    `Invalid response status:\n${format({ message, options })}`
                );
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
            searchParams: qs.stringify(
                Object.assign(
                    {
                        login: this.config.login,
                        passwd: this.config.password,
                        output_format: this.config.outputFormat,
                        input_format: this.config.inputFormat,
                    },
                    data
                )
            ),
        };

        return this.safeRequest(options);
    }
}
