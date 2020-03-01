import * as qs from 'qs';
import { BegetRequest } from '../src';
import { BegetError } from '../src/beget.error';
import { BegetOptions, BegetRequestOptions } from '../src/options/beget-options';
import * as BegetCommon from '../src/types/common.interface';
import { begetConfig, ID } from './test-utils';

describe('BegetRequest', () => {
    const section = 'user';
    const method = 'getAccountInfo';

    describe('login', () => {
        it('saves beget config', () => {
            const begetConfig: BegetOptions = {
                login: 'login',
                password: 'password',
                httpMethod: 'POST',
            };
            const expected: BegetRequestOptions = {
                login: 'login',
                passwd: 'password',
                input_format: 'plain',
                // output_format: 'json',
            };
            const begetRequest = new BegetRequest(begetConfig);

            expect(begetRequest['config']).toEqual(expected);
        });

        it('does add config to query', async () => {
            const beget = new BegetRequest(begetConfig);

            beget['safeRequest'] = jest.fn();
            jest.spyOn<any, any>(beget, 'safeRequest');

            const data = { id: ID };

            await beget.api(section, method, data);

            expect(beget['safeRequest']).toHaveBeenCalled();
            expect(beget['safeRequest']).toHaveBeenCalledWith({
                searchParams: {
                    login: begetConfig.login,
                    passwd: begetConfig.password,
                    input_format: 'plain',
                    // output_format: 'json',
                    input_data: qs.stringify(data),
                },
                url: [section, method].join('/'),
            });
        });

        it('does handle success result', async () => {
            const beget = new BegetRequest(begetConfig);
            const expected = [
                {
                    id: '125',
                    path: 'site.de/public_html',
                    domains: [
                        {
                            id: '12345',
                            fqdn: 'site.de',
                        },
                    ],
                },
                {
                    id: '124',
                    path: 'facebook.com/public_html',
                    domains: [],
                },
            ];
            const fullResponse: BegetCommon.ResponseSuccess<typeof expected> = {
                status: 'success',
                answer: {
                    status: 'success',
                    result: expected,
                },
            };

            // jest.spyOn(beget, 'request', 'get').mockReturnValue(fullResponse)
            Object.defineProperty(beget, 'request', {
                value: jest.fn().mockReturnValue(Promise.resolve(fullResponse)),
            });

            const result = await beget.api(section, method);

            expect(result).toEqual(expected);
        });

        it('does handle 1st level failed response', async () => {
            const beget = new BegetRequest(begetConfig);
            const fullResponse: BegetCommon.ResponseError = {
                status: 'error',
                error_text: 'No such method',
                error_code: 'NO_SUCH_METHOD',
            };

            Object.defineProperty(beget, 'request', {
                value: jest.fn().mockReturnValue(Promise.resolve(fullResponse)),
            });

            await expect(beget.api(section, method)).rejects.toBeInstanceOf(BegetError);
            // check errors
        });

        it('does handle 2nd level failed response', async () => {
            const beget = new BegetRequest(begetConfig);
            const fullResponse: BegetCommon.ResponseError = {
                status: 'success',
                answer: {
                    status: 'error',
                    errors: [
                        {
                            error_code: 'INVALID_DATA',
                            error_text: 'Login length cannot be greater than 12 characters',
                        },
                    ],
                },
            };

            Object.defineProperty(beget, 'request', {
                value: jest.fn().mockReturnValue(Promise.resolve(fullResponse)),
            });

            await expect(beget.api(section, method)).rejects.toBeInstanceOf(BegetError);
        });

        it('does handle unknown response', async () => {
            const beget = new BegetRequest(begetConfig);
            const fullResponse = {
                invalidProp: 'invalidProp',
                invalidCode: 'invalidCode',
            };

            Object.defineProperty(beget, 'request', {
                value: jest.fn().mockReturnValue(Promise.resolve(fullResponse)),
            });

            await expect(beget.api(section, method)).rejects.toBeInstanceOf(Error);
        });
    });

    it('does handle non 200 statusCode response', async () => {
        const beget = new BegetRequest(begetConfig);
        const requestError = { message: 'not found', options: { uri: 'invalid' } };
        Object.defineProperty(beget, 'request', {
            value: jest.fn().mockReturnValue(Promise.reject(requestError)),
        });

        await expect(beget.api(section, method)).rejects.toBeInstanceOf(Error);
    });
});
