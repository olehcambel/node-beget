export declare type ResponseError = ResponseErrorMethod | ResponseErrorQuery;
export interface ResponseSuccess<T> {
    status: 'success';
    answer: {
        status: 'success';
        result: T;
    };
}
interface ResponseErrorMethod {
    status: 'success';
    answer: {
        status: 'error';
        errors: ErrorPayload[];
    };
}
interface ResponseErrorQuery extends ErrorPayload {
    status: 'error';
}
export interface ErrorPayload {
    error_text: string;
    error_code: string;
}
export {};
