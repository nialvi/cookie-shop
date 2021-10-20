import { Cart } from "../../cart/model";
import { Order } from "../../order/model";
import { Product } from "../../product/model";
import { User } from "../../user/model";

export interface OrdersStorageService {
  orders: Order[];
  updateOrders(orders: Order[]): void;
}

export interface CartStorageService {
  cart: Cart;
  updateCart(cart: Cart): void;
  emptyCart(): void;
}

export interface UserStorageService {
  user?: User;
  updateUser(user: User): void;
}

export interface CookieStorageService {
  cookies: Product[];
}
