import { Product, ingredients } from "../../domain/product";
import { hasAllergy, hasPreferences } from "../../domain/user";
import { useUserStorage } from "../../services/storageAdapter";

type ToppingsProps = {
  cookie: Product;
};

export function Toppings({ cookie }: ToppingsProps) {
  const { user } = useUserStorage();

  return (
    <ul>
      {cookie.toppings.map((topping) => (
        <li key={topping}>
          {ingredients[topping]}
          {!!user && hasPreferences(user, topping) && <>👍</>}
          {!!user && hasAllergy(user, topping) && <>⚠️</>}
        </li>
      ))}
    </ul>
  );
}
