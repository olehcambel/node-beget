export interface BegetOptions {
    login: string;
    password: string;
    outputFormat?: string;
    inputFormat?: 'plain' | 'json';
}

export interface BegetRequestOptions {
    login: string;
    passwd: string;
    output_format: string;
    input_format: string;
}
