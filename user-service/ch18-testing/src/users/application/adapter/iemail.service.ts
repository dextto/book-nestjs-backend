export interface IEmailService {
  sendMemberJoinVerification: (email, signupVerifyToken) => Promise<void>;
}