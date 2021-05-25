import { Request, Response, NextFunction } from 'express';

export class HttpError extends Error {
    status: number

    constructor(status: number, message: string) {
        super(message)
        this.status = status
    }
}

export function mwError(err: HttpError, req: Request, res: Response, next: NextFunction) {
    const status = undefined || 500
    const message = err.message || 'Something went wrong'
    res.status(status).json({ status, message })
}
