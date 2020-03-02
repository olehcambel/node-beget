"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// interface ResponseOptions {
//     method: string;
//     payload: object;
// }
class BegetError extends Error {
    constructor(payload, on /* ResponseOptions */) {
        super(Array.isArray(payload)
            ? 'error in answer'
            : `${payload.error_code}: ${payload.error_text}`);
        this.payload = payload;
        this.on = on;
        this.name = 'BegetError';
        this.fatal = !Array.isArray(payload);
    }
}
exports.BegetError = BegetError;
