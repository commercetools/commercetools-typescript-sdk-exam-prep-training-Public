"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestParamMalformedException = void 0;
const common_1 = require("@nestjs/common");
class RequestParamMalformedException extends common_1.HttpException {
    constructor(msg) {
        super(msg, common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.RequestParamMalformedException = RequestParamMalformedException;
//# sourceMappingURL=request-param-malformed.error.js.map