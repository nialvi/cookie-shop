import { useOrderProducts } from "../../application/orderProducts";
import { useCartStorage, useUserStorage } from "../../services/storageAdapter";

export const Home: React.FC = () => {
  const { orderProducts } = useOrderProducts();
  const { user } = useUserStorage();
  const { cart } = useCartStorage();

  const handleClick = async () => {
    await orderProducts(user!, cart);
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>order now!</button>
    </div>
  );
};
