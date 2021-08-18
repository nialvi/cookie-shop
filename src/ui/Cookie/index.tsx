import { useAddToCart } from "../../application/addToCart";
import { contains } from "../../domain/cart";
import { Product } from "../../domain/product";
import { useCartStorage, useUserStorage } from "../../services/storageAdapter";
import styles from "./index.module.css";
import { Toppings } from "./Topping";

type CookieProps = {
  cookie: Product;
};

export function Cookie({ cookie }: CookieProps) {
  const { user } = useUserStorage();
  const { cart } = useCartStorage();
  const { addToCart } = useAddToCart();

  return (
    <article className={styles.cookie}>
      <span className={styles.image}>🍪</span>
      <span className={styles.title}>{cookie.title}</span>

      {!!user && (
        <button type="button" onClick={() => addToCart(user, cookie)}>
          {cookie.price / 100} ₽
        </button>
      )}

      <Toppings cookie={cookie} />

      {contains(cart, cookie) && <>В корзине</>}
    </article>
  );
}
