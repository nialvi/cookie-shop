import { AuthenticationService } from "../useCases/port";
import { UserName } from "../model";
import { fakeApi } from "../../../api";

export function useAuth(): AuthenticationService {
  return {
    auth(name: UserName, email: Email) {
      return fakeApi({
        name,
        email,
        id: "admin-id",
        allergies: ["cocoa", "cherry"],
        preferences: ["marshmallow", "peanuts"],
      });
    },
  };
}
