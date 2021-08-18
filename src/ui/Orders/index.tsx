import { useOrdersStorage } from "../../services/storageAdapter";

export function Orders() {
  const { orders } = useOrdersStorage();

  return (
    <section>
      <h2>Заказы</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.created}>
            {order.created} | {order.total / 100} ₽ | {order.status}
          </li>
        ))}
      </ul>
    </section>
  );
}
