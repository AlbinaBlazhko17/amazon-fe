import { BaseHttp } from './base-http';

const http = new BaseHttp();

export { http };
export { HttpCode, HttpHeader, ContentType, HttpMethod } from './libs/enums';
export { HttpError } from './libs/exceptions';
export { type HttpModule, type HttpOptions, type MethodBodyOptions } from './libs/types';
