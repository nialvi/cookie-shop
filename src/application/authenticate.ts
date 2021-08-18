import { UserName } from "../domain/user";
import { useAuth } from "../services/authAdapter";
import { useUserStorage } from "../services/storageAdapter";
import { AuthenticationService, UserStorageService } from "./ports";

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
