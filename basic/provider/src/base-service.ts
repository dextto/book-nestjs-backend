import { Inject, Injectable } from '@nestjs/common';
import { ServiceA } from './service-A';

// @Injectable()
export class BaseService {
  // 상속관계에서 생성자 기반 주입을 받을 때
  // constructor(private readonly serviceA: ServiceA) {}

  // 상속관계에서 속성 기반 주입을 받을 때
  @Inject(ServiceA)
  private readonly serviceA: ServiceA;

  getHello(): string {
    return 'Hello World BASE!';
  }

  doSomeFuncFromA(): string {
    return this.serviceA.getHello();
  }
}
