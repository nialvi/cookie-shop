import { useOrderProducts } from "../../application/orderProducts";
import {
  useCartStorage,
  useCookieStorage,
  useUserStorage,
} from "../../services/storageAdapter";
import { Cookie } from "../Cookie";

import styles from "./index.module.css";

export const Home: React.FC = () => {
  const { orderProducts } = useOrderProducts();
  const { user } = useUserStorage();
  const { cart } = useCartStorage();
  const { cookies } = useCookieStorage();

  const handleClick = async () => {
    await orderProducts(user!, cart);
  };

  return (
    <div>
      <h1>Home</h1>

      <ul className={styles.list}>
        {cookies.map((cookie) => (
          <li key={cookie.id}>
            <Cookie cookie={cookie} />
          </li>
        ))}
      </ul>

      <button onClick={handleClick}>order now!</button>
    </div>
  );
};
