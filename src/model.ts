export type RequestItem = {
    url: string;
    headers?: object;
    body?: string;
    method: HTTP_METHOD;
    responseType: ResponseType
}

export enum ResponseMethod {
    ANY,
    ALL,
    ALL_SETTLED
}

export enum ResponseType {
    TEXT,
    JSON
}

export type ResponseItem = {
    json: object;
    status: number;
}

export enum HTTP_METHOD {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}