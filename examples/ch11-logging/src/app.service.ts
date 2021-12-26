import { ConsoleLogger, Injectable, Logger } from '@nestjs/common';
import { MyLogger } from './logging/my-logger.service';

@Injectable()
export class AppService {
  constructor(private myLogger: MyLogger) { }

  private readonly logger = new Logger(AppService.name);
  // private readonly myLogger = new MyLogger();
  // private readonly myLogger = new ConsoleLogger(AppService.name);

  getHello(): string {
    // this.printDefaultLogs();
    this.printMyLogs();

    return 'Hello World!';
  }

  private printDefaultLogs() {
    this.logger.error('level: error');
    this.logger.warn('level: warn');
    this.logger.log('level: log');
    this.logger.verbose('level: verbose');
    this.logger.debug('level: debug');
  }

  private printMyLogs() {
    this.myLogger.error('level: error');
    this.myLogger.warn('level: warn');
    this.myLogger.log('level: log');
    this.myLogger.verbose('level: verbose');
    this.myLogger.debug('level: debug');
  }
}

