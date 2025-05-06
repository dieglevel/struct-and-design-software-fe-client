
export interface ErrorResponseType {
    error: string;
    message: string;
    success?: boolean;
    statusCode?: number;
}
export interface ResponseType {
    success?: boolean;
    message: string;
    statusCode: number;
    data: any
}