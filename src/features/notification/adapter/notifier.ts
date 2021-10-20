import { NotificationService } from "../useCases/port";

export function useNotifier(): NotificationService {
  return {
    notify(message: string) {
      window.alert(message);
    },
  };
}
