import { Cart } from "../domain/cart";
import { createOrder } from "../domain/order";
import { User } from "../domain/user";
import {
  NotificationService,
  OrdersStorageService,
  PaymentService,
} from "./ports";

const payment: PaymentService = {};
const notifier: NotificationService = {};
const orderStorage: OrdersStorageService = {};

async function orderProducts(user: User, cart: Cart) {
  const order = createOrder(user, cart.products);

  const paid = await payment.tryPay(order.total);

  if (!paid) {
    notifier.notify("Payment not completed");
  }

  const { orders } = orderStorage;
  orderStorage.updateOrders([...orders, order]);
}
