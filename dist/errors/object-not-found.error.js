"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectNotFoundException = void 0;
const common_1 = require("@nestjs/common");
class ObjectNotFoundException extends common_1.HttpException {
    constructor(msg) {
        super(msg, common_1.HttpStatus.NOT_FOUND);
    }
}
exports.ObjectNotFoundException = ObjectNotFoundException;
//# sourceMappingURL=object-not-found.error.js.map