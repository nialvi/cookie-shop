import { ingredients } from "../../features/product/model";
import { useUserStorage } from "../../features/storage/adapter/store";

export function Profile() {
  const { user } = useUserStorage();

  if (!user) {
    return null;
  }

  return (
    <>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>Аллергии:</p>
      <ul>
        {user.allergies.map((ingredient) => (
          <li key={ingredient}>{ingredients[ingredient]}</li>
        ))}
      </ul>
      <p>Предпочтения:</p>
      <ul>
        {user.preferences.map((ingredient) => (
          <li key={ingredient}>{ingredients[ingredient]}</li>
        ))}
      </ul>
    </>
  );
}
