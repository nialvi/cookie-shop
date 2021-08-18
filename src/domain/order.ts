import { Product, totalPrice } from "./product";
import { User } from "./user";

export type OrderStatus = "new" | "delivery" | "completed";
export type Order = {
  user: UniqueId;
  products: Product[];
  created: DateTimeString;
  status: OrderStatus;
  total: PriceCents;
};

export function createOrder(user: User, products: Product[]): Order {
  return {
    user: user.id,
    products,
    created: new Date().toISOString(),
    status: "new",
    total: totalPrice(products),
  };
}
