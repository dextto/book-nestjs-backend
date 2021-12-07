import { Injectable } from '@nestjs/common';
import { BaseService } from './base-service';
import { ServiceA } from './service-A';

@Injectable()
export class ServiceB extends BaseService {
  // 상속관계에서 생성자 기반 주입을 받을 때는 하위 클래스가 super를 통해 상위 클래스에 필요한 프로바이더를 전달해 줘야 한다.
  // constructor(private readonly _serviceA: ServiceA) {
  //   super(_serviceA);
  // }

  getHello(): string {
    return this.doSomeFuncFromA();
  }
}
