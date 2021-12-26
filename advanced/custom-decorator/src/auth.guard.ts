import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    // JWT를 검증해서 얻은 정보를 넣습니다. 예를 위해 하드코딩 하였습니다.
    request.user = {
      name: 'Dexter',
      // name: 1, // 오류 발생할 테스트 할때 위 라인을 주석처리하고 현재 라인의 주석을 풀어보세요.
      email: 'dexter.haan@gmail.com',
    };

    return true;
  }
}
