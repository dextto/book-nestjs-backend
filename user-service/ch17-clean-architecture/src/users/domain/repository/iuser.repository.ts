import { User } from '../user';

export interface IUserRepository {
  findByEmail: (email: string) => Promise<User>;
  findByEmailAndPassword: (email: string, password: string) => Promise<User>;
  findBySignupVerifyToken: (signupVerifyToken: string) => Promise<User>;
  save: (id: string, name: string, email: string, password: string, signupVerifyToken: string) => Promise<void>;
}