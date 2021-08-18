import { Cart } from "../domain/cart";
import { Order } from "../domain/order";
import { Product } from "../domain/product";
import { User, UserName } from "../domain/user";

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

export interface AuthenticationService {
  auth(name: UserName, email: Email): Promise<User>;
}
