type THttpResponse<T> = {
    status: number | undefined;
    data: T | boolean | null | undefined;
    message: string | undefined;
    kind: string | undefined;
};