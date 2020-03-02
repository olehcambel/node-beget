import { BegetOptions } from './options/beget-options';
import * as Beget from './types/controller.interface';
export declare class BegetRequest {
    private request;
    private readonly config;
    constructor(config: BegetOptions);
    private safeRequest;
    api<T extends Beget.Controller, R>(section: T, method: Beget.Methods[T], data?: object): Promise<R>;
}
