import { ConsoleLogger, LoggerService, LogLevel } from '@nestjs/common';

// export class MyLogger implements LoggerService {
//   log(message: any, ...optionalParams: any[]) {
//     console.log(message);
//   }
//   error(message: any, ...optionalParams: any[]) {
//     console.log(message);
//   }
//   warn(message: any, ...optionalParams: any[]) {
//     console.log(message);
//   }
//   debug?(message: any, ...optionalParams: any[]) {
//     console.log(message);
//   }
//   verbose?(message: any, ...optionalParams: any[]) {
//     console.log(message);
//   }
// }

export class MyLogger extends ConsoleLogger {
  log(message: any, stack?: string, context?: string) {
    super.log.apply(this, arguments);
    this.doSomething();
  }

  private doSomething() {
    // 여기에 로깅에 관련된 부가 로직을 추가합니다.
    // ex. DB에 저장    
  }
}