import { addProduct } from "../model";
import { Product } from "../../product/model";
import { hasAllergy, User } from "../../user/model";
import { useNotifier } from "../../notification/adapter/notifier";
import { useCartStorage } from "../../storage/adapter/store";

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
