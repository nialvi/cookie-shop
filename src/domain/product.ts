export type ProductTitle = string;
export type Product = {
  id: UniqueId;
  title: ProductTitle;
  price: PriceCents;
  toppings: Ingredient[];
};

export function totalPrice(products: Product[]): PriceCents {
  return products.reduce((total, product) => total + product.price, 0);
}
