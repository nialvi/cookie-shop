import { PaymentService } from "../useCases/port";
import { fakeApi } from "../../../api";

export function usePayment(): PaymentService {
  return {
    tryPay(amount: PriceCents) {
      return fakeApi(true);
    },
  };
}
