import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonService {
  hello(): string {
    return 'Hello from CommonService';
  }
}
