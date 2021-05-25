"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mwError = exports.HttpError = void 0;
class HttpError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
    }
}
exports.HttpError = HttpError;
function mwError(err, req, res, next) {
    const status = undefined || 500;
    const message = err.message || 'Something went wrong';
    res.status(status).json({ status, message });
}
exports.mwError = mwError;
