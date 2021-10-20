import { Cart } from "../../cart/model";
import { createOrder } from "../../order/model";
import { User } from "../../user/model";
import { useNotifier } from "../../notification/adapter/notifier";
import { usePayment } from "../../payment/adapter/pay";
import { useCartStorage, useOrdersStorage } from "../../storage/adapter/store";

export function useOrderProducts() {
  const payment = usePayment();
  const notifier = useNotifier();
  const orderStorage = useOrdersStorage();
  const carStorage = useCartStorage();

  async function orderProducts(user: User, cart: Cart) {
    const order = createOrder(user, cart.products);

    const paid = await payment.tryPay(order.total);

    if (!paid) {
      notifier.notify("Payment not completed");
    }

    const { orders } = orderStorage;
    orderStorage.updateOrders([...orders, order]);
    carStorage.emptyCart();
  }

  return { orderProducts };
}
