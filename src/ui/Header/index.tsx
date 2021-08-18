import { Link } from "react-router-dom";
import { useCartStorage, useUserStorage } from "../../services/storageAdapter";

import styles from "./index.module.css";

export const Header: React.FC = () => {
  const { user } = useUserStorage();
  const { cart } = useCartStorage();

  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/">
        Cookie 🍪
      </Link>

      {!user ? (
        <Link to="/auth">Login</Link>
      ) : (
        <Link to="/user">
          {user.name} ({cart.products.length})
        </Link>
      )}
    </header>
  );
};
