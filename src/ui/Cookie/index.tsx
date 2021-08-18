import { Product } from "../../domain/product";
import styles from "./index.module.css";
import { Toppings } from "./Topping";

type CookieProps = {
  cookie: Product;
};

export function Cookie({ cookie }: CookieProps) {
  return (
    <article className={styles.cookie}>
      <span className={styles.image}>🍪</span>
      <span className={styles.title}>{cookie.title}</span>

      <Toppings cookie={cookie} />
    </article>
  );
}
