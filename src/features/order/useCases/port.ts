import { Order } from "../model";

export interface OrdersStorageService {
  orders: Order[];
  updateOrders(orders: Order[]): void;
}
