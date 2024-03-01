import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
    statusCode = CustomError.HttpErrorStatus.NotFound;

    constructor() {
        super("Route Not Found")
        Object.setPrototypeOf(this, NotFoundError.prototype)
    }

    serializeErrors() {
        return [
            {
                status: false,
                statusCode: this.statusCode,
                message: "Route Not Found"
            }
        ]
    }
}