import { HttpException } from '@nestjs/common';
export declare class ObjectNotFoundException extends HttpException {
    constructor(msg: string);
}
