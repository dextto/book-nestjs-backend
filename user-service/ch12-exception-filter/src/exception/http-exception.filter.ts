import { ArgumentsHost, Catch, ExceptionFilter, HttpException, InternalServerErrorException, Logger } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private logger: Logger) { }

  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();

    if (!(exception instanceof HttpException)) {
      exception = new InternalServerErrorException();
    }

    const response = (exception as HttpException).getResponse();

    const log = {
      timestamp: new Date(),
      url: req.url,
      response,
    }
    this.logger.log(log);

    res
      .status((exception as HttpException).getStatus())
      .json(response);
  }
}
