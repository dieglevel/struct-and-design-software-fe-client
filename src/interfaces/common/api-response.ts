export interface IApiResponse<T> {
    status: number;
    message: string;
    success: boolean;
    data: T;
}
