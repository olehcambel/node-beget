type InputFormat = 'json' | 'plain';

export interface BegetOptions {
    login: string;
    password: string;
    // inputFormat?: InputFormat;
    httpMethod?: 'POST' | 'GET';
}

export interface RequestOptions {
    login: string;
    passwd: string;
    input_format?: InputFormat;
    output_format?: 'json';
    // [x: string]: any;
}

export interface BegetCredentials {
    login: string;
    passwd: string;
}
