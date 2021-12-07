import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    // 보통 JWT를 검증해서 얻은 정보를 넣습니다.
    request.user = {
      name: 'Dexter',
      // name: 1, // 오류 발생할 때 위 라인을 주석처리하고 현재 라인의 주석을 풀어보세요.
      email: 'dexter.haan@gmail.com',
    };

    return true;
  }
}
