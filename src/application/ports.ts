import { Order } from "../domain/order";

export interface OrdersStorageService {
  orders: Order[];
  updateOrders(orders: Order[]): void;
}

export interface NotificationService {
  notify(message: string): void;
}

export interface PaymentService {
  tryPay(amount: PriceCents): Promise<boolean>;
}
