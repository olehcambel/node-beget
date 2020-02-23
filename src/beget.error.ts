import { ErrorPayload } from './types/common.interface';

// interface ResponseOptions {
//     method: string;
//     payload: object;
// }

export class BegetError extends Error {
    name = 'BegetError';
    fatal: boolean;

    constructor(
        public payload: ErrorPayload | ErrorPayload[],
        public on?: object /* ResponseOptions */
    ) {
        super(
            Array.isArray(payload)
                ? 'error in answer'
                : `${payload.error_code}: ${payload.error_text}`
        );

        this.fatal = !Array.isArray(payload);
    }
}
