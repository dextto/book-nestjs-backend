import * as uuid from 'uuid';
import { Injectable } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';

@Injectable()
export class UsersService {
  constructor(private emailService: EmailService) { }

  async createUser(name: string, email: string, password: string) {
    await this.checkUserExists(email);

    const signupVerifyToken = uuid.v1();

    await this.saveUser(name, email, password, signupVerifyToken);
    await this.sendMemberJoinEmail(email, signupVerifyToken);
  }

  private async checkUserExists(emailAddress: string): Promise<boolean> {
    return false; // TODO: DB 연결 후 구현
  }

  private async saveUser(name: string, email: string, password: string, signupVerifyToken: string) {
    return; // TODO: DB 연결 후 구현
  }

  private async sendMemberJoinEmail(email: string, signupVerifyToken: string) {
    await this.emailService.sendMemberJoinVerification(email, signupVerifyToken);
  }
}
