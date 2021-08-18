import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useAuthenticate } from "../../application/authenticate";
import { UserName } from "../../domain/user";
import styles from "./index.module.css";

export const Auth: React.FC = () => {
  const [name, setName] = useState<UserName>("");
  const [email, setEmail] = useState<Email>("");
  const [loading, setLoading] = useState(false);
  const { user, authenticate } = useAuthenticate();

  if (!!user) {
    return <Redirect to="/" />;
  }

  async function handleSubmit(e: React.FormEvent) {
    setLoading(true);
    e.preventDefault();

    await authenticate(name, email);

    setLoading(false);
  }

  return (
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

      <button type="submit" disabled={loading}>
        {loading ? "Пробуем войти..." : "Войти"}
      </button>
    </form>
  );
};
