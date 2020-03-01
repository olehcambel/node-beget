type InputFormat = 'json' | 'plain';

export interface BegetOptions {
    login: string;
    password: string;
    // outputFormat?: 'json';
    // inputFormat?: InputFormat;
    httpMethod?: 'POST' | 'GET';
}

export interface BegetRequestOptions {
    login: string;
    passwd: string;
    input_format: InputFormat;
    // output_format?: 'json';
    // output_data?: string;
}
