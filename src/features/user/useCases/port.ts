import { User, UserName } from "../model";

export interface AuthenticationService {
  auth(name: UserName, email: Email): Promise<User>;
}
