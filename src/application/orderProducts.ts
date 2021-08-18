import { Cart } from "../domain/cart";
import { createOrder } from "../domain/order";
import { User } from "../domain/user";
import { useNotifier } from "../services/notificationAdapter";
import { usePayment } from "../services/paymentAdapter";
import { useOrdersStorage } from "../services/storageAdapter";

export function useOrderProducts() {
  const payment = usePayment();
  const notifier = useNotifier();
  const orderStorage = useOrdersStorage();

  async function orderProducts(user: User, cart: Cart) {
    const order = createOrder(user, cart.products);

    const paid = await payment.tryPay(order.total);

    if (!paid) {
      notifier.notify("Payment not completed");
    }

    const { orders } = orderStorage;
    orderStorage.updateOrders([...orders, order]);
  }

  return { orderProducts };
}
