import { Product, ingredients } from "../../features/product/model";
import { hasAllergy, hasPreferences } from "../../features/user/model";
import { useUserStorage } from "../../features/storage/adapter/store";

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
