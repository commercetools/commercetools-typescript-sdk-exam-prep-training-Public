"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSDKError = isSDKError;
function isSDKError(error) {
    return (typeof error === 'object' &&
        error !== null &&
        'name' in error &&
        'retryCount' in error &&
        'body' in error &&
        typeof error.body?.statusCode === 'number');
}
//# sourceMappingURL=error.type.js.map