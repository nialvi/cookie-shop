import { addProduct } from "../domain/cart";
import { Product } from "../domain/product";
import { hasAllergy, User } from "../domain/user";
import { useNotifier } from "../services/notificationAdapter";
import { useCartStorage } from "../services/storageAdapter";

export function useAddToCart() {
  const { cart, updateCart } = useCartStorage();
  const notifier = useNotifier();

  function addToCart(user: User, product: Product): void {
    const warning = "Эта печенька опасна для здоровья! 😱";
    const isDangerous = product.toppings.some((item) => hasAllergy(user, item));
    if (isDangerous) return notifier.notify(warning);

    const updatedCart = addProduct(cart, product);
    updateCart(updatedCart);
  }

  return { addToCart };
}
