import { Product, ingredients } from "../../domain/product";

type ToppingsProps = {
  cookie: Product;
};

export function Toppings({ cookie }: ToppingsProps) {
  return (
    <ul>
      {cookie.toppings.map((topping) => (
        <li key={topping}>{ingredients[topping]} </li>
      ))}
    </ul>
  );
}
