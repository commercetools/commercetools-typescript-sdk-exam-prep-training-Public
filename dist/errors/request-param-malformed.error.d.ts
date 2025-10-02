import { HttpException } from '@nestjs/common';
export declare class RequestParamMalformedException extends HttpException {
    constructor(msg: string);
}
