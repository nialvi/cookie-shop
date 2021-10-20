import { useCookieStorage } from "../../features/storage/adapter/store";
import { Cookie } from "../Cookie";

import styles from "./index.module.css";

export const Home: React.FC = () => {
  const { cookies } = useCookieStorage();

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
    </div>
  );
};
