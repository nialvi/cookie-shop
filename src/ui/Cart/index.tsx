import { totalPrice } from "../../features/product/model";
import { useCartStorage } from "../../features/storage/adapter/store";
import { Cookie } from "../Cookie";
import styles from "./index.module.css";

export function Cart() {
  const { cart } = useCartStorage();

  return (
    <section>
      <h2>Корзина</h2>

      <ul className={styles.list}>
        {cart.products.map((product) => (
          <li key={product.id}>
            <Cookie cookie={product} />
          </li>
        ))}
      </ul>

      <p>Итого: {totalPrice(cart.products) / 100} ₽</p>
    </section>
  );
}
