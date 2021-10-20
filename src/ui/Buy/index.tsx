import React, { useState } from "react";
import { useOrderProducts } from "../../features/product/useCases/orderProducts";
import { UserName } from "../../features/user/model";
import {
  useCartStorage,
  useUserStorage,
} from "../../features/storage/adapter/store";
import styles from "./index.module.css";

export function Buy() {
  const { orderProducts } = useOrderProducts();
  const { user } = useUserStorage();
  const { cart } = useCartStorage();
  const [name, setName] = useState<UserName>(user?.name ?? "");
  const [email, setEmail] = useState<Email>(user?.email ?? "");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    setLoading(true);
    e.preventDefault();
    await orderProducts(user!, cart);

    setLoading(false);
  }

  return (
    <section>
      <h2>Оформить заказ</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          <span>Имя:</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
        </label>
        <label>
          <span>Почта:</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Адрес:</span>
          <textarea
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Готовим заказ" : "Оплатить онлайн"}
        </button>
      </form>
    </section>
  );
}
