import { ErrorPayload } from './types/common.interface';
export declare class BegetError extends Error {
    payload: ErrorPayload | ErrorPayload[];
    on?: object | undefined;
    name: string;
    fatal: boolean;
    constructor(payload: ErrorPayload | ErrorPayload[], on?: object | undefined);
}
