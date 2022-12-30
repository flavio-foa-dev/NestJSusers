import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AbstractHttpAdapter, HttpAdapterHost } from '@nestjs/core';

@Catch()
export class FilterExceptionHTTp implements ExceptionFilter {
  private httpAdapter: AbstractHttpAdapter;
  constructor(private adapterhost: HttpAdapterHost) {
    this.httpAdapter = adapterhost.httpAdapter;
  }

  catch(exception: Error, host: ArgumentsHost) {
    const resultContext = host.switchToHttp();
    const request = resultContext.getRequest();
    const response = resultContext.getResponse();

    const { status, body } =
      exception instanceof HttpException
        ? {
            status: exception.getStatus(),
            body: exception.getResponse(),
          }
        : {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            body: {
              statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              timeStamp: new Date().toISOString(),
              message: exception.message,
              path: request.path,
            },
          };

    this.httpAdapter.reply(response, body, status);
  }
}
