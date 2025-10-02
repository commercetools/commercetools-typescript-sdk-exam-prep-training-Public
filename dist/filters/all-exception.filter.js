"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
const error_type_1 = require("../types/error.type");
let AllExceptionsFilter = class AllExceptionsFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        if ((0, error_type_1.isSDKError)(exception)) {
            const statusCode = exception.statusCode || 500;
            const message = exception.message || 'Commercetools SDK Error';
            const errors = Array.isArray(exception.body?.errors)
                ? exception.body.errors.map((e) => e.message)
                : undefined;
            return response.status(statusCode).json({
                statusCode,
                message,
                errors,
                timestamp: new Date().toISOString(),
                path: request.url,
            });
        }
        if (exception instanceof common_1.HttpException) {
            const statusCode = exception.getStatus();
            let message = 'Internal Server Error';
            let errors;
            const errorResponse = exception.getResponse();
            if (typeof errorResponse === 'string') {
                message = errorResponse;
            }
            else if (typeof errorResponse === 'object' && errorResponse !== null) {
                message = errorResponse.message || message;
                if (Array.isArray(errorResponse.message)) {
                    errors = errorResponse.message;
                    message = 'Validation failed';
                }
            }
            return response.status(statusCode).json({
                statusCode,
                message,
                errors,
                timestamp: new Date().toISOString(),
                path: request.url,
            });
        }
        if (exception instanceof Error) {
            return response.status(500).json({
                statusCode: 500,
                message: exception.message,
                timestamp: new Date().toISOString(),
                path: request.url,
            });
        }
        response.status(500).json({
            statusCode: 500,
            message: 'Unexpected error occurred',
            timestamp: new Date().toISOString(),
            path: request.url,
        });
    }
};
exports.AllExceptionsFilter = AllExceptionsFilter;
exports.AllExceptionsFilter = AllExceptionsFilter = __decorate([
    (0, common_1.Catch)()
], AllExceptionsFilter);
//# sourceMappingURL=all-exception.filter.js.map