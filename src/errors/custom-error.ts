type StatusErrorCode = 400 | 401 | 404 | 403 | 406 | 409 | 413 | 500

export interface SerializeErrorType {
    status: boolean,
    statusCode: StatusErrorCode,
    message: string,
    field?: string,
    devError?: any,
}

type HttpErrorStatusType = {
    BadRequest: StatusErrorCode,
    Unauthorized: StatusErrorCode,
    NotFound: StatusErrorCode,
    Forbidden: StatusErrorCode,
    NotAcceptable: StatusErrorCode,
    Conflict: StatusErrorCode,
    RequestOverSize: StatusErrorCode,
    InternalServerError: StatusErrorCode,
}

type ValueOf<T> = T[keyof T]
type StatusErrorCodeType = ValueOf<typeof CustomError.HttpErrorStatus>

export abstract class CustomError extends Error {
    static HttpErrorStatus: HttpErrorStatusType = {
        BadRequest: 400,
        Unauthorized: 401,
        NotFound: 404,
        Forbidden: 403,
        NotAcceptable: 406,
        Conflict: 409,
        RequestOverSize: 413,
        InternalServerError: 500,
    }
    abstract statusCode: StatusErrorCodeType

    constructor(message: string) {
        super(message)
        Object.setPrototypeOf(this, CustomError)
    }

    abstract serializeErrors(): SerializeErrorType[]
}