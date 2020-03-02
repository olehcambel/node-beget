declare type InputFormat = 'json' | 'plain';
export interface BegetOptions {
    login: string;
    password: string;
    httpMethod?: 'POST' | 'GET';
}
export interface BegetRequestOptions {
    login: string;
    passwd: string;
    input_format: InputFormat;
}
export {};
