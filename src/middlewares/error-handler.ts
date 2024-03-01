import { NextFunction, Request, Response } from "express";
import { CustomError, SerializeErrorType } from "../errors/custom-error";
import { isProduction } from "../helper/AppHelper";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if( err instanceof CustomError) {
        return res.status(err.statusCode).send({errors: err.serializeErrors()})
    }
    const unhandleError:SerializeErrorType = {
        status: false,
        statusCode: 400,
        message: 'Something went wrong'
    }
    if(!isProduction()) {
        unhandleError.devError = err
    }
    res.status(400).send({
        errors: [unhandleError]
    })
}