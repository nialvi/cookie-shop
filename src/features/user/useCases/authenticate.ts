import { UserName } from "../model";
import { useAuth } from "../adapter/auth";
import { useUserStorage } from "../../storage/adapter/store";
import { UserStorageService } from "../../storage/useCases/port";

import { AuthenticationService } from "./port";

export function useAuthenticate() {
  const storage: UserStorageService = useUserStorage();
  const authClient: AuthenticationService = useAuth();

  async function authenticate(name: UserName, email: Email): Promise<void> {
    const user = await authClient.auth(name, email);
    storage.updateUser(user);
  }

  return {
    authenticate,
    user: storage.user,
  };
}
