import * as uuid from 'uuid';
import { Injectable } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';

@Injectable()
export class UsersService {
  constructor(private emailService: EmailService) { }

  async createUser(name: string, email: string, password: string) {
    await this.checkUserExists(email);

    const authToken = uuid.v1();

    await this.saveUser(name, email, password, authToken);
    await this.sendMemberJoinEmail(email, authToken);
  }

  private async checkUserExists(emailAddress: string): Promise<boolean> {
    return false; // TODO: DB 연결 후 구현
  }

  private async saveUser(name: string, email: string, password: string, authToken: string) {
    return; // TODO: DB 연결 후 구현
  }

  private async sendMemberJoinEmail(email: string, authToken: string) {
    await this.emailService.sendMemberJoinVerification(email, authToken);
  }
}
